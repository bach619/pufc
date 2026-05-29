export default function Hero() {
  return (
    <section id="home" className="relative px-4 sm:px-8 py-12 overflow-hidden bg-[linear-gradient(135deg,#b71c1c_0%,#d32f2f_40%,#e53935_70%,#ef5350_100%)]">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-orange-accent/10 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#ffd966]/8 blur-2xl" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 border border-white/10 rounded-full" />
      <div className="absolute top-10 left-10 w-24 h-24 border border-white/10 rounded-full" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-white/10 rounded-full" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
        backgroundSize: '50px 50px',
      }} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
        <div className="flex-1">
          <span className="inline-block bg-[#ffd966] text-red-dark font-bold text-sm px-4 py-1 rounded-full mb-4">
            <i className="fas fa-futbol mr-1"></i> Akademi Sepakbola Muda
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            SSB Palangka Raya United — Cetak Bintang Lapangan Sejak Dini
          </h1>
          <p className="text-lg text-white/85 mb-8 max-w-xl drop-shadow">
            <strong>SSB Palangka Raya United Football Club (PR United FC)</strong> — sekolah sepakbola dan akademi sepakbola muda terbaik di Palangka Raya, Kalimantan Tengah. Tempat anak-anak usia 6–17 tahun berkembang melalui sepakbola, disiplin, sportivitas, dan kebersamaan. Bergabunglah bersama keluarga besar sepakbola Kalimantan Tengah!
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#registration"
              onClick={(e) => {
                e.preventDefault()
                const target = document.querySelector('#registration')
                if (target) {
                  const top = target.getBoundingClientRect().top + window.scrollY - 90
                  window.scrollTo({ top, behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-2 bg-orange-accent text-white font-bold px-8 py-3 rounded-full shadow-md hover:bg-orange-hover hover:-translate-y-0.5 transition-all no-underline"
            >
              <i className="fas fa-pen-alt"></i> Daftar Sekarang
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                const target = document.querySelector('#about')
                if (target) {
                  const top = target.getBoundingClientRect().top + window.scrollY - 90
                  window.scrollTo({ top, behavior: 'smooth' })
                }
              }}
              className="font-semibold text-white/80 hover:text-white transition-colors no-underline"
            >
              Pelajari Lebih <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>
        <div className="flex-1 text-center">
          <picture>
            <source srcSet="/asset/hero.webp" type="image/webp" />
            <img
              src="/asset/hero.png"
              alt="Anak latihan sepakbola"
              className="max-w-full rounded-3xl shadow-[0_25px_35px_-12px_rgba(0,0,0,0.2)] object-cover bg-red-dark"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
