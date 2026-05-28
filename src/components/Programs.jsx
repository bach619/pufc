const programs = [
  {
    icon: 'fa-child',
    title: 'Kelompok Cilik (6-9 thn)',
    desc: 'Fokus: teknik dasar, koordinasi, dan kecintaan pada bola. Latihan menyenangkan dengan permainan kecil.',
  },
  {
    icon: 'fa-users',
    title: 'Kelompok Junior (10-13 thn)',
    desc: 'Peningkatan passing, control, dan pengenalan taktik. Latihan fisik & skill games.',
  },
  {
    icon: 'fa-star-of-life',
    title: 'Kelompok Remaja (14-17 thn)',
    desc: 'Strategi tim, kebugaran, dan persiapan kompetisi resmi. Pembinaan menuju klub profesional.',
  },
]

export default function Programs() {
  return (
    <section
      id="programs"
      className="bg-gray-light rounded-t-[48px] sm:rounded-t-[48px] px-4 sm:px-8 py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-red-dark mb-4">
          Program <span className="text-orange-accent">Latihan</span>
        </h2>
        <p className="text-center text-[#5a6e55] max-w-2xl mx-auto mb-12">
          Kami membagi kelompok usia agar setiap anak mendapatkan porsi latihan sesuai perkembangan motorik dan taktik.{' '}
          <strong>Semua kelompok mengikuti Jadualyang sama: Rabu, Jumat, Minggu pukul 14.30 WIB.</strong>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-[#e2f0dc] text-center hover:-translate-y-2 hover:shadow-[0_20px_30px_-12px_rgba(46,125,50,0.2)] transition-all"
            >
              <i className={`fas ${prog.icon} text-4xl text-orange-accent bg-[#fff1e0] p-4 rounded-full mb-4 inline-block`}></i>
              <h3 className="text-xl font-semibold mb-2">{prog.title}</h3>
              <p className="text-[#5a6e55]">{prog.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
