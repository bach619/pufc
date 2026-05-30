export default function TermsOfService({ standalone }) {
  const content = (
    <>
      {/* Header */}
      <span className="inline-block bg-[#1c2e1a] text-[#ffd966] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
        <i className="fas fa-file-contract mr-1.5"></i>
        Legal
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-red-dark mb-2">
        Syarat &amp; <span className="text-orange-accent">Ketentuan</span>
      </h2>
      <p className="text-sm text-[#7a8f75] mb-10">
        Berlaku efektif tanggal 30 Mei 2026
      </p>

      {/* Content */}
      <div className="bg-white rounded-3xl shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#e2eedb] p-6 sm:p-10 text-[#3d4f3a] text-sm sm:text-base leading-relaxed space-y-6">

        <Section title="1. Ketentuan Umum">
          <p>
            Dengan mengakses website ini dan/atau mendaftarkan diri sebagai calon siswa, 
            Anda menyetujui Syarat &amp; Ketentuan yang berlaku di SSB Palangka Raya United 
            Football Club (&ldquo;PR United FC&rdquo;).
          </p>
          <p>
            Jika Anda tidak menyetujui salah satu bagian dari syarat dan ketentuan ini, 
            Anda tidak diperkenankan menggunakan layanan pendaftaran online kami.
          </p>
        </Section>

        <Section title="2. Deskripsi Layanan">
          <p>
            PR United FC menyediakan layanan akademi sepakbola untuk anak usia 6&ndash;17 tahun 
            yang bertempat di Stadion Sanaman Mantikei, Palangka Raya. Program latihan 
            terbagi menjadi tiga kelompok usia:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#5a6e55]">
            <li><strong>Kelompok Cilik (6&ndash;9 tahun)</strong> &mdash; Pengenalan teknik dasar dan fun games</li>
            <li><strong>Kelompok Junior (10&ndash;13 tahun)</strong> &mdash; Pengembangan teknik, taktik, dan kerja sama tim</li>
            <li><strong>Kelompok Remaja (14&ndash;17 tahun)</strong> &mdash; Pembinaan lanjutan dan persiapan kompetisi</li>
          </ul>
        </Section>

        <Section title="3. Persyaratan Pendaftaran">
          <p>Calon siswa wajib memenuhi persyaratan berikut:</p>
          <ol className="list-decimal list-inside space-y-1 text-[#5a6e55]">
            <li>Berusia antara 5&ndash;18 tahun pada saat pendaftaran</li>
            <li>Dalam kondisi kesehatan jasmani yang cukup untuk mengikuti latihan sepakbola</li>
            <li>Mendapatkan persetujuan dari orang tua/wali (bagi yang masih di bawah umur)</li>
            <li>Mengisi formulir pendaftaran dengan data yang benar dan lengkap</li>
            <li>Menyetujui Kebijakan Privasi dan Syarat &amp; Ketentuan ini</li>
          </ol>
        </Section>

        <Section title="4. Kewajiban Orang Tua/Wali">
          <p>Orang tua/wali yang mendaftarkan anaknya setuju untuk:</p>
          <ul className="list-disc list-inside space-y-1 text-[#5a6e55]">
            <li>Mendampingi dan mengantar anak tepat waktu sesuai jadwal latihan</li>
            <li>Memberikan informasi yang akurat tentang kondisi kesehatan anak</li>
            <li>Mengkomunikasikan kepada pihak akademi jika anak tidak dapat mengikuti latihan</li>
            <li>Mematuhi tata tertib dan aturan yang ditetapkan akademi</li>
            <li>Bertanggung jawab atas transportasi dan keamanan anak sebelum dan sesudah latihan</li>
          </ul>
        </Section>

        <Section title="5. Tata Tertib Latihan">
          <p>Seluruh siswa wajib mematuhi tata tertib berikut:</p>
          <ul className="list-disc list-inside space-y-1 text-[#5a6e55]">
            <li>Mengenakan seragam/atribut latihan yang telah ditentukan</li>
            <li>Datang tepat waktu sesuai jadwal yang ditetapkan</li>
            <li>Mematuhi instruksi pelatih selama sesi latihan</li>
            <li>Menjaga sportivitas dan sikap menghormati sesama pemain, pelatih, dan ofisial</li>
            <li>Tidak membawa barang berbahaya atau terlarang ke area latihan</li>
            <li>Tidak melakukan perundungan (bullying) dalam bentuk apapun</li>
          </ul>
          <p className="mt-2 text-[#5a6e55]">
            Pelanggaran terhadap tata tertib dapat dikenakan sanksi mulai dari teguran 
            hingga pemberhentian dari akademi.
          </p>
        </Section>

        <Section title="6. Biaya &amp; Pembayaran">
          <p>
            Informasi mengenai biaya pendaftaran, iuran bulanan, dan biaya lainnya akan 
            disampaikan secara langsung oleh pihak akademi melalui WhatsApp atau pertemuan 
            tatap muka.
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#5a6e55]">
            <li>Pembayaran dilakukan melalui transfer bank atau tunai sesuai ketentuan yang berlaku</li>
            <li>Biaya yang sudah dibayarkan tidak dapat dikembalikan (non-refundable) kecuali atas kebijakan manajemen akademi</li>
            <li>Keterlambatan pembayaran iuran bulanan dapat mengakibatkan suspend sementara dari kegiatan latihan</li>
          </ul>
        </Section>

        <Section title="7. Pembatalan &amp; Pengunduran Diri">
          <p>
            Orang tua/wali dapat mengajukan pengunduran diri siswa dengan pemberitahuan 
            tertulis kepada pihak akademi minimal 7 (tujuh) hari sebelum tanggal efektif 
            pengunduran diri.
          </p>
          <p>
            Pihak akademi berhak membatalkan atau memberhentikan siswa dari program latihan 
            apabila:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#5a6e55]">
            <li>Melanggar tata tertib latihan secara berat dan berulang</li>
            <li>Terlibat dalam tindakan kriminal atau melanggar hukum</li>
            <li>Melakukan perundungan (bullying) terhadap siswa lain</li>
            <li>Orang tua/wali tidak memenuhi kewajiban pembayaran dalam jangka waktu yang ditentukan</li>
          </ul>
        </Section>

        <Section title="8. Batasan Tanggung Jawab">
          <p>
            PR United FC akan memberikan pembinaan dan pengawasan selama sesi latihan 
            berlangsung. Namun, dengan mendaftarkan anak, orang tua/wali menyetujui bahwa:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#5a6e55]">
            <li>Olahraga sepakbola mengandung risiko cedera fisik yang melekat (inherent risk)</li>
            <li>Pihak akademi tidak bertanggung jawab atas cedera yang terjadi di luar sesi latihan yang diawasi secara langsung oleh pelatih</li>
            <li>Pihak akademi tidak bertanggung jawab atas kehilangan atau kerusakan barang bawaan siswa</li>
            <li>Pihak akademi tidak bertanggung jawab atas kecelakaan yang terjadi dalam perjalanan menuju atau meninggalkan lokasi latihan</li>
          </ul>
        </Section>

        <Section title="9. Kekayaan Intelektual">
          <p>
            Seluruh konten yang terdapat di website ini, termasuk namun tidak terbatas pada 
            teks, gambar, logo, dan desain, adalah milik PR United FC dan dilindungi oleh 
            undang-undang hak cipta. Dilarang menyalin, mendistribusikan, atau menggunakan 
            konten tanpa izin tertulis dari pihak akademi.
          </p>
        </Section>

        <Section title="10. Perubahan Syarat &amp; Ketentuan">
          <p>
            PR United FC berhak untuk mengubah atau memperbarui Syarat &amp; Ketentuan ini 
            sewaktu-waktu. Perubahan akan diumumkan melalui website ini. Dengan terus 
            menggunakan layanan kami setelah perubahan tersebut, Anda dianggap menyetujui 
            perubahan yang dimaksud.
          </p>
        </Section>

        <Section title="11. Hukum yang Berlaku">
          <p>
            Syarat &amp; Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Negara 
            Kesatuan Republik Indonesia. Setiap sengketa yang timbul akan diselesaikan 
            melalui musyawarah untuk mufakat, dan jika tidak tercapai, akan diselesaikan 
            di Pengadilan Negeri Palangka Raya.
          </p>
        </Section>

        <Section title="12. Kontak">
          <div className="bg-[#f6fcf4] rounded-xl p-5 space-y-2">
            <p className="font-semibold text-red-dark">SSB Palangka Raya United FC</p>
            <p className="flex items-center gap-2"><i className="fab fa-whatsapp text-wa w-5 text-center"></i> <a href="https://wa.me/6282256693226" className="text-orange-accent underline hover:no-underline">+62 822 5669 3226</a></p>
            <p className="flex items-center gap-2"><i className="fas fa-envelope text-orange-accent w-5 text-center"></i> <a href="mailto:palangkarayaunited@gmail.com" className="text-orange-accent underline hover:no-underline">palangkarayaunited@gmail.com</a></p>
            <p className="flex items-center gap-2"><i className="fas fa-map-marker-alt text-red-primary w-5 text-center"></i> Stadion Sanaman Mantikei, Jl. Ahmad Yani, Palangka Raya</p>
          </div>
        </Section>
      </div>

      {/* Back link bottom */}
      <div className="text-center mt-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-orange-accent hover:text-orange-hover transition-colors no-underline font-semibold"
        >
          <i className="fas fa-arrow-left"></i>
          Kembali ke Beranda
        </a>
      </div>
    </>
  )

  if (standalone) {
    return <StandaloneShell>{content}</StandaloneShell>
  }

  return (
    <section id="terms" className="bg-[#f8f9fa] scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        {content}
      </div>
    </section>
  )
}

