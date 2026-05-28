export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-red-dark mb-4">
        Hubungi <span className="text-orange-accent">Kami</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-3xl text-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#e2eedb]">
          <i className="fab fa-whatsapp text-3xl text-orange-accent mb-3 inline-block"></i>
          <h3 className="font-semibold text-lg mb-2">WhatsApp Center</h3>
          <p>+62 822 5669 3226</p>
          <a
            href="https://wa.me/6282256693226?text=Halo%20saya%20ingin%20daftar%20sekolah%20sepakbola%20PR%20United"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-wa text-white px-5 py-2.5 rounded-full font-semibold no-underline hover:bg-wa-hover transition-colors mt-3"
          >
            <i className="fab fa-whatsapp"></i> Chat Admin
          </a>
        </div>

        <div className="bg-white p-6 rounded-3xl text-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#e2eedb] sm:col-span-2 lg:col-span-1">
          <i className="fas fa-map-marker-alt text-3xl text-orange-accent mb-3 inline-block"></i>
          <h3 className="font-semibold text-lg mb-2">Lapangan Utama</h3>
          <p>Stadion Sanaman Mantikei, Jalan Ahmad Yani, Palangkaraya</p>
        </div>
      </div>

      {/* Map */}
      <div className="rounded-3xl overflow-hidden h-[280px] mt-4">
        <iframe
          src="https://maps.google.com/maps?q=Stadion+Sanaman+Mantikei+Palangkaraya&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Stadion Sanaman Mantikei"
        ></iframe>
      </div>

      <div className="mt-8 text-center bg-[#fff3e0] rounded-3xl p-4">
        <i className="fas fa-clock mr-2"></i> Jam Admin: Senin - Sabtu (08.00 - 17.00 WIB)
      </div>
    </section>
  )
}
