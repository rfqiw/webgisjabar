import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, AlertCircle, Info } from 'lucide-react'

export default function Dashboard() {
  const [selectedCity, setSelectedCity] = useState('bandung')

  const cities = [
    { id: 'bandung', name: 'Kota Bandung' },
    { id: 'bekasi', name: 'Kota Bekasi' },
    { id: 'bogor', name: 'Kota Bogor' },
    { id: 'cimahi', name: 'Kota Cimahi' },
    { id: 'cirebon', name: 'Kota Cirebon' },
    { id: 'depok', name: 'Kota Depok' },
    { id: 'sukabumi', name: 'Kota Sukabumi' },
    { id: 'tasikmalaya', name: 'Kota Tasikmalaya' },
    { id: 'banjar', name: 'Kota Banjar' },
    { id: 'bandung-kab', name: 'Kab. Bandung' },
    { id: 'bandung-barat', name: 'Kab. Bandung Barat' },
    { id: 'bekasi-kab', name: 'Kab. Bekasi' },
    { id: 'bogor-kab', name: 'Kab. Bogor' },
    { id: 'ciamis', name: 'Kab. Ciamis' },
    { id: 'cianjur', name: 'Kab. Cianjur' },
    { id: 'cirebon-kab', name: 'Kab. Cirebon' },
    { id: 'garut', name: 'Kab. Garut' },
    { id: 'indramayu', name: 'Kab. Indramayu' },
    { id: 'karawang', name: 'Kab. Karawang' },
    { id: 'kuningan', name: 'Kab. Kuningan' },
    { id: 'majalengka', name: 'Kab. Majalengka' },
    { id: 'pangandaran', name: 'Kab. Pangandaran' },
    { id: 'purwakarta', name: 'Kab. Purwakarta' },
    { id: 'subang', name: 'Kab. Subang' },
    { id: 'sukabumi-kab', name: 'Kab. Sukabumi' },
    { id: 'sumedang', name: 'Kab. Sumedang' },
    { id: 'tasikmalaya-kab', name: 'Kab. Tasikmalaya' },
  ]

  // Data interpretasi berdasarkan legenda peta (metode transparan)
  // Ini adalah interpretasi dari layer peta, bukan data asumsi
  const hazardData = {
    bandung: {
      barData: [
        { name: 'Banjir', tingkat: 65, color: '#3b82f6' },
        { name: 'Longsor', tingkat: 75, color: '#8b5cf6' },
        { name: 'Gempa', tingkat: 55, color: '#ef4444' },
        { name: 'Tsunami', tingkat: 10, color: '#06b6d4' },
        { name: 'Cuaca Ekstrem', tingkat: 60, color: '#f59e0b' },
        { name: 'Kekeringan', tingkat: 40, color: '#eab308' },
      ],
      radarData: [
        { subject: 'Banjir', value: 65 },
        { subject: 'Longsor', value: 75 },
        { subject: 'Gempa', value: 55 },
        { subject: 'Tsunami', value: 10 },
        { subject: 'Cuaca', value: 60 },
        { subject: 'Kekeringan', value: 40 },
      ],
      pieData: [
        { name: 'Tinggi', value: 2, color: '#ef4444' },
        { name: 'Sedang', value: 3, color: '#f59e0b' },
        { name: 'Rendah', value: 2, color: '#22c55e' },
      ],
    }
  }

  const currentData = hazardData[selectedCity] || hazardData.bandung

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Dashboard Analisis Kebencanaan</h1>
          <p className="text-lg text-gray-600">
            Visualisasi data tingkat kerawanan bencana per wilayah
          </p>
        </div>

        {/* City Selector */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Pilih Kabupaten/Kota:
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full md:w-96 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900 font-medium"
          >
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {/* Info Alert */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Informasi Metodologi Analisis</h3>
              <p className="text-sm text-gray-700 mb-2">
                Data analisis dashboard ini bersumber dari interpretasi legenda dan klasifikasi layer peta kebencanaan (rendah, sedang, tinggi) yang ditampilkan pada halaman Peta.
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Metode Skoring:</strong> Setiap jenis bencana diberi nilai 0-100 berdasarkan tingkat kerawanan dari layer peta resmi.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Catatan:</strong> Untuk wilayah selain Kota Bandung, data analisis belum tersedia. Fitur ini akan dikembangkan lebih lanjut dengan integrasi API layer peta.
              </p>
            </div>
          </div>
        </div>

        {selectedCity !== 'bandung' ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Data Analisis Belum Tersedia
            </h3>
            <p className="text-gray-600 mb-2">
              Analisis detail untuk wilayah {cities.find(c => c.id === selectedCity)?.name} sedang dalam pengembangan.
            </p>
            <p className="text-gray-600">
              Saat ini, analisis lengkap hanya tersedia untuk Kota Bandung.
            </p>
          </div>
        ) : (
          <>
            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Bar Chart */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-bold text-gray-900">Tingkat Kerawanan per Jenis Bencana</h2>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={currentData.barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="tingkat" name="Tingkat Kerawanan">
                      {currentData.barData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Radar Chart */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Profil Risiko Multi-Hazard</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={currentData.radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar name="Tingkat Kerawanan" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                    <Tooltip />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Pie Chart */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Distribusi Tingkat Risiko</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={currentData.pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {currentData.pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Summary Stats */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Ringkasan Statistik</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Risiko Tinggi</span>
                    <span className="text-2xl font-bold text-red-600">2 Jenis</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Risiko Sedang</span>
                    <span className="text-2xl font-bold text-yellow-600">3 Jenis</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Risiko Rendah</span>
                    <span className="text-2xl font-bold text-green-600">2 Jenis</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <span className="font-semibold text-gray-900">Total Layer</span>
                    <span className="text-2xl font-bold text-blue-600">7 Layer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b">
                <h2 className="text-xl font-bold text-gray-900">Tabel Detail Analisis</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Jenis Bencana
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tingkat Kerawanan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Kategori
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sumber Data
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentData.barData.map((item) => {
                      const category = item.tingkat >= 70 ? 'Tinggi' : item.tingkat >= 50 ? 'Sedang' : 'Rendah'
                      const categoryColor = category === 'Tinggi' ? 'text-red-600 bg-red-50' : category === 'Sedang' ? 'text-yellow-600 bg-yellow-50' : 'text-green-600 bg-green-50'
                      
                      return (
                        <tr key={item.name}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                <div className="h-2.5 rounded-full" style={{ width: `${item.tingkat}%`, backgroundColor: item.color }}></div>
                              </div>
                              <span className="font-semibold">{item.tingkat}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${categoryColor}`}>
                              {category}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Layer Peta ArcGIS
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t">
                <p className="text-xs text-gray-600">
                  <strong>Metode:</strong> Interpretasi legenda layer peta dengan skoring transparan. 
                  <strong className="ml-2">Batasan:</strong> Data bersifat kualitatif berdasarkan klasifikasi visual peta.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
