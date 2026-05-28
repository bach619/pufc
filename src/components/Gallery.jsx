export default function Gallery() {
  const images = [
    '/gallery/1.jpeg',
    '/gallery/2.jpeg',
    '/gallery/3.jpeg',
    '/gallery/4.jpeg',
  ]

  return (
    <section
      id="gallery"
      className="bg-gray-light rounded-t-[48px] sm:rounded-t-[48px] px-4 sm:px-8 py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-red-dark mb-4">
          Galeri <span className="text-orange-accent">Kegiatan</span>
        </h2>
        <p className="text-center text-[#5a6e55] max-w-2xl mx-auto mb-12">
          Dokumentasi latihan dan momen kebersamaan SSB PR United.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <img
                src={src}
                alt={`Galeri ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
