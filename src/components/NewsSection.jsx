import { ExternalLink, Newspaper } from 'lucide-react'
import { NEWS_SOURCES } from '../services/newsService'

export default function NewsSection() {
  const newsSources = Object.values(NEWS_SOURCES)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Newspaper className="h-10 w-10 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Berita Resmi Terbaru</h2>
          </div>
          <p className="text-lg text-gray-600">
            Akses berita kebencanaan langsung dari sumber resmi pemerintah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsSources.map((source, index) => (
            <a
              key={index}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {source.name}
                </h3>
                <ExternalLink className="h-5 w-5 text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <p className="text-gray-700 mb-4">{source.description}</p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span className="text-sm">Buka Portal Resmi</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <p className="text-sm text-gray-700">
            <strong>Catatan:</strong> Karena keterbatasan teknis (CORS policy), berita tidak dapat ditampilkan langsung di website ini. 
            Silakan klik kartu di atas untuk mengakses berita terbaru dari portal resmi masing-masing instansi.
          </p>
        </div>
      </div>
    </section>
  )
}
