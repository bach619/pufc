import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { href: '#home', label: 'Beranda' },
  { href: '#about', label: 'Tentang' },
  { href: '#coaches', label: 'Pelatih' },
  { href: '#programs', label: 'Program' },
  { href: '#gallery', label: 'Galeri' },
  { href: '#schedule', label: 'Jadwal' },
  { href: '#registration', label: 'Daftar' },
  { href: '#contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('#home')

  // Track scroll position for shadow + active link
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Determine which section is in view
      const sections = NAV_ITEMS.map(({ href }) => {
        const el = document.querySelector(href)
        if (!el) return { id: href, top: 0, bottom: 0 }
        const rect = el.getBoundingClientRect()
        return { id: href, top: rect.top, bottom: rect.bottom }
      })

      // The offset from top to consider a section "active"
      const OFFSET = 120
      const current = sections.find((s) => s.top <= OFFSET && s.bottom > 0)
      if (current) setActiveId(current.id)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(id)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top, behavior: 'smooth' })
      history.pushState(null, null, id)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between py-3">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNav(e, '#home')} className="flex items-center gap-3 shrink-0">
          <picture>
            <source srcSet="/asset/logo.webp" type="image/webp" />
            <img
              src="/asset/logo.jpg"
              alt="Logo Palangka Raya United"
              className="h-[50px] w-auto rounded-xl bg-white p-1 shadow-sm object-contain"
            />
          </picture>
          <div className="leading-tight hidden sm:block">
            <span className="font-extrabold text-lg text-red-dark block">PALANGKA RAYA</span>
            <span className="text-sm font-medium text-orange-accent block">UNITED CLUB</span>
          </div>
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl text-red-primary cursor-pointer p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'} transition-transform`}></i>
        </button>

        {/* Nav links */}
        <ul
          className={`${
            open ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white/95 backdrop-blur-lg md:bg-transparent p-6 md:p-0 gap-2 md:gap-1 items-center list-none rounded-b-2xl shadow-lg md:shadow-none z-40`}
        >
          {NAV_ITEMS.map((link) => {
            const isActive = activeId === link.href
            return (
              <li key={link.href} className="w-full md:w-auto">
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className={`block md:inline-block px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 no-underline text-center ${
                    isActive
                      ? 'bg-red-primary text-white shadow-md'
                      : 'text-[#2c3a2b] hover:bg-red-primary/10 hover:text-red-primary'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
          <li className="w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-gray-200 md:border-none">
            <a
              href="#registration"
              onClick={(e) => handleNav(e, '#registration')}
              className="block md:inline-block text-center border-2 border-red-primary text-red-primary font-bold px-6 py-2 rounded-full hover:bg-red-primary hover:text-white transition-all no-underline"
            >
              Join Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
