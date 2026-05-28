export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-red-dark mb-4">
        Hubungi <span className="text-orange-accent">Kami</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* WhatsApp */}
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

        {/* Nomor HP */}
        <div className="bg-white p-6 rounded-3xl text-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#e2eedb]">
          <i className="fas fa-phone-alt text-3xl text-orange-accent mb-3 inline-block"></i>
          <h3 className="font-semibold text-lg mb-2">Nomor HP</h3>
          <p className="text-lg font-medium">0813 5022 8973</p>
          <a
            href="tel:+6281350228973"
            className="inline-flex items-center gap-2 bg-orange-accent text-white px-5 py-2.5 rounded-full font-semibold no-underline hover:bg-orange-hover transition-colors mt-3"
          >
            <i className="fas fa-phone"></i> Hubungi
          </a>
        </div>

        {/* Email */}
        <div className="bg-white p-6 rounded-3xl text-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#e2eedb]">
          <i className="fas fa-envelope text-3xl text-orange-accent mb-3 inline-block"></i>
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <p className="text-sm break-all">palangkarayaunited@gmail.com</p>
          <a
            href="mailto:palangkarayaunited@gmail.com"
            className="inline-flex items-center gap-2 bg-orange-accent text-white px-5 py-2.5 rounded-full font-semibold no-underline hover:bg-orange-hover transition-colors mt-3"
          >
            <i className="fas fa-envelope"></i> Kirim Email
          </a>
        </div>

        {/* Instagram */}
        <div className="bg-white p-6 rounded-3xl text-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#e2eedb]">
          <i className="fab fa-instagram text-3xl text-orange-accent mb-3 inline-block"></i>
          <h3 className="font-semibold text-lg mb-2">Instagram</h3>
          <p className="font-medium">@pufcofficial.id</p>
          <a
            href="https://instagram.com/pufcofficial.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-white px-5 py-2.5 rounded-full font-semibold no-underline hover:opacity-90 transition-opacity mt-3"
          >
            <i className="fab fa-instagram"></i> Ikuti
          </a>
        </div>

        {/* Stadion */}
        <div className="bg-white p-6 rounded-3xl text-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#e2eedb]">
          <i className="fas fa-map-marker-alt text-3xl text-orange-accent mb-3 inline-block"></i>
          <h3 className="font-semibold text-lg mb-2">Lapangan Utama</h3>
          <p>Stadion Sanaman Mantikei</p>
          <p className="text-sm text-[#5a6e55] mt-1">
            Jl. DR. Wahidin Sudirohusodo, Kec. Pahandut, Palangka Raya
          </p>
        </div>

        {/* Sekretariat */}
        <div className="bg-white p-6 rounded-3xl text-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#e2eedb]">
          <i className="fas fa-building text-3xl text-orange-accent mb-3 inline-block"></i>
          <h3 className="font-semibold text-lg mb-2">Sekretariat</h3>
          <p>Jalan Anggrek No. 31 RT. 04 RW. 05</p>
          <p className="text-sm text-[#5a6e55] mt-1">Kelurahan Langkai, Palangka Raya</p>
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
