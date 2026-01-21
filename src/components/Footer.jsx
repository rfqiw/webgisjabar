import { Phone, AlertTriangle } from 'lucide-react'

export default function Footer() {
  const emergencyContacts = [
    { number: '112', service: 'Nomor Darurat Nasional' },
    { number: '110', service: 'Kepolisian RI' },
    { number: '113', service: 'Pemadam Kebakaran' },
    { number: '119', service: 'Layanan Kesehatan' },
    { number: '115', service: 'Basarnas' },
    { number: '129', service: 'BNPB' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Emergency Contacts */}
      <div className="bg-red-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-6 w-6 mr-2" />
            <h3 className="text-xl font-bold">Kontak Darurat</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {emergencyContacts.map((contact) => (
              <div key={contact.number} className="text-center">
                <a
                  href={`tel:${contact.number}`}
                  className="flex flex-col items-center p-3 bg-red-800 rounded-lg hover:bg-red-900 transition-colors"
                >
                  <Phone className="h-5 w-5 mb-2" />
                  <span className="text-2xl font-bold">{contact.number}</span>
                  <span className="text-xs mt-1">{contact.service}</span>
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm mt-4 opacity-90">
            Gunakan layanan ini hanya dalam kondisi darurat.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h4 className="text-lg font-semibold mb-4">WebGIS Kebencanaan Jawa Barat</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Portal informasi kebencanaan berbasis peta digital dengan 7 layer kebencanaan untuk wilayah Jawa Barat.
              </p>
            </div>

            {/* Data Sources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Sumber Data</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• ArcGIS Instant Apps</li>
                <li>• BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)</li>
                <li>• BNPB (Badan Nasional Penanggulangan Bencana)</li>
                <li>• BPBD Jawa Barat</li>
                <li>• Pemerintah Provinsi Jawa Barat</li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Pemberitahuan</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Website ini masih dalam tahap pengembangan (Beta). Data dan informasi dapat berubah sewaktu-waktu.
              </p>
              <p className="text-gray-400 text-sm">
                Website ini menampilkan 7 layer kebencanaan dari sumber resmi.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} WebGIS Kebencanaan Jawa Barat. 
              <span className="block mt-1">Authors: Rifqi Gusfiliandi</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
