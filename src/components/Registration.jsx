import { useState } from 'react'

const WA_NUMBER = '6282256693226'

const FIELDS = [
  {
    id: 'nama',
    label: 'Nama Lengkap Anak',
    type: 'text',
    placeholder: 'Budi Santoso',
    required: true,
    validation: (v) => (!v.trim() ? 'Nama anak wajib diisi' : ''),
  },
  {
    id: 'umur',
    label: 'Usia',
    type: 'number',
    placeholder: 'Usia (tahun)',
    required: true,
    min: 5,
    max: 18,
    validation: (v) => {
      if (!v) return 'Usia wajib diisi'
      const n = Number(v)
      if (n < 5 || n > 18) return 'Usia harus antara 5 – 18 tahun'
      return ''
    },
  },
  {
    id: 'program',
    label: 'Program Latihan',
    type: 'select',
    placeholder: 'Pilih Program Latihan',
    required: true,
    options: [
      { value: '6-9 tahun (Cilik)', label: 'Kelompok Cilik (6-9 tahun)' },
      { value: '10-13 tahun (Junior)', label: 'Kelompok Junior (10-13 tahun)' },
      { value: '14-17 tahun (Remaja)', label: 'Kelompok Remaja (14-17 tahun)' },
    ],
    validation: (v) => (!v ? 'Pilih program latihan' : ''),
  },
  {
    id: 'posisi',
    label: 'Posisi Favorit',
    type: 'text',
    placeholder: 'Misal: striker, kiper, gelandang',
    required: false,
    validation: () => '',
  },
  {
    id: 'email',
    label: 'Email Orang Tua',
    type: 'email',
    placeholder: 'contoh@email.com',
    required: true,
    validation: (v) => {
      if (!v.trim()) return 'Email wajib diisi'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Format email tidak valid'
      return ''
    },
  },
  {
    id: 'whatsapp',
    label: 'Nomor WhatsApp',
    type: 'tel',
    placeholder: '08xxxxxxxxxx (aktif)',
    required: true,
    validation: (v) => {
      if (!v.trim()) return 'No. WhatsApp wajib diisi'
      if (v.replace(/\D/g, '').length < 10) return 'Nomor minimal 10 digit'
      return ''
    },
  },
]

export default function Registration() {
  const [form, setForm] = useState(
    Object.fromEntries(FIELDS.map((f) => [f.id, '']))
  )
  const [touched, setTouched] = useState({})
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    // clear touched error once user starts typing
    if (touched[e.target.id]) {
      setTouched((prev) => ({ ...prev, [e.target.id]: false }))
    }
  }

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.id]: true }))
  }

  const getError = (field) => {
    if (!touched[field.id]) return ''
    return field.validation(form[field.id])
  }

  const isValid = () => {
    for (const field of FIELDS) {
      if (field.required && field.validation(form[field.id])) return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Mark all as touched
    const allTouched = Object.fromEntries(FIELDS.map((f) => [f.id, true]))
    setTouched(allTouched)

    if (!isValid()) return

    const message = [
      `*PENDAFTARAN BARU - SSB PR United*`,
      ``,
      `*Nama Anak:* ${form.nama.trim()}`,
      `*Usia:* ${form.umur} tahun`,
      `*Program:* ${form.program}`,
      `*Posisi Favorit:* ${form.posisi.trim() || '(tidak diisi)'}`,
      `*Email Orang Tua:* ${form.email.trim()}`,
      `*No. WhatsApp:* ${form.whatsapp.trim()}`,
      `*Catatan:* ${form.catatan.trim() || '(tidak ada)'}`,
    ].join('\n')

    setSending(true)
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    )

    setForm(Object.fromEntries(FIELDS.map((f) => [f.id, ''])))
    setTouched({})
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

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Nama */}
              <FloatingField
                field={FIELDS[0]}
                value={form.nama}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError(FIELDS[0])}
              />
              {/* Umur */}
              <FloatingField
                field={FIELDS[1]}
                value={form.umur}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError(FIELDS[1])}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Program */}
              <FloatingField
                field={FIELDS[2]}
                value={form.program}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError(FIELDS[2])}
              />
              {/* Posisi */}
              <FloatingField
                field={FIELDS[3]}
                value={form.posisi}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError(FIELDS[3])}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Email */}
              <FloatingField
                field={FIELDS[4]}
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError(FIELDS[4])}
              />
              {/* WhatsApp */}
              <FloatingField
                field={FIELDS[5]}
                value={form.whatsapp}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError(FIELDS[5])}
              />
            </div>

            {/* Catatan */}
            <FloatingTextarea
              id="catatan"
              label="Catatan Tambahan"
              value={form.catatan}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Pengalaman bermain, riwayat cedera, atau catatan lainnya (opsional)"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-primary to-red-dark text-white font-bold py-4 px-6 rounded-2xl text-base cursor-pointer hover:from-red-dark hover:to-[#7f0000] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(183,28,28,0.3)] active:translate-y-0 transition-all mt-2 tracking-wide"
            >
              <i className="fas fa-paper-plane mr-2"></i> Kirim Pendaftaran
            </button>
            <p className="text-xs text-center text-[#7a8f75] mt-3">
              *Pendaftaran akan dikonfirmasi via WhatsApp dalam 1x24 jam.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ---------- Floating input wrapper ---------- */
