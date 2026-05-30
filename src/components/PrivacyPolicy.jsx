export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="bg-[#f8f9fa] scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        {/* Back link */}
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-sm text-[#5a6e55] hover:text-orange-accent transition-colors no-underline mb-8"
        >
          <i className="fas fa-arrow-left"></i>
          Kembali ke Beranda
        </a>

        {/* Header */}
        <span className="inline-block bg-[#1c2e1a] text-[#ffd966] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          <i className="fas fa-shield-alt mr-1.5"></i>
          Legal
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-dark mb-2">
          Kebijakan <span className="text-orange-accent">Privasi</span>
        </h2>
        <p className="text-sm text-[#7a8f75] mb-10">
          Berlaku efektif tanggal 30 Mei 2026
        </p>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#e2eedb] p-6 sm:p-10 text-[#3d4f3a] text-sm sm:text-base leading-relaxed space-y-6">
          
          <Section title="1. Informasi Umum">
            <p>
              SSB Palangka Raya United Football Club ("kami", "kita", atau "PR United FC") 
              berkomitmen untuk melindungi privasi setiap individu yang mengakses website ini 
              dan/atau mendaftarkan diri sebagai calon siswa akademi sepakbola kami.
            </p>
            <p>
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
              menyimpan, dan melindungi data pribadi Anda sesuai dengan:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#5a6e55]">
              <li>Undang-Undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik (UU ITE) beserta perubahannya</li>
              <li>Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)</li>
              <li>Peraturan Pemerintah No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik</li>
            </ul>
          </Section>

          <Section title="2. Data Pribadi yang Dikumpulkan">
            <p>Kami mengumpulkan data pribadi yang Anda berikan secara sukarela melalui formulir pendaftaran online di website ini, meliputi:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f6fcf4]">
                    <th className="text-left p-3 font-semibold border border-[#e2eedb]">Data</th>
                    <th className="text-left p-3 font-semibold border border-[#e2eedb]">Tujuan</th>
                    <th className="text-left p-3 font-semibold border border-[#e2eedb]">Wajib/Opsional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-3 border border-[#e2eedb]">Nama lengkap anak</td><td className="p-3 border border-[#e2eedb]">Identifikasi siswa</td><td className="p-3 border border-[#e2eedb]">Wajib</td></tr>
                  <tr><td className="p-3 border border-[#e2eedb]">Usia</td><td className="p-3 border border-[#e2eedb]">Penempatan kelompok latihan</td><td className="p-3 border border-[#e2eedb]">Wajib</td></tr>
                  <tr><td className="p-3 border border-[#e2eedb]">Program latihan</td><td className="p-3 border border-[#e2eedb]">Penempatan kelas</td><td className="p-3 border border-[#e2eedb]">Wajib</td></tr>
                  <tr><td className="p-3 border border-[#e2eedb]">Posisi favorit</td><td className="p-3 border border-[#e2eedb]">Pengembangan latihan</td><td className="p-3 border border-[#e2eedb]">Opsional</td></tr>
                  <tr><td className="p-3 border border-[#e2eedb]">Email orang tua</td><td className="p-3 border border-[#e2eedb]">Komunikasi administrasi</td><td className="p-3 border border-[#e2eedb]">Wajib</td></tr>
                  <tr><td className="p-3 border border-[#e2eedb]">Nomor WhatsApp</td><td className="p-3 border border-[#e2eedb]">Konfirmasi pendaftaran & komunikasi</td><td className="p-3 border border-[#e2eedb]">Wajib</td></tr>
                  <tr><td className="p-3 border border-[#e2eedb]">Catatan tambahan</td><td className="p-3 border border-[#e2eedb]">Informasi pendukung (riwayat cedera, dll)</td><td className="p-3 border border-[#e2eedb]">Opsional</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#7a8f75] mt-2">
              <i className="fas fa-info-circle mr-1"></i>
              Kami <strong>tidak</strong> mengumpulkan data sensitif seperti agama, suku, politik, atau biometric.
            </p>
          </Section>

          <Section title="3. Dasar Hukum Pemrosesan">
            <p>Kami memproses data pribadi Anda berdasarkan:</p>
            <ul className="list-disc list-inside space-y-1 text-[#5a6e55]">
              <li><strong>Persetujuan (consent)</strong> — Anda memberikan persetujuan eksplisit saat mengirimkan formulir pendaftaran</li>
              <li><strong>Kewajiban kontraktual</strong> — Pemrosesan data diperlukan untuk pelaksanaan pendaftaran dan penyediaan layanan akademi</li>
              <li><strong>Kepentingan hukum</strong> — Pemenuhan kewajiban peraturan perundang-undangan yang berlaku</li>
            </ul>
          </Section>

          <Section title="4. Tujuan Penggunaan Data">
            <p>Data pribadi Anda digunakan untuk:</p>
            <ol className="list-decimal list-inside space-y-1 text-[#5a6e55]">
              <li>Memproses pendaftaran calon siswa akademi sepakbola</li>
              <li>Menghubungi orang tua/wali via WhatsApp untuk konfirmasi dan informasi program latihan</li>
              <li>Menempatkan siswa ke kelompok latihan yang sesuai berdasarkan usia</li>
              <li>Administrasi akademi (data kehadiran, pembinaan, dan pengembangan pemain)</li>
              <li>Menyampaikan informasi jadwal latihan, kegiatan, dan event akademi</li>
              <li>Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
            </ol>
          </Section>

          <Section title="5. Perlindungan Data Anak">
            <p>
              Akademi kami menerima siswa usia 5–18 tahun. Kami menyadari bahwa anak-anak 
              memerlukan perlindungan khusus terkait data pribadi mereka. Oleh karena itu:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#5a6e55]">
              <li>Formulir pendaftaran ditujukan dan diisi oleh <strong>orang tua/wali</strong>, bukan oleh anak</li>
              <li>Data anak hanya digunakan untuk kepentingan akademi dan tidak dipublikasikan tanpa persetujuan orang tua/wali</li>
              <li>Dokumentasi kegiatan (foto/video) hanya digunakan untuk keperluan internal akademi dan promosi setelah mendapatkan persetujuan tertulis orang tua/wali</li>
              <li>Orang tua/wali berhak meminta penghapusan data anak setiap saat</li>
            </ul>
          </Section>

          <Section title="6. Hak Subjek Data">
            <p>Anda memiliki hak-hak berikut sesuai UU PDP:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {[
                { icon: 'fa-eye', title: 'Hak Akses', desc: 'Mengetahui data pribadi apa yang kami simpan' },
                { icon: 'fa-pen', title: 'Hak Koreksi', desc: 'Memperbaiki data yang tidak akurat' },
                { icon: 'fa-trash', title: 'Hak Hapus', desc: 'Meminta penghapusan data pribadi Anda' },
                { icon: 'fa-ban', title: 'Hak Batasi', desc: 'Membatasi pemrosesan data tertentu' },
                { icon: 'fa-download', title: 'Hak Portabilitas', desc: 'Menerima data dalam format yang terstruktur' },
                { icon: 'fa-times-circle', title: 'Hak Tolak', desc: 'Menolak pemrosesan data untuk kepentingan tertentu' },
              ].map((item) => (
                <div key={item.title} className="bg-[#f6fcf4] rounded-xl p-4 flex gap-3 items-start">
                  <i className={`fas ${item.icon} text-orange-accent mt-0.5`}></i>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-[#5a6e55]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[#5a6e55]">
              Untuk menjalankan hak-hak Anda, silakan hubungi kami melalui kontak yang tercantum di bagian bawah halaman ini.
            </p>
          </Section>

          <Section title="7. Penyimpanan & Keamanan Data">
            <p>
              Data pribadi Anda disimpan di sistem yang aman dengan akses terbatas hanya kepada 
              pengurus akademi yang berwenang. Kami menerapkan langkah-langkah keamanan teknis 
              dan organisasi yang memadai, termasuk:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#5a6e55]">
              <li>Penggunaan koneksi HTTPS/SSL untuk enkripsi data</li>
              <li>Pembatasan akses ke data pribadi (need-to-know basis)</li>
              <li>Penyimpanan di platform terpercaya (Vercel — lihat <a href="https://vercel.com/security" target="_blank" rel="noopener noreferrer" className="text-orange-accent underline hover:no-underline">keamanan Vercel</a>)</li>
              <li>Data komunikasi WhatsApp diamankan oleh enkripsi end-to-end WhatsApp</li>
            </ul>
            <p className="mt-2">
              Data pribadi akan disimpan selama siswa masih terdaftar di akademi, atau selama 
              diperlukan untuk memenuhi tujuan yang disebutkan di atas, kecuali undang-undang 
              menentukan lain.
            </p>
          </Section>

          <Section title="8. Pengungkapan ke Pihak Ketiga">
            <p>
              Kami <strong>tidak</strong> menjual, menyewakan, atau mengungkapkan data pribadi Anda 
              kepada pihak ketiga untuk tujuan komersial. Data dapat diungkapkan kepada:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#5a6e55]">
              <li>Penyedia layanan teknologi (Vercel — hosting website) sebatas untuk pengoperasian website</li>
              <li>WhatsApp (Meta) — untuk pengiriman pesan pendaftaran</li>
              <li>Instansi pemerintah yang berwenang — jika diwajibkan oleh hukum</li>
            </ul>
          </Section>

          <Section title="9. Cookie & Teknologi Pelacakan">
            <p>
              Website kami menggunakan cookie dan teknologi serupa. Untuk informasi lengkap, 
              silakan lihat <a href="#cookies" className="text-orange-accent underline hover:no-underline">Kebijakan Cookie</a> kami.
            </p>
          </Section>

          <Section title="10. Perubahan Kebijakan Privasi">
            <p>
              Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu. Setiap perubahan akan 
              diumumkan melalui website ini dengan tanggal efektif yang diperbarui. Kami 
              menyarankan Anda untuk meninjau halaman ini secara berkala.
            </p>
          </Section>

          <Section title="11. Kontak & Pengaduan">
            <p>
              Jika Anda memiliki pertanyaan, keluhan, atau ingin menjalankan hak Anda terkait 
              data pribadi, silakan hubungi:
            </p>
            <div className="bg-[#f6fcf4] rounded-xl p-5 mt-2 space-y-2">
              <p className="font-semibold text-red-dark">SSB Palangka Raya United FC</p>
              <p className="flex items-center gap-2"><i className="fab fa-whatsapp text-wa w-5 text-center"></i> <a href="https://wa.me/6282256693226" className="text-orange-accent underline hover:no-underline">+62 822 5669 3226</a></p>
              <p className="flex items-center gap-2"><i className="fas fa-envelope text-orange-accent w-5 text-center"></i> <a href="mailto:palangkarayaunited@gmail.com" className="text-orange-accent underline hover:no-underline">palangkarayaunited@gmail.com</a></p>
              <p className="flex items-center gap-2"><i className="fas fa-map-marker-alt text-red-primary w-5 text-center"></i> Stadion Sanaman Mantikei, Jl. Ahmad Yani, Palangka Raya</p>
            </div>
            <p className="text-xs text-[#7a8f75] mt-2">
              <i className="fas fa-clock mr-1"></i>
              Jam admin: Senin — Sabtu, 08.00 — 17.00 WIB
            </p>
          </Section>
        </div>

        {/* Back link bottom */}
        <div className="text-center mt-10">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-orange-accent hover:text-orange-hover transition-colors no-underline font-semibold"
          >
            <i className="fas fa-arrow-left"></i>
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </section>
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
