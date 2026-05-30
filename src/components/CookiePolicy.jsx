export default function CookiePolicy() {
  return (
    <section id="cookies" className="bg-[#f8f9fa] scroll-mt-24">
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
          <i className="fas fa-cookie-bite mr-1.5"></i>
          Legal
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-dark mb-2">
          Kebijakan <span className="text-orange-accent">Cookie</span>
        </h2>
        <p className="text-sm text-[#7a8f75] mb-10">
          Berlaku efektif tanggal 30 Mei 2026
        </p>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#e2eedb] p-6 sm:p-10 text-[#3d4f3a] text-sm sm:text-base leading-relaxed space-y-6">

          <Section title="1. Apa Itu Cookie?">
            <p>
              Cookie adalah file teks kecil yang disimpan di perangkat Anda (komputer, tablet, 
              smartphone) saat Anda mengunjungi sebuah website. Cookie memungkinkan website 
              untuk mengingat tindakan dan preferensi Anda selama kunjungan, sehingga Anda 
              tidak perlu memasukkannya kembali setiap kali mengunjungi halaman baru.
            </p>
          </Section>

          <Section title="2. Jenis Cookie yang Kami Gunakan">
            <p>Website SSB Palangka Raya United FC menggunakan cookie dalam kategori berikut:</p>

            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f6fcf4]">
                    <th className="text-left p-3 font-semibold border border-[#e2eedb]">Jenis Cookie</th>
                    <th className="text-left p-3 font-semibold border border-[#e2eedb]">Tujuan</th>
                    <th className="text-left p-3 font-semibold border border-[#e2eedb]">Durasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-[#e2eedb] font-medium">Cookie Teknis (Essential)</td>
                    <td className="p-3 border border-[#e2eedb]">Diperlukan untuk pengoperasian website, termasuk keamanan dan aksesibilitas dasar</td>
                    <td className="p-3 border border-[#e2eedb]">Sesi / Persisten</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#e2eedb] font-medium">Cookie Analytics</td>
                    <td className="p-3 border border-[#e2eedb]">Membantu kami memahami bagaimana pengguna berinteraksi dengan website (halaman yang dikunjungi, durasi kunjungan, dll.)</td>
                    <td className="p-3 border border-[#e2eedb]">Persisten</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#e2eedb] font-medium">Cookie Vercel</td>
                    <td className="p-3 border border-[#e2eedb]">Ditetapkan oleh platform hosting Vercel untuk keperluan infrastruktur dan performa</td>
                    <td className="p-3 border border-[#e2eedb]">Sesi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="3. Cookie Analytics (Vercel Analytics)">
            <p>
              Website ini menggunakan <strong>Vercel Analytics</strong> untuk mengumpulkan 
              data statistik anonim tentang penggunaan website. Vercel Analytics dirancang 
              untuk menghormati privasi pengguna dengan:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#5a6e55]">
              <li>Tidak menggunakan cookie pelacakan lintas situs (cross-site tracking)</li>
              <li>Tidak mengumpulkan data pribadi yang dapat mengidentifikasi individu</li>
              <li>Data dikumpulkan secara agregat dan anonim</li>
              <li>Informasi lebih lanjut: <a href="https://vercel.com/analytics" target="_blank" rel="noopener noreferrer" className="text-orange-accent underline hover:no-underline">Vercel Analytics Privacy</a></li>
            </ul>
          </Section>

          <Section title="4. Cookie Pihak Ketiga">
            <p>Website kami menggunakan layanan pihak ketiga yang mungkin menetapkan cookie mereka sendiri:</p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f6fcf4]">
                    <th className="text-left p-3 font-semibold border border-[#e2eedb]">Layanan</th>
                    <th className="text-left p-3 font-semibold border border-[#e2eedb]">Tujuan</th>
                    <th className="text-left p-3 font-semibold border border-[#e2eedb]">Kebijakan Privasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-[#e2eedb]">Google Fonts</td>
                    <td className="p-3 border border-[#e2eedb]">Memuat tipografi website</td>
                    <td className="p-3 border border-[#e2eedb]"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-accent underline hover:no-underline">Google Privacy</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#e2eedb]">Font Awesome (CDN)</td>
                    <td className="p-3 border border-[#e2eedb]">Memuat ikon website</td>
                    <td className="p-3 border border-[#e2eedb]"><a href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-accent underline hover:no-underline">FontAwesome Privacy</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#e2eedb]">Google Maps</td>
                    <td className="p-3 border border-[#e2eedb]">Menampilkan peta lokasi akademi</td>
                    <td className="p-3 border border-[#e2eedb]"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-accent underline hover:no-underline">Google Privacy</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#e2eedb]">Vercel</td>
                    <td className="p-3 border border-[#e2eedb]">Hosting website & analytics</td>
                    <td className="p-3 border border-[#e2eedb]"><a href="https://vercel.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-accent underline hover:no-underline">Vercel Privacy</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="5. Dasar Hukum Penggunaan Cookie">
            <p>
              Penggunaan cookie di website ini didasarkan pada:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#5a6e55]">
              <li><strong>Kepentingan sah (legitimate interest)</strong> — untuk cookie teknis yang diperlukan bagi pengoperasian website</li>
              <li><strong>Persetujuan (consent)</strong> — untuk cookie non-esensial, sesuai dengan Peraturan Menteri Kominfo No. 5 Tahun 2020</li>
            </ul>
            <p className="mt-2">
              Cookie teknis/esensial akan aktif secara otomatis karena diperlukan untuk 
              pengoperasian website. Cookie non-esensial hanya akan aktif dengan persetujuan Anda.
            </p>
          </Section>

          <Section title="6. Cara Mengontrol & Menghapus Cookie">
            <p>Anda dapat mengontrol dan/atau menghapus cookie melalui pengaturan browser Anda:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {[
                { browser: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                { browser: 'Mozilla Firefox', url: 'https://support.mozilla.org/id/kb/hapus-cookie-untuk-menghapus-data-yang-disimpan-situs' },
                { browser: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
                { browser: 'Microsoft Edge', url: 'https://support.microsoft.com/topic/microsoft-edge-data-privacy-and-security-31c3a71b-5bef-42b5-aebb-018e318f9389' },
              ].map((item) => (
                <a
                  key={item.browser}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f6fcf4] rounded-xl p-4 flex items-center gap-3 hover:bg-[#e8f5e0] transition-colors no-underline"
                >
                  <i className="fab fa-chrome text-orange-accent text-xl"></i>
                  <div>
                    <p className="font-semibold text-sm text-[#1e2a1f]">{item.browser}</p>
                    <p className="text-xs text-[#5a6e55]">Buka panduan pengaturan cookie</p>
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-3 text-[#5a6e55]">
              Harap diperhatikan bahwa menonaktifkan cookie dapat memengaruhi fungsionalitas 
              website. Beberapa fitur mungkin tidak berfungsi secara optimal.
            </p>
          </Section>

          <Section title="7. Pembaruan Kebijakan Cookie">
            <p>
              Kebijakan Cookie ini dapat diperbarui dari waktu ke waktu untuk mencerminkan 
              perubahan pada teknologi yang kami gunakan atau perubahan peraturan yang berlaku. 
              Tanggal efektif terbaru tercantum di bagian atas halaman ini.
            </p>
          </Section>

          <Section title="8. Kontak">
            <p>
              Jika Anda memiliki pertanyaan mengenai Kebijakan Cookie ini, silakan hubungi:
            </p>
            <div className="bg-[#f6fcf4] rounded-xl p-5 mt-2 space-y-2">
              <p className="font-semibold text-red-dark">SSB Palangka Raya United FC</p>
              <p className="flex items-center gap-2"><i className="fab fa-whatsapp text-wa w-5 text-center"></i> <a href="https://wa.me/6282256693226" className="text-orange-accent underline hover:no-underline">+62 822 5669 3226</a></p>
              <p className="flex items-center gap-2"><i className="fas fa-envelope text-orange-accent w-5 text-center"></i> <a href="mailto:palangkarayaunited@gmail.com" className="text-orange-accent underline hover:no-underline">palangkarayaunited@gmail.com</a></p>
            </div>
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
