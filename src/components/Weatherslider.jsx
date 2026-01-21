import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Cloud, Droplets, Wind, MapPin, AlertCircle, ExternalLink } from 'lucide-react'
import { fetchBMKGWeather } from '../services/weatherService'

export default function WeatherSlider() {
  const [weatherData, setWeatherData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const loadWeather = async () => {
      try {
        setIsLoading(true)
        const data = await fetchBMKGWeather()
        setWeatherData(data)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadWeather()
  }, [])

  useEffect(() => {
    if (weatherData.length === 0 || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % weatherData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [weatherData.length, isPaused])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + weatherData.length) % weatherData.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % weatherData.length)
  }

  if (isLoading) {
    return (
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Memuat data cuaca BMKG...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-12 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Gagal Memuat Data Cuaca
            </h3>
            <p className="text-gray-600 mb-4">
              Tidak dapat mengambil data dari BMKG. Silakan akses langsung ke sumber resmi.
            </p>
            <a
              href="https://www.bmkg.go.id/cuaca/prakiraan-cuaca.bmkg?Prov=12&NamaProv=Jawa%20Barat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Buka Portal BMKG
            </a>
          </div>
        </div>
      </section>
    )
  }

  if (weatherData.length === 0) {
    return null
  }

  const currentWeather = weatherData[currentIndex]
  const currentForecast = currentWeather?.forecasts?.[0]

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Prakiraan Cuaca BMKG</h2>
          <p className="text-gray-600">Data cuaca bersumber langsung dari BMKG dan diperbarui secara berkala</p>
        </div>

        <div 
          className="relative bg-white rounded-lg shadow-xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Weather Card */}
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">{currentWeather.location}</h3>
            </div>

            {currentForecast && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="text-center">
                  <Cloud className="h-24 w-24 text-blue-500 mx-auto mb-4" />
                  <p className="text-4xl font-bold text-gray-900 mb-2">
                    {currentForecast.temperature}°C
                  </p>
                  <p className="text-xl text-gray-600 mb-4">
                    {currentForecast.weatherDesc}
                  </p>
                  <p className="text-sm text-gray-500">
                    {currentForecast.time}
                  </p>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <Droplets className="h-8 w-8 text-blue-600 mr-4" />
                    <div>
                      <p className="text-sm text-gray-600">Kelembapan</p>
                      <p className="text-xl font-semibold text-gray-900">
                        {currentForecast.humidity}%
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <Wind className="h-8 w-8 text-blue-600 mr-4" />
                    <div>
                      <p className="text-sm text-gray-600">Kecepatan Angin</p>
                      <p className="text-xl font-semibold text-gray-900">
                        {currentForecast.windSpeed} km/jam
                      </p>
                    </div>
                  </div>

                  {currentForecast.windDirection && (
                    <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                      <Wind className="h-8 w-8 text-blue-600 mr-4" />
                      <div>
                        <p className="text-sm text-gray-600">Arah Angin</p>
                        <p className="text-xl font-semibold text-gray-900">
                          {currentForecast.windDirection}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 pb-6">
            {weatherData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
