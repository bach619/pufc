import { useState } from 'react'

const WA_NUMBER = '6282256693226'

export default function Registration() {
  const [form, setForm] = useState({
    nama: '',
    umur: '',
    program: '',
    posisi: '',
    email: '',
    whatsapp: '',
    catatan: '',
  })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { nama, umur, program, email, whatsapp, posisi, catatan } = form

    if (!nama.trim() || !umur || !program || !email.trim() || !whatsapp.trim()) {
      alert('Mohon lengkapi data pendaftaran (Nama, Usia, Program, Email, No WhatsApp)')
      return
    }

    const age = Number(umur)
    if (isNaN(age) || age < 5 || age > 18) {
      alert('Usia harus antara 5 - 18 tahun')
      return
    }

    const message = [
      `*PENDAFTARAN BARU - SSB PR United*`,
      ``,
      `*Nama Anak:* ${nama.trim()}`,
      `*Usia:* ${umur} tahun`,
      `*Program:* ${program}`,
      `*Posisi Favorit:* ${posisi.trim() || '(tidak diisi)'}`,
      `*Email Orang Tua:* ${email.trim()}`,
      `*No. WhatsApp:* ${whatsapp.trim()}`,
      `*Catatan:* ${catatan.trim() || '(tidak ada)'}`,
    ].join('\n')

    setSending(true)
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    )

    setForm({ nama: '', umur: '', program: '', posisi: '', email: '', whatsapp: '', catatan: '' })
    setTimeout(() => setSending(false), 2000)
  }

  return (
    <section id="registration" className="bg-[#eef5e9] rounded-[48px] sm:rounded-[48px] px-4 sm:px-8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-red-dark mb-4">
          Formulir <span className="text-orange-accent">Pendaftaran</span>
        </h2>
        <p className="text-center text-[#5a6e55] max-w-2xl mx-auto mb-10">
          Daftarkan putra/putri anda untuk bergabung menjadi bagian dari keluarga besar Palangka Raya United FC.
        </p>

        <div className="bg-white rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.05)] max-w-2xl mx-auto p-8 sm:p-12">
          {sending && (
            <div className="mb-6 bg-green-100 text-green-800 p-4 rounded-xl text-center font-semibold">
              <i className="fab fa-whatsapp mr-2"></i> Terkirim! Data pendaftaran sudah dikirim ke WhatsApp admin. Kami akan menghubungi Anda segera.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nama" className="font-semibold text-sm text-text-dark pl-1">Nama Lengkap Anak</label>
                <input
                  type="text"
                  id="nama"
                  value={form.nama}
                  onChange={handleChange}
                  placeholder="Contoh: Budi Santoso"
                  required
                  className="w-full px-4 py-3 border border-[#cfdfc8] rounded-2xl text-sm bg-white focus:outline-none focus:border-orange-accent focus:ring-3 focus:ring-orange-accent/15 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="umur" className="font-semibold text-sm text-text-dark pl-1">Usia</label>
                <input
                  type="number"
                  id="umur"
                  value={form.umur}
                  onChange={handleChange}
                  placeholder="Usia (tahun)"
                  min="5"
                  max="18"
                  required
                  className="w-full px-4 py-3 border border-[#cfdfc8] rounded-2xl text-sm bg-white focus:outline-none focus:border-orange-accent focus:ring-3 focus:ring-orange-accent/15 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="program" className="font-semibold text-sm text-text-dark pl-1">Program Latihan</label>
                <select
                  id="program"
                  value={form.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#cfdfc8] rounded-2xl text-sm bg-white focus:outline-none focus:border-orange-accent focus:ring-3 focus:ring-orange-accent/15 transition-all"
                >
                  <option value="">Pilih Program Latihan</option>
                  <option value="6-9 tahun (Cilik)">Kelompok Cilik (6-9 tahun)</option>
                  <option value="10-13 tahun (Junior)">Kelompok Junior (10-13 tahun)</option>
                  <option value="14-17 tahun (Remaja)">Kelompok Remaja (14-17 tahun)</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="posisi" className="font-semibold text-sm text-text-dark pl-1">Posisi Favorit</label>
                <input
                  type="text"
                  id="posisi"
                  value={form.posisi}
                  onChange={handleChange}
                  placeholder="Misal: striker, kiper, gelandang"
                  className="w-full px-4 py-3 border border-[#cfdfc8] rounded-2xl text-sm bg-white focus:outline-none focus:border-orange-accent focus:ring-3 focus:ring-orange-accent/15 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-semibold text-sm text-text-dark pl-1">Email Orang Tua</label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="contoh@email.com"
                  required
                  className="w-full px-4 py-3 border border-[#cfdfc8] rounded-2xl text-sm bg-white focus:outline-none focus:border-orange-accent focus:ring-3 focus:ring-orange-accent/15 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="whatsapp" className="font-semibold text-sm text-text-dark pl-1">Nomor WhatsApp</label>
                <input
                  type="tel"
                  id="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="08xxxxxxxxxx (aktif)"
                  required
                  className="w-full px-4 py-3 border border-[#cfdfc8] rounded-2xl text-sm bg-white focus:outline-none focus:border-orange-accent focus:ring-3 focus:ring-orange-accent/15 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="catatan" className="font-semibold text-sm text-text-dark pl-1">Catatan Tambahan</label>
              <textarea
                id="catatan"
                rows="3"
                value={form.catatan}
                onChange={handleChange}
                placeholder="Pengalaman bermain, riwayat cedera, atau catatan lainnya (opsional)"
                className="w-full px-4 py-3 border border-[#cfdfc8] rounded-2xl text-sm bg-white focus:outline-none focus:border-orange-accent focus:ring-3 focus:ring-orange-accent/15 transition-all resize-y min-h-[80px]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-primary to-red-dark text-white font-bold py-4 px-6 rounded-2xl text-base cursor-pointer hover:from-red-dark hover:to-[#7f0000] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(183,28,28,0.3)] active:translate-y-0 transition-all mt-2 tracking-wide"
            >
              <i className="fas fa-paper-plane mr-2"></i> Kirim Pendaftaran
            </button>
            <p className="text-xs text-center text-[#7a8f75] mt-3">*Pendaftaran akan dikonfirmasi via WhatsApp dalam 1x24 jam.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