/* ---------- Standalone page shell ---------- */
function StandaloneShell({ children }) {
  return (
    <div className="font-sans text-text-dark min-h-screen bg-[#f8f9fa]">
      <div className="bg-white border-b border-[#e2eedb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 no-underline">
            <picture>
              <source srcSet="/asset/logo.webp" type="image/webp" />
              <img src="/asset/logo.jpg" alt="Logo" className="h-10 w-10 rounded-xl bg-white p-1 object-contain" />
            </picture>
            <div className="leading-tight">
              <span className="font-extrabold text-lg block text-red-dark">PALANGKA RAYA</span>
              <span className="text-sm font-medium block text-orange-accent">UNITED CLUB</span>
            </div>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#5a6e55] hover:text-orange-accent transition-colors no-underline"
          >
            <i className="fas fa-arrow-left"></i>
            <span className="hidden sm:inline">Kembali ke Beranda</span>
          </a>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        {children}
      </div>
      <div className="border-t border-[#e2eedb] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 text-center text-xs text-[#7a9a6e]">
          <p>&copy; {new Date().getFullYear()} SSB Palangka Raya United Football Club.</p>
        </div>
      </div>
    </div>
  )
}

/* ---------- Section helper ---------- */
function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-red-dark mb-3">{title}</h3>
      <div className="space-y-3">{children}</div>
      <hr className="mt-6 border-[#e2eedb]" />
    </div>
  )
}
