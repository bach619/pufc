import { useState } from 'react'

const legalData = [
  {
    icon: 'fa-building',
    title: 'Badan Hukum Induk',
    detail: 'PS. PALANGKARAYA UTAMA PUTERA KALIMANTAN TENGAH',
  },
  {
    icon: 'fa-file-signature',
    title: 'Akta Notaris',
    detail: (
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>Akta Notaris Nomor 16 — 24 September 2020</li>
        <li>Perubahan Akta Notaris Nomor 18 — 23 Mei 2022</li>
      </ul>
    ),
  },
  {
    icon: 'fa-gavel',
    title: 'SK Kemenkumham',
    detail: 'Keputusan Menkumham RI Nomor AHU-0000988.AH.01.08 Tahun 2022',
  },
  {
    icon: 'fa-newspaper',
    title: 'Berita Negara',
    detail: (
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>Berita Negara No. 084</li>
        <li>Tambahan Berita Negara RI No. 000419</li>
        <li>Tanggal terbit: 20 Oktober 2020</li>
      </ul>
    ),
  },
]

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-[#d4e8cc] rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left bg-white hover:bg-[#f6fcf4] transition-colors"
      >
        <div className="flex items-center gap-3">
          <i className={`fas ${item.icon} text-orange-accent text-lg w-6 text-center`}></i>
          <span className="font-semibold text-text-dark">{item.title}</span>
        </div>
        <i
          className={`fas fa-chevron-down text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        ></i>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-4 pt-1 text-[#4a5e47] text-sm leading-relaxed border-t border-[#e2f0dc]">
          {item.detail}
        </div>
      </div>
    </div>
  )
}

export default function LegalDocs() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx)

  return (
    <section id="legal-docs" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
      <div className="text-center mb-12">
        <span className="inline-block bg-[#1c2e1a] text-[#ffd966] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          <i className="fas fa-check-circle mr-1.5"></i>
          Terdaftar Resmi
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-dark">
          Dokumen <span className="text-orange-accent">Legalitas</span>
        </h2>
        <p className="text-[#5a6e55] max-w-2xl mx-auto mt-3">
          Berbadan hukum resmi dan terdaftar di Kementerian Hukum & HAM RI.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {legalData.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  )
}
