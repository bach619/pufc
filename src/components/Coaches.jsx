// Palette for assistant coach avatars
const avatarColors = [
  'from-emerald-500 to-teal-600',
  'from-blue-500 to-indigo-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-violet-500 to-purple-600',
  'from-cyan-500 to-sky-600',
]

function getInitials(name) {
  const parts = name.split(' ')
  if (parts.length >= 2) return parts[0][0] + parts[1][0]
  return parts[0][0]
}

const coaches = [
  {
    name: 'Sugianto',
    role: 'Head Coach',
    isHead: true,
  },
  {
    name: 'Robinsen',
    role: 'Coach',
  },
  {
    name: 'Irwan Mahsyuri',
    role: 'Coach',
  },
  {
    name: 'Deni Setiawan',
    role: 'Coach',
  },
  {
    name: 'Rafael Kevin',
    role: 'Coach',
  },
  {
    name: 'Jeriel Bisatria',
    role: 'Coach',
  },
  {
    name: 'Fidel Juan Sebastian',
    role: 'Coach',
  },
]

export default function Coaches() {
  const headCoach = coaches.find((c) => c.isHead)
  const assistantCoaches = coaches.filter((c) => !c.isHead)

  return (
    <section id="coaches" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-red-dark mb-4">
        Pelatih <span className="text-orange-accent">SSB PUFC</span>
      </h2>
      <p className="text-center text-[#5a6e55] max-w-2xl mx-auto mb-12">
        Dipimpin pelatih kepala berlisensi PSSI yang berdedikasi membina generasi emas sepakbola Palangka Raya.
      </p>

      {/* Head Coach */}
      <div className="flex justify-center mb-12">
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-[#e2f0dc] text-center max-w-sm w-full hover:-translate-y-2 hover:shadow-[0_20px_30px_-12px_rgba(46,125,50,0.2)] transition-all">
          <div className="w-24 h-24 bg-gradient-to-br from-red-primary to-red-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ring-4 ring-[#ffd966]/40">
            <span className="text-3xl font-extrabold text-[#ffd966]">{headCoach.name[0]}</span>
          </div>
          <h3 className="text-2xl font-bold text-red-dark">{headCoach.name}</h3>
          <span className="inline-block mt-2 bg-orange-accent text-white text-sm font-bold uppercase tracking-wider px-4 py-1 rounded-full">
            {headCoach.role}
          </span>
        </div>
      </div>

      {/* Assistant Coaches */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {assistantCoaches.map((coach, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-6 shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-[#e2f0dc] text-center hover:-translate-y-2 hover:shadow-[0_20px_30px_-12px_rgba(46,125,50,0.2)] transition-all group"
          >
            <div
              className={`w-24 h-24 bg-gradient-to-br ${avatarColors[i % avatarColors.length]} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
            >
              <span className="text-2xl font-extrabold text-white drop-shadow-sm">
                {getInitials(coach.name)}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-1">{coach.name}</h3>
            <span className="text-sm font-medium text-[#5a6e55]">{coach.role}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
