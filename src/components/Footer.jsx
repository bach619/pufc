export default function Footer() {
  return (
    <footer className="bg-[#1c2e1a] text-[#cfdfc8] px-4 py-10 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo & Brand */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src="/asset/logo.jpg"
            alt="logo"
            className="h-11 bg-white rounded-full p-1"
          />
          <span className="font-extrabold text-[#ffd966]">PALANGKA RAYA UNITED</span>
        </div>
        <p className="text-sm"><i className="fas fa-futbol mr-1"></i> Membangun generasi sepakbola berkarakter & berprestasi.</p>

        {/* Legal summary */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 mt-4 text-xs text-[#a8bf9e]">
          <span><i className="fas fa-shield-alt mr-1"></i> Badan Hukum: PS. Palangkaraya Utama Putera Kalteng</span>
          <span><i className="fas fa-file-contract mr-1"></i> SK Kemenkumham AHU-0000988.AH.01.08.2022</span>
          <span><i className="fas fa-newspaper mr-1"></i> Berita Negara No. 084</span>
        </div>

        {/* Copyright */}
        <p className="mt-5 text-sm">
          &copy; 2026 SSB Palangka Raya United Football Club |{' '}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              const target = document.querySelector('#home')
              if (target) target.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-[#ffb74d] no-underline hover:underline"
          >
            Kembali ke Atas
          </a>
        </p>

      </div>
    </footer>
  )
}
