import { Link } from 'react-router-dom'
import { Map, BarChart3, Newspaper } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient bg-[length:400%_400%]"></div>
      </div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Portal WebGIS Kebencanaan
            <span className="block text-gradient from-blue-300 to-purple-300 mt-2">
              Jawa Barat
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            Sistem Informasi Geografis Terintegrasi untuk Mitigasi dan Manajemen Bencana
          </p>
          
          <p className="text-base md:text-lg text-blue-200 mb-10 max-w-2xl mx-auto">
            Akses informasi peta rawan bencana, prakiraan cuaca BMKG, dan berita kebencanaan terkini dalam satu platform
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/maps"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <Map className="mr-2 h-5 w-5" />
              Lihat Peta
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all transform hover:scale-105 shadow-xl border-2 border-blue-500"
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              Dashboard Analisis
            </Link>
            <Link
              to="/news"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all border-2 border-white"
            >
              <Newspaper className="mr-2 h-5 w-5" />
              Berita Terkini
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-blue-300 mb-2">7</div>
              <div className="text-sm text-blue-100">Layer Kebencanaan</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-purple-300 mb-2">27</div>
              <div className="text-sm text-blue-100">Kabupaten/Kota</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-pink-300 mb-2">Real-time</div>
              <div className="text-sm text-blue-100">Data BMKG & BNPB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
