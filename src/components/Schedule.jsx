const scheduleData = [
  {
    day: 'Rabu',
    badgeClass: 'rabu',
    group: '6 – 17 tahun',
    time: '14.30 – 16.30 WIB',
    material: 'Teknik dasar & fisik',
  },
  {
    day: 'Jumat',
    badgeClass: 'jumat',
    group: '6 – 17 tahun',
    time: '14.30 – 16.30 WIB',
    material: 'Taktik & game internal',
  },
  {
    day: 'Minggu',
    badgeClass: 'minggu',
    group: '6 – 17 tahun',
    time: '14.30 – 16.30 WIB',
    material: 'Pertandingan & evaluasi',
  },
]

const badgeColors = {
  rabu: 'bg-red-primary',
  jumat: 'bg-orange-accent',
  minggu: 'bg-red-dark',
}

export default function Schedule() {
  return (
    <section id="schedule" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-red-dark mb-4">
        Jadual <span className="text-orange-accent">Latihan</span>
      </h2>
      <p className="text-center text-[#5a6e55] max-w-2xl mx-auto mb-8">
        Lokasi: <strong>Stadion Sanaman Mantikei</strong>, Jalan Ahmad Yani, <strong>Palangka Raya</strong> — satu-satunya SSB di Palangka Raya yang menggunakan stadion utama untuk latihan rutin.
      </p>

      {/* Info box */}
      <div className="bg-[#fff3e0] rounded-3xl p-4 text-center font-semibold mb-8 border-l-[6px] border-orange-accent">
        <i className="fas fa-clock mr-2 text-orange-accent"></i>
        <strong>Terbaru :</strong> Latihan digelar setiap{' '}
        <strong>RABU, JUMAT, MINGGU</strong> pukul <strong>14.30 WIB</strong> untuk{' '}
        <strong>SEMUA KELOMPOK USIA</strong> (6–17 tahun).
      </div>

      {/* Desktop Table — hidden on small screens */}
      <div className="hidden md:block rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-red-primary to-red-dark">
              <th className="text-white font-bold text-xs uppercase tracking-wider px-5 py-4 text-left">Hari</th>
              <th className="text-white font-bold text-xs uppercase tracking-wider px-5 py-4 text-left">Kelompok Usia</th>
              <th className="text-white font-bold text-xs uppercase tracking-wider px-5 py-4 text-left">Waktu</th>
              <th className="text-white font-bold text-xs uppercase tracking-wider px-5 py-4 text-left">Materi Latihan</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((s, i) => (
              <tr key={i} className="border-b border-[#e8f0e4] hover:bg-[#f5faf2] transition-colors last:border-none">
                <td className="px-5 py-4 align-middle">
                  <span className={`inline-block font-extrabold text-sm px-4 py-1.5 rounded-full text-white min-w-[90px] text-center ${badgeColors[s.badgeClass]}`}>
                    {s.day}
                  </span>
                </td>
                <td className="px-5 py-4 align-middle">
                  {s.group} <span className="text-xs text-[#7a8f75]">(semua kelompok)</span>
                </td>
                <td className="px-5 py-4 align-middle">
                  <span className="font-bold text-red-primary bg-[#edf7ea] px-3.5 py-1 rounded-full text-sm whitespace-nowrap">
                    {s.time}
                  </span>
                </td>
                <td className="px-5 py-4 align-middle font-semibold text-[#2c3a2b]">
                  {s.material}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards — shown only on small screens */}
      <div className="md:hidden space-y-4">
        {scheduleData.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-[#e2f0dc]"
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`inline-block font-extrabold text-sm px-4 py-1.5 rounded-full text-white ${badgeColors[s.badgeClass]}`}>
                {s.day}
              </span>
              <span className="text-xs text-[#7a8f75] font-medium">{s.group}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#4a5e47] mb-2">
              <i className="fas fa-clock text-orange-accent text-xs"></i>
              <span className="font-bold text-red-primary">{s.time}</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-[#4a5e47]">
              <i className="fas fa-futbol text-orange-accent text-xs mt-0.5"></i>
              <span className="font-semibold text-[#2c3a2b]">{s.material}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 text-sm text-[#5a6e55] space-y-2">
        <p><i className="fas fa-info-circle mr-1"></i> *Jadual dapat berubah saat libur nasional atau event khusus. Informasi lebih lanjut hubungi admin.</p>
        <p><i className="fas fa-futbol mr-1"></i> Semua peserta latihan wajib hadir 15 menit sebelum sesi dimulai.</p>
      </div>
    </section>
  )
}
