const BMKG_XML_URL = 'https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-JawaBarat.xml'

export const fetchBMKGWeather = async () => {
  try {
    const response = await fetch(BMKG_XML_URL)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const xmlText = await response.text()
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
    
    const areas = xmlDoc.querySelectorAll('area')
    const weatherData = []
    
    areas.forEach((area) => {
      const areaId = area.getAttribute('id')
      const areaName = area.querySelector('name[xml\\:lang="id_ID"]')?.textContent || 
                       area.querySelector('name')?.textContent || 'Unknown'
      
      const parameters = area.querySelectorAll('parameter')
      const forecast = {
        id: areaId,
        location: areaName,
        forecasts: []
      }
      
      parameters.forEach((param) => {
        const paramId = param.getAttribute('id')
        const timeranges = param.querySelectorAll('timerange')
        
        timeranges.forEach((timerange, index) => {
          if (index >= 3) return
          
          const datetime = timerange.getAttribute('datetime')
          const value = timerange.querySelector('value')?.textContent || ''
          
          if (!forecast.forecasts[index]) {
            forecast.forecasts[index] = {
              datetime: datetime,
              time: formatDateTime(datetime)
            }
          }
          
          switch(paramId) {
            case 't':
              forecast.forecasts[index].temperature = value
              break
            case 'hu':
              forecast.forecasts[index].humidity = value
              break
            case 'ws':
              forecast.forecasts[index].windSpeed = value
              break
            case 'wd':
              forecast.forecasts[index].windDirection = value
              break
            case 'weather':
              forecast.forecasts[index].weatherCode = value
              forecast.forecasts[index].weatherDesc = getWeatherDescription(value)
              break
          }
        })
      })
      
      if (forecast.forecasts.length > 0) {
        weatherData.push(forecast)
      }
    })
    
    return weatherData
  } catch (error) {
    console.error('Error fetching BMKG data:', error)
    throw error
  }
}

const formatDateTime = (datetime) => {
  if (!datetime) return ''
  try {
    const year = datetime.substring(0, 4)
    const month = datetime.substring(4, 6)
    const day = datetime.substring(6, 8)
    const hour = datetime.substring(8, 10)
    const minute = datetime.substring(10, 12)
    
    const date = new Date(year, month - 1, day, hour, minute)
    
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des']
    
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} ${hour}:${minute} WIB`
  } catch (e) {
    return datetime
  }
}

const getWeatherDescription = (code) => {
  const weatherCodes = {
    '0': 'Cerah',
    '1': 'Cerah Berawan',
    '2': 'Cerah Berawan',
    '3': 'Berawan',
    '4': 'Berawan Tebal',
    '5': 'Udara Kabur',
    '10': 'Asap',
    '45': 'Kabut',
    '60': 'Hujan Ringan',
    '61': 'Hujan Sedang',
    '63': 'Hujan Lebat',
    '80': 'Hujan Lokal',
    '95': 'Hujan Petir',
    '97': 'Hujan Petir'
  }
  return weatherCodes[code] || 'Tidak Diketahui'
}
