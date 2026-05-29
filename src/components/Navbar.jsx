import { useState, useEffect, useRef } from 'react'

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

// ——— theme per section ———
// 'transparent' → bg-transparent, white text (hero only)
// 'dark'       → dark glassmorphism, white text
// 'light'      → white glassmorphism, dark text (default)
const SECTION_THEME = {
  '#home':    'transparent',
  '#coaches': 'dark',
}

function themeFor(id) {
  return SECTION_THEME[id] || 'light'
}

// ——— shared style helpers ———
const darkHeader  = 'bg-[#1a1a2e] backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.25)]'
const lightHeader = 'bg-white/80 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)]'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const [activeId, setActiveId] = useState('#home')
  const activeRef = useRef(activeId)
  activeRef.current = activeId

  // ——— scroll logic ———
  useEffect(() => {
    const check = () => {
      const hero = document.querySelector('#home')
      if (hero) {
        const rect = hero.getBoundingClientRect()
        setPastHero(rect.bottom <= 0)
      }

      // active link
      const sections = NAV_ITEMS.map(({ href }) => {
        const el = document.querySelector(href)
        if (!el) return { id: href, top: 0, bottom: 0 }
        const r = el.getBoundingClientRect()
        return { id: href, top: r.top, bottom: r.bottom }
      })
      const OFFSET = 120
      const current = sections.find((s) => s.top <= OFFSET && s.bottom > 0)
      if (current && current.id !== activeRef.current) {
        setActiveId(current.id)
      }
    }

    check()
    const raf = requestAnimationFrame(check)
    window.addEventListener('scroll', check, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', check)
    }
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

  // ——— derived theme ———
  const theme = pastHero ? themeFor(activeId) : 'transparent'
  const isDark   = theme === 'dark'
  const isLight  = theme === 'light'

  // border colour
  const borderCls = isDark
    ? 'from-transparent via-white/10 to-transparent'
    : 'from-transparent via-gray-200 to-transparent'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDark    ? darkHeader
        : isLight ? lightHeader
                  : 'bg-transparent'
      }`}
    >
      {/* Subtle bottom-border */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${
          pastHero ? 'opacity-100' : 'opacity-0'
        } bg-gradient-to-r ${borderCls}`}
      />

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
            <span
              className={`font-extrabold text-lg block transition-colors duration-300 ${
                isDark ? 'text-white'
                : isLight ? 'text-red-dark'
                          : 'text-white'
              }`}
            >
              PALANGKA RAYA
            </span>
            <span
              className={`text-sm font-medium block transition-colors duration-300 ${
                isDark ? 'text-[#ffd966]'
                : isLight ? 'text-orange-accent'
                          : 'text-[#ffd966]'
              }`}
            >
              UNITED CLUB
            </span>
          </div>
        </a>

        {/* Mobile toggle */}
        <button
          className={`md:hidden text-2xl cursor-pointer p-2 transition-colors duration-300 ${
            isDark ? 'text-white'
            : isLight ? 'text-red-primary'
                      : 'text-white'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'} transition-transform`}></i>
        </button>

        {/* Nav links */}
        <ul
          className={`${
            open ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto md:bg-transparent p-6 md:p-0 gap-2 md:gap-1 items-center list-none rounded-b-2xl shadow-lg md:shadow-none z-40 ${
            isDark
              ? 'bg-[#1a1a2e] backdrop-blur-lg'
              : 'bg-white/95 backdrop-blur-lg'
          }`}
        >
          {NAV_ITEMS.map((link) => {
            const isLinkActive = activeId === link.href
            return (
              <li key={link.href} className="w-full md:w-auto">
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className={`block md:inline-block px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 no-underline text-center ${
                    isLinkActive
                      ? isDark
                        ? 'bg-white/20 text-white shadow-md'
                        : isLight
                          ? 'bg-red-primary text-white shadow-md'
                          : 'bg-white/20 text-white shadow-md'
                      : isDark
                        ? 'text-white/70 hover:bg-white/15 hover:text-white'
                        : isLight
                          ? 'text-[#2c3a2b] hover:bg-red-primary/10 hover:text-red-primary'
                          : 'text-white/90 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
          <li
            className={`w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 ${
              isDark ? 'border-white/10' : 'border-gray-200'
            }`}
          >
            <a
              href="#registration"
              onClick={(e) => handleNav(e, '#registration')}
              className={`block md:inline-block text-center font-bold px-6 py-2 rounded-full transition-all no-underline ${
                isDark
                  ? 'border-2 border-white text-white hover:bg-white hover:text-[#1a1a2e]'
                  : isLight
                    ? 'border-2 border-red-primary text-red-primary hover:bg-red-primary hover:text-white'
                    : 'border-2 border-white text-white hover:bg-white hover:text-red-dark'
              }`}
            >
              Join Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
