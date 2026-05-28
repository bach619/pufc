const aboutCards = [
  {
    icon: 'fa-trophy',
    title: 'Prestasi & Pembinaan',
    desc: 'Lebih dari 50 medali tingkat provinsi & nasional. Metode latihan modern sesuai kategori usia.',
  },
  {
    icon: 'fa-chalkboard-user',
    title: 'Pelatih Lisensi',
    desc: 'Didampingi pelatih profesional berlisensi PSSI dan berpengalaman di akademi muda.',
  },
  {
    icon: 'fa-hand-fist',
    title: 'Karakter Juara',
    desc: 'Menanamkan nilai sportivitas, kerja tim, dan percaya diri sejak usia dini.',
  },
]

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-red-dark mb-4">
        Tentang <span className="text-orange-accent">SSB PUFC</span>
      </h2>
      <p className="text-center text-[#5a6e55] max-w-2xl mx-auto mb-12">
        Didirikan dengan visi membina generasi emas sepakbola <strong>Palangka Raya</strong>, mengedepankan karakter dan skill. <strong>SSB PR United</strong> adalah akademi sepakbola resmi binaan <strong>Pemkot Palangka Raya</strong>, berlisensi PSSI, dan telah mencetak banyak pemain muda berbakat dari Kalimantan Tengah.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {aboutCards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-7 shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-[#e2f0dc] text-center hover:-translate-y-2 hover:shadow-[0_20px_30px_-12px_rgba(46,125,50,0.2)] transition-all"
          >
            <i className={`fas ${card.icon} text-4xl text-orange-accent bg-[#fff1e0] p-4 rounded-full mb-4 inline-block`}></i>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-[#5a6e55]">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-10 bg-[#edf7ea] rounded-3xl p-7 text-center">
        <i className="fas fa-quote-left text-3xl text-orange-accent opacity-60"></i>
        <p className="italic max-w-2xl mx-auto text-lg">
          &ldquo;Sepakbola bukan hanya soal menang, tapi juga membangun masa depan anak-anak kita. Di PR United, setiap anak adalah pemain inti.&rdquo;
        </p>
        <p className="mt-3 font-bold">&mdash; Pelatih Kepala, Sugianto</p>
      </div>

      {/* Legal notice */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white rounded-3xl p-5 border border-[#d4e8cc] shadow-sm">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 bg-[#1c2e1a] text-[#ffd966] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            <i className="fas fa-shield-alt"></i>
            Legal
          </span>
          <span className="text-sm text-[#4a5e47]">
            Terdaftar sebagai badan hukum:{' '}
            <strong>PS. Palangkaraya Utama Putera Kalimantan Tengah</strong>
          </span>
        </div>
        <a
          href="#legal-docs"
          onClick={(e) => {
            e.preventDefault()
            const target = document.querySelector('#legal-docs')
            if (target) target.scrollIntoView({ behavior: 'smooth' })
          }}
          className="text-sm font-semibold text-orange-accent hover:text-orange-hover underline underline-offset-2 whitespace-nowrap"
        >
          Lihat Dokumen Legalitas <i className="fas fa-arrow-right ml-1 text-xs"></i>
        </a>
      </div>
    </section>
  )
}
