export default function WhatsAppButton() {
  const WA_NUMBER = '6282256693226'
  const message = 'Halo%20saya%20ingin%20daftar%20sekolah%20sepakbola%20PR%20United'

  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[999] flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 no-underline group animate-[fadeInUp_0.6s_ease-out] animate-[pulse-wa_2s_infinite]"
      aria-label="Chat via WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl group-hover:scale-110 transition-transform"></i>
      <span className="hidden sm:inline text-sm">Hubungi Kami</span>
    </a>
  )
}
