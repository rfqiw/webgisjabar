import { Phone, AlertTriangle } from 'lucide-react'

export default function EmergencyContact() {
  const emergencyContacts = [
    { number: '112', service: 'Nomor Darurat Nasional', description: 'Panggilan darurat untuk semua jenis bencana' },
    { number: '110', service: 'Kepolisian RI', description: 'Bantuan keamanan dan kepolisian' },
    { number: '113', service: 'Pemadam Kebakaran', description: 'Kebakaran dan penyelamatan' },
    { number: '119', service: 'Layanan Kesehatan', description: 'Ambulans dan layanan medis darurat' },
    { number: '115', service: 'Basarnas', description: 'Search and Rescue (SAR)' },
    { number: '129', service: 'BNPB', description: 'Badan Nasional Penanggulangan Bencana' },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-white mr-3" />
            <h2 className="text-4xl font-bold text-white">Kontak Darurat</h2>
          </div>
          <p className="text-xl text-white/90">
            Hubungi nomor berikut dalam kondisi darurat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyContacts.map((contact) => (
            <div
              key={contact.number}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 text-center">
                <a
                  href={`tel:${contact.number}`}
                  className="block"
                >
                  <Phone className="h-8 w-8 text-white mx-auto mb-2" />
                  <span className="text-4xl font-bold text-white">{contact.number}</span>
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {contact.service}
                </h3>
                <p className="text-sm text-gray-600">
                  {contact.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 inline-block">
            <p className="text-white text-lg font-semibold">
              ⚠️ Gunakan layanan ini hanya dalam kondisi darurat
            </p>
            <p className="text-white/80 mt-2">
              Panggilan palsu dapat menghambat penanganan bencana yang sesungguhnya
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