function FloatingField({ field, value, onChange, onBlur, error }) {
  const hasValue = value !== ''
  const isSelect = field.type === 'select'

  return (
    <div className="relative">
      {isSelect ? (
        <select
          id={field.id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={field.required}
          className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-2xl text-sm bg-white appearance-none cursor-pointer transition-all outline-none ${
            error
              ? 'border-red-400 focus:border-red-500'
              : 'border-[#cfdfc8] focus:border-orange-accent'
          }`}
        >
          <option value="">{field.placeholder}</option>
          {field.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={field.type}
          id={field.id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={field.placeholder}
          required={field.required}
          min={field.min}
          max={field.max}
          className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-2xl text-sm bg-white transition-all outline-none ${
            error
              ? 'border-red-400 focus:border-red-500'
              : 'border-[#cfdfc8] focus:border-orange-accent'
          }`}
        />
      )}
      <label
        htmlFor={field.id}
        className={`absolute left-4 top-0 text-xs font-semibold transition-all pointer-events-none
          ${hasValue ? 'text-orange-accent pt-1.5' : 'text-text-dark/60 pt-5'}
        `}
      >
        {field.label}
        {field.required && <span className="text-red-500 ml-0.5">*</span>}
        {/* The label doubles as floating indicator — it sits at top always */}
      </label>
      {/* Floating behavior via peer placeholder-shown trick */}
      <style>{`
        #${field.id}::placeholder { color: transparent; }
        #${field.id}:placeholder-shown ~ label {
          top: 50%; transform: translateY(-50%);
          font-size: 0.875rem; font-weight: 500;
          color: #7a8f75; padding-top: 0;
        }
        #${field.id}:focus ~ label {
          top: 0; transform: translateY(0);
          font-size: 0.75rem; font-weight: 700;
          color: #f57c00; padding-top: 0.375rem;
        }
        #${field.id}.has-value ~ label {
          top: 0; transform: translateY(0);
          font-size: 0.75rem; font-weight: 700;
          color: #f57c00; padding-top: 0.375rem;
        }
        select#${field.id} ~ label {
          top: 0; transform: translateY(0);
          font-size: 0.75rem; font-weight: 700;
          color: ${error ? '#ef4444' : '#f57c00'};
          padding-top: 0.375rem;
        }
      `}</style>
      {/* Error message */}
      {error && (
        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <i className="fas fa-exclamation-circle"></i> {error}
        </p>
      )}
    </div>
  )
}

/* ---------- Floating textarea (catatan) ---------- */
function FloatingTextarea({ id, label, value, onChange, onBlur, placeholder }) {
  return (
    <div className="relative">
      <textarea
        id={id}
        rows="3"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-2xl text-sm bg-white transition-all outline-none border-[#cfdfc8] focus:border-orange-accent resize-y min-h-[80px]`}
      ></textarea>
      <label
        htmlFor={id}
        className="absolute left-4 top-0 pt-1.5 text-xs font-semibold text-orange-accent pointer-events-none"
      >
        {label}
      </label>
      <style>{`
        #${id}::placeholder { color: transparent; }
        #${id}:placeholder-shown ~ label {
          top: 1rem; font-size: 0.875rem; font-weight: 500; color: #7a8f75; padding-top: 0;
        }
        #${id}:focus ~ label {
          top: 0; font-size: 0.75rem; font-weight: 700; color: #f57c00; padding-top: 0.375rem;
        }
      `}</style>
    </div>
  )
}
