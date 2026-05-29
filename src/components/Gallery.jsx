import { useState, useEffect, useCallback } from 'react'

const eventImages = [
  { src: '/gallery/1.jpeg', label: 'Tim ASC Super Copa 2023' },
  { src: '/gallery/2.jpeg', label: 'Momen pertandingan ASC Super Copa 2023' },
  { src: '/gallery/3.jpeg', label: 'Perayaan juara ASC Super Copa 2023' },
  { src: '/gallery/4.jpeg', label: 'Penyerahan piala ASC Super Copa 2023' },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % eventImages.length)
  }, [])

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + eventImages.length) % eventImages.length)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, closeLightbox, goNext, goPrev])

  return (
    <section
      id="gallery"
      className="bg-gray-light rounded-t-[48px] sm:rounded-t-[48px] px-4 sm:px-8 py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-accent text-white font-bold text-xs px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            Prestasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-red-dark mb-4">
            Juara <span className="text-orange-accent">ASC Super Copa 2023</span>
          </h2>
          <p className="text-center text-[#5a6e55] max-w-2xl mx-auto">
            Palangka Raya United FC berhasil meraih gelar juara pada ajang <strong>ASC Super Copa 2023</strong>. 
            Dokumentasi perjalanan tim dari pertandingan hingga momen kemenangan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {eventImages.map((item, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer text-left border-none p-0"
              aria-label={`Lihat gambar: ${item.label}`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={eventImages[lightboxIndex].label}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl cursor-pointer bg-black/30 hover:bg-black/50 w-12 h-12 rounded-full flex items-center justify-center transition-all z-10"
            aria-label="Tutup"
          >
            <i className="fas fa-times"></i>
          </button>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-2xl cursor-pointer bg-black/30 hover:bg-black/50 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all z-10"
            aria-label="Sebelumnya"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Image */}
          <img
            src={eventImages[lightboxIndex].src}
            alt={eventImages[lightboxIndex].label}
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-2xl cursor-pointer bg-black/30 hover:bg-black/50 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all z-10"
            aria-label="Selanjutnya"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Caption */}
          <div className="absolute bottom-6 left-0 right-0 text-center px-4">
            <p className="text-white/90 text-sm font-medium bg-black/40 inline-block px-4 py-2 rounded-full backdrop-blur-sm">
              {eventImages[lightboxIndex].label}
            </p>
          </div>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-white/70 text-sm font-medium bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {lightboxIndex + 1} / {eventImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
