export default function Footer() {
  return (
    <footer className="bg-[#1c2e1a] text-[#cfdfc8] px-4 py-8 text-center mt-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <img
          src="/asset/logo.jpg"
          alt="logo"
          className="h-11 bg-white rounded-full p-1"
        />
        <span className="font-extrabold text-[#ffd966]">PALANGKA RAYA UNITED</span>
      </div>
      <p><i className="fas fa-futbol mr-1"></i> Membangun generasi sepakbola berkarakter & berprestasi.</p>
      <p className="mt-3">
        &copy; 2026 SSB Palangka Raya United Club |{' '}
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
      <p className="text-xs mt-4">Sekolah Sepakbola resmi binaan Pemkot Palangka Raya</p>
    </footer>
  )
}
