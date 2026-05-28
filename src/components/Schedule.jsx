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
  rabu: 'bg-green-primary',
  jumat: 'bg-orange-accent',
  minggu: 'bg-green-dark',
}

export default function Schedule() {
  return (
    <section id="schedule" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-green-dark mb-4">
        Jadwal <span className="text-orange-accent">Latihan</span>
      </h2>
      <p className="text-center text-[#5a6e55] max-w-2xl mx-auto mb-8">
        Lokasi: Stadion Sanaman Mantikei, Jalan Ahmad Yani, Palangkaraya
      </p>

      {/* Info box */}
      <div className="bg-[#fff3e0] rounded-3xl p-4 text-center font-semibold mb-8 border-l-[6px] border-orange-accent">
        <i className="fas fa-clock mr-2 text-orange-accent"></i>
        <strong>Jadwal Terbaru :</strong> Latihan digelar setiap{' '}
        <strong>RABU, JUMAT, MINGGU</strong> pukul <strong>14.30 WIB</strong> untuk{' '}
        <strong>SEMUA KELOMPOK USIA</strong> (6–17 tahun).
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <table className="schedule-table w-full border-collapse bg-white rounded-2xl overflow-hidden text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-green-primary to-green-dark">
              <th className="text-white font-bold text-xs uppercase tracking-wider px-5 py-4 text-left">Hari</th>
              <th className="text-white font-bold text-xs uppercase tracking-wider px-5 py-4 text-left">Kelompok Usia</th>
              <th className="text-white font-bold text-xs uppercase tracking-wider px-5 py-4 text-left">Waktu</th>
              <th className="text-white font-bold text-xs uppercase tracking-wider px-5 py-4 text-left">Materi Latihan</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((s, i) => (
              <tr key={i} className="border-b border-[#e8f0e4] hover:bg-[#f5faf2] transition-colors last:border-none">
                <td data-label="Hari" className="px-5 py-4 align-middle">
                  <span className={`inline-block font-extrabold text-sm px-4 py-1.5 rounded-full text-white min-w-[90px] text-center ${badgeColors[s.badgeClass]}`}>
                    {s.day}
                  </span>
                </td>
                <td data-label="Kelompok" className="px-5 py-4 align-middle">
                  {s.group} <span className="text-xs text-[#7a8f75]">(semua kelompok)</span>
                </td>
                <td data-label="Waktu" className="px-5 py-4 align-middle">
                  <span className="font-bold text-green-primary bg-[#edf7ea] px-3.5 py-1 rounded-full text-sm whitespace-nowrap">
                    {s.time}
                  </span>
                </td>
                <td data-label="Materi" className="px-5 py-4 align-middle font-semibold text-[#2c3a2b]">
                  {s.material}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-8 text-sm text-[#5a6e55] space-y-2">
        <p><i className="fas fa-info-circle mr-1"></i> *Jadwal dapat berubah saat libur nasional atau event khusus. Informasi lebih lanjut hubungi admin.</p>
        <p><i className="fas fa-futbol mr-1"></i> Semua peserta latihan wajib hadir 15 menit sebelum sesi dimulai.</p>
      </div>
    </section>
  )
}
