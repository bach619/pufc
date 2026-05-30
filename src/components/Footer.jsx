export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1c2e1a] text-[#cfdfc8]">
      {/* Main footer columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <picture>
                <source srcSet="/asset/logo.webp" type="image/webp" />
                <img
                  src="/asset/logo.jpg"
                  alt="logo"
                  className="h-12 w-12 bg-white rounded-full p-1 object-contain"
                />
              </picture>
              <div>
                <p className="font-extrabold text-[#ffd966]">PALANGKA RAYA</p>
                <p className="text-xs text-[#a8bf9e] -mt-0.5">UNITED CLUB</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#a8bf9e]">
              Akademi sepakbola muda Palangka Raya. Membina generasi emas sepakbola Kalimantan Tengah sejak 2020.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com/pufcofficial.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#f58529] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-sm text-white"></i>
              </a>
              <a
                href="https://wa.me/6282256693226"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-sm text-white"></i>
              </a>
              <a
                href="mailto:palangkarayaunited@gmail.com"
                className="w-9 h-9 bg-white/10 hover:bg-orange-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <i className="fas fa-envelope text-sm text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navigasi</h4>
            <ul className="space-y-3">
              {[
                { label: 'Beranda', href: '#home' },
                { label: 'Tentang', href: '#about' },
                { label: 'Program', href: '#programs' },
                { label: 'Jadwal', href: '#schedule' },
                { label: 'Pendaftaran', href: '#registration' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#a8bf9e] hover:text-[#ffd966] transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Kontak</h4>
            <ul className="space-y-3 text-sm text-[#a8bf9e]">
              <li className="flex items-start gap-3">
                <i className="fab fa-whatsapp text-[#25D366] mt-0.5"></i>
                <a href="https://wa.me/6282256693226" className="hover:text-[#ffd966] transition-colors no-underline text-[#a8bf9e]">
                  +62 822 5669 3226
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone-alt text-orange-accent mt-0.5"></i>
                <span>0813 5022 8973</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-orange-accent mt-0.5"></i>
                <a href="mailto:palangkarayaunited@gmail.com" className="hover:text-[#ffd966] transition-colors no-underline text-[#a8bf9e] break-all">
                  palangkarayaunited@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-red-primary mt-0.5"></i>
                <span>Stadion Sanaman Mantikei, Palangka Raya</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Legal</h4>
            <ul className="space-y-3 text-xs text-[#a8bf9e]">
              <li className="flex items-start gap-2">
                <i className="fas fa-shield-alt text-[#ffd966] mt-0.5"></i>
                <span>PS. Palangkaraya Utama Putera Kalteng</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-file-contract text-[#ffd966] mt-0.5"></i>
                <span>SK Kemenkumham AHU-0000988.AH.01.08.2022</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-newspaper text-[#ffd966] mt-0.5"></i>
                <span>Berita Negara No. 084</span>
              </li>
            </ul>
            <hr className="border-white/10 my-4" />
            <ul className="space-y-2 text-xs text-[#a8bf9e]">
              <li>
                <a href="/privacy/" className="hover:text-[#ffd966] transition-colors no-underline text-[#a8bf9e] flex items-center gap-2">
                  <i className="fas fa-lock text-[#ffd966] w-4 text-center"></i>
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="/terms/" className="hover:text-[#ffd966] transition-colors no-underline text-[#a8bf9e] flex items-center gap-2">
                  <i className="fas fa-file-signature text-[#ffd966] w-4 text-center"></i>
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="/cookies/" className="hover:text-[#ffd966] transition-colors no-underline text-[#a8bf9e] flex items-center gap-2">
                  <i className="fas fa-cookie-bite text-[#ffd966] w-4 text-center"></i>
                  Kebijakan Cookie
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#7a9a6e]">
          <p>&copy; {currentYear} SSB Palangka Raya United Football Club.</p>
          <p>Developed by Boby Mihing</p>
        </div>
      </div>
    </footer>
  )
}
