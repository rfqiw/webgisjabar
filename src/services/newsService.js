// News service for fetching real news from official sources
// Note: Due to CORS restrictions, direct fetching may not work in browser
// This service provides the official URLs for users to access

export const NEWS_SOURCES = {
  BNPB: {
    name: 'BNPB',
    url: 'https://bnpb.go.id/berita',
    description: 'Badan Nasional Penanggulangan Bencana'
  },
  BPBD_JABAR: {
    name: 'BPBD Jawa Barat',
    url: 'https://bpbd.jabarprov.go.id/beritaterkini',
    description: 'Badan Penanggulangan Bencana Daerah Jawa Barat'
  },
  JABAR_PROV: {
    name: 'Pemerintah Provinsi Jawa Barat',
    url: 'https://www.jabarprov.go.id/berita',
    description: 'Portal Resmi Pemerintah Provinsi Jawa Barat'
  },
  BMKG_WARNING: {
    name: 'BMKG Peringatan Dini',
    url: 'https://www.bmkg.go.id/cuaca/peringatan-dini-cuaca/32',
    description: 'Peringatan Dini Cuaca BMKG untuk Jawa Barat'
  }
}

export const getNewsSources = () => {
  return Object.values(NEWS_SOURCES)
}

// Attempt to fetch news - may fail due to CORS
export const fetchNewsFromSource = async (sourceUrl) => {
  try {
    const response = await fetch(sourceUrl, {
      mode: 'cors',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml'
      }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.text()
  } catch (error) {
    console.error(`Error fetching news from ${sourceUrl}:`, error)
    throw new Error('CORS_ERROR')
  }
}
