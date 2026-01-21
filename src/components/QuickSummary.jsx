import { Layers, Shield, AlertTriangle } from 'lucide-react'

export default function QuickSummary() {
  const summaryItems = [
    {
      icon: Layers,
      title: '7 Layer Kebencanaan Tersedia',
      description: 'Peta rawan bencana komprehensif mencakup berbagai jenis bencana di Jawa Barat',
      color: 'blue',
    },
    {
      icon: Shield,
      title: 'Ringkasan Risiko Wilayah',
      description: 'Analisis tingkat kerawanan bencana berdasarkan data peta resmi untuk setiap kabupaten/kota',
      color: 'green',
    },
    {
      icon: AlertTriangle,
      title: 'Peringatan Cuaca Terkini',
      description: 'Prakiraan cuaca real-time dari BMKG untuk antisipasi bencana hidrometeorologi',
      color: 'orange',
    },
  ]

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconText: 'text-blue-600',
      border: 'border-blue-200',
    },
    green: {
      bg: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconText: 'text-green-600',
      border: 'border-green-200',
    },
    orange: {
      bg: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconText: 'text-orange-600',
      border: 'border-orange-200',
    },
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Ringkasan Cepat</h2>
          <p className="text-lg text-gray-600">Informasi penting tentang sistem WebGIS Kebencanaan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {summaryItems.map((item, index) => {
            const colors = colorClasses[item.color]
            const Icon = item.icon

            return (
              <div
                key={index}
                className={`${colors.bg} border-2 ${colors.border} rounded-xl p-6 transition-all hover:shadow-lg hover:scale-105`}
              >
                <div className={`${colors.iconBg} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`h-8 w-8 ${colors.iconText}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            7 Layer Kebencanaan Jawa Barat
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Banjir',
              'Longsor',
              'Gempa Bumi',
              'Tsunami',
              'Cuaca Ekstrem',
              'Kekeringan',
              'Multi-Hazard'
            ].map((layer, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200"
              >
                <span className="text-sm font-semibold text-gray-800">{layer}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            Data peta bersumber dari ArcGIS Instant Apps dan sumber resmi lainnya
          </p>
        </div>
      </div>
    </section>
  )
}
