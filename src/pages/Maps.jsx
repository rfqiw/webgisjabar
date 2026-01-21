import { Map, Globe } from 'lucide-react'

export default function Maps() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Peta Kebencanaan Jawa Barat</h1>
          <p className="text-lg text-gray-600">
            Visualisasi peta rawan bencana dengan 7 layer kebencanaan dari sumber resmi
          </p>
        </div>

        {/* 2D Map Section */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
              <div className="flex items-center">
                <Map className="h-8 w-8 text-white mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-white">Peta 2D - Atlas Kebencanaan</h2>
                  <p className="text-blue-100 mt-1">
                    Peta interaktif 2D dengan layer kebencanaan lengkap
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Informasi Peta:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 7 Layer kebencanaan: Banjir, Longsor, Gempa, Tsunami, Cuaca Ekstrem, Kekeringan, Multi-Hazard</li>
                  <li>• Sumber: ArcGIS Instant Apps - Atlas</li>
                  <li>• Gunakan kontrol peta untuk zoom, pan, dan toggle layer</li>
                  <li>• Klik pada area untuk melihat detail informasi kerawanan</li>
                </ul>
              </div>

              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe
                  src="https://www.arcgis.com/apps/instant/atlas/index.html?appid=af6cc543bcc2468ea0cee2506814abf7"
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-inner"
                  title="Peta Kebencanaan Jawa Barat 2D"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3D Map Section */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
              <div className="flex items-center">
                <Globe className="h-8 w-8 text-white mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-white">Peta 3D - Visualisasi Terrain</h2>
                  <p className="text-purple-100 mt-1">
                    Peta 3D dengan visualisasi topografi dan kebencanaan
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Informasi Peta:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Visualisasi 3D dengan model elevasi terrain</li>
                  <li>• Sumber: ArcGIS Instant Apps - 3D Viewer</li>
                  <li>• Gunakan mouse untuk rotasi dan tilt sudut pandang</li>
                  <li>• Scroll untuk zoom in/out</li>
                </ul>
              </div>

              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe
                  src="https://www.arcgis.com/apps/instant/3dviewer/index.html?appid=b522ca6443e64aaf8583e9a5f2af3eaf"
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-inner"
                  title="Peta Kebencanaan Jawa Barat 3D"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <h3 className="font-bold text-gray-900 mb-2">Catatan Penting:</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Peta-peta ini menggunakan data resmi dari berbagai sumber pemerintah dan lembaga terkait</li>
            <li>• Data kebencanaan diperbarui secara berkala oleh sumber aslinya</li>
            <li>• Untuk analisis lebih detail, gunakan fitur Dashboard pada menu navigasi</li>
            <li>• Layer dapat diaktifkan/nonaktifkan sesuai kebutuhan analisis</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
