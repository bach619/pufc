import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.pushState(null, null, id)
    }
  }

  const links = [
    { href: '#home', label: 'Beranda' },
    { href: '#about', label: 'Tentang' },
    { href: '#coaches', label: 'Pelatih' },
    { href: '#programs', label: 'Program' },
    { href: '#schedule', label: 'Jadwal' },
    { href: '#registration', label: 'Daftar' },
    { href: '#contact', label: 'Kontak' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between py-3">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNav(e, '#home')} className="flex items-center gap-3">
          <picture>
            <source srcSet="/asset/logo.webp" type="image/webp" />
            <img
              src="/asset/logo.jpg"
              alt="Logo Palangka Raya United"
              className="h-[55px] w-auto rounded-xl bg-white p-1 shadow-sm object-contain"
            />
          </picture>
          <div className="leading-tight">
            <span className="font-extrabold text-lg text-red-dark block">PALANGKA RAYA</span>
            <span className="text-sm font-medium text-orange-accent block">UNITED CLUB</span>
          </div>
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-3xl text-red-primary cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Nav links */}
        <ul
          className={`${
            open ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-[70px] left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 gap-4 md:gap-8 items-center list-none rounded-b-3xl md:rounded-none shadow-lg md:shadow-none z-40`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="font-semibold text-[#2c3a2b] hover:text-orange-accent transition-colors no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#registration"
              onClick={(e) => handleNav(e, '#registration')}
              className="inline-block border-2 border-red-primary text-red-primary font-bold px-5 py-1.5 rounded-full hover:bg-red-primary hover:text-white transition-colors no-underline"
            >
              Join Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
