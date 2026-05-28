export default function Hero() {
  return (
    <section id="home" className="bg-[linear-gradient(105deg,#fef2f2_0%,#fee2e2_100%)] px-4 sm:px-8 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <span className="inline-block bg-orange-accent text-white font-bold text-sm px-4 py-1 rounded-full mb-4">
            <i className="fas fa-futbol mr-1"></i> Akademi Sepakbola Muda
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-red-dark leading-tight mb-4">
            Cetak Bintang Lapangan <br /> Sejak Dini
          </h1>
          <p className="text-lg text-[#2e4a2b] mb-8 max-w-xl">
            SSB Palangka Raya United Football Club &mdash; tempat anak-anak berkembang melalui sepakbola, disiplin, sportivitas, dan kebersamaan. Bergabunglah bersama keluarga besar sepakbola Kalimantan Tengah!
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#registration"
              onClick={(e) => {
                e.preventDefault()
                const target = document.querySelector('#registration')
                if (target) target.scrollIntoView({ behavior: 'smooth' })
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
                if (target) target.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-semibold text-red-dark hover:text-orange-accent transition-colors no-underline"
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
