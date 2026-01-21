import { ExternalLink, Newspaper, AlertCircle } from 'lucide-react'
import { NEWS_SOURCES } from '../services/newsService'

export default function News() {
  const newsSources = Object.values(NEWS_SOURCES)

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Newspaper className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Berita Kebencanaan Terkini</h1>
          </div>
          <p className="text-lg text-gray-600">
            Akses informasi dan berita resmi dari portal pemerintah dan lembaga terkait
          </p>
        </div>

        {/* CORS Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Informasi Akses Berita</h3>
              <p className="text-sm text-gray-700 mb-2">
                Karena keterbatasan teknis (CORS policy pada browser), berita tidak dapat ditampilkan langsung di dalam website ini.
              </p>
              <p className="text-sm text-gray-700">
                Silakan klik tombol "Buka Portal Resmi" di bawah untuk mengakses berita terbaru langsung dari sumber resmi masing-masing instansi.
              </p>
            </div>
          </div>
        </div>

        {/* News Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {newsSources.map((source, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{source.name}</h2>
                  <Newspaper className="h-8 w-8 text-blue-600" />
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {source.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Sumber Resmi Pemerintah</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Informasi Terpercaya & Terverifikasi</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Diperbarui Secara Berkala</span>
                  </div>
                </div>

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-md"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Buka Portal Resmi
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kategori Berita Kebencanaan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border-2 border-red-200">
              <h3 className="font-bold text-gray-900 mb-2">🚨 Peringatan Dini</h3>
              <p className="text-sm text-gray-700">
                Informasi peringatan dini cuaca ekstrem, potensi bencana, dan himbauan dari BMKG dan BNPB
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">📰 Berita Kejadian</h3>
              <p className="text-sm text-gray-700">
                Laporan dan update kejadian bencana yang sedang berlangsung atau baru terjadi di Jawa Barat
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
              <h3 className="font-bold text-gray-900 mb-2">✅ Mitigasi & Pencegahan</h3>
              <p className="text-sm text-gray-700">
                Program, sosialisasi, dan upaya mitigasi bencana dari pemerintah daerah
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
              <h3 className="font-bold text-gray-900 mb-2">🛠️ Tanggap Darurat</h3>
              <p className="text-sm text-gray-700">
                Informasi evakuasi, bantuan, dan koordinasi penanganan bencana
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-200">
              <h3 className="font-bold text-gray-900 mb-2">📊 Data & Statistik</h3>
              <p className="text-sm text-gray-700">
                Data kejadian bencana, dampak, dan analisis statistik kebencanaan
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50 to-sky-50 rounded-lg border-2 border-cyan-200">
              <h3 className="font-bold text-gray-900 mb-2">🎓 Edukasi & Simulasi</h3>
              <p className="text-sm text-gray-700">
                Program edukasi, pelatihan, dan simulasi kesiapsiagaan bencana
              </p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">💡 Tips Mengakses Informasi Bencana</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2">1.</span>
              <span>Selalu verifikasi informasi dari sumber resmi pemerintah</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2.</span>
              <span>Perhatikan tanggal publikasi untuk mendapat informasi terkini</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3.</span>
              <span>Ikuti media sosial resmi instansi untuk update real-time</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4.</span>
              <span>Jangan menyebarkan informasi yang belum terverifikasi</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">5.</span>
              <span>Hubungi nomor darurat jika menemukan kondisi berbahaya</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
