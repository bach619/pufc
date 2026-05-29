const eventImages = [
  { src: '/gallery/1.jpeg', label: 'Tim ASC Super Copa 2023' },
  { src: '/gallery/2.jpeg', label: 'Momen pertandingan ASC Super Copa 2023' },
  { src: '/gallery/3.jpeg', label: 'Perayaan juara ASC Super Copa 2023' },
  { src: '/gallery/4.jpeg', label: 'Penyerahan piala ASC Super Copa 2023' },
]

export default function Gallery() {
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
            <div
              key={i}
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
