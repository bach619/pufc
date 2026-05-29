const avatarColors = [
  ['#10b981', '#059669'],
  ['#3b82f6', '#4338ca'],
  ['#f59e0b', '#ea580c'],
  ['#f43f5e', '#be185d'],
  ['#8b5cf6', '#6d28d9'],
  ['#06b6d4', '#0e7490'],
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
    badge: 'Lisensi PSSI C',
    isHead: true,
  },
  {
    name: 'Robinsen',
    role: 'Coach',
    badge: 'Lisensi PSSI D',
  },
  {
    name: 'Irwan Mahsyuri',
    role: 'Coach',
    badge: 'Lisensi PSSI D',
  },
  {
    name: 'Deni Setiawan',
    role: 'Coach',
    badge: 'Lisensi PSSI D',
  },
  {
    name: 'Rafael Kevin',
    role: 'Coach',
    badge: 'Lisensi PSSI D',
  },
  {
    name: 'Jeriel Bisatria',
    role: 'Coach',
    badge: 'Lisensi PSSI D',
  },
  {
    name: 'Fidel Juan Sebastian',
    role: 'Coach',
    badge: 'Lisensi PSSI D',
  },
]

export default function Coaches() {
  const headCoach = coaches.find((c) => c.isHead)
  const assistantCoaches = coaches.filter((c) => !c.isHead)

  return (
    <section id="coaches" className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-20 sm:py-28">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#e94560]/10 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-[#0f3460]/30 blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#533483]/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#e94560] bg-white/10 backdrop-blur-sm px-5 py-1.5 rounded-full mb-4">
            Tim Kepelatihan
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-white via-[#ffd966] to-orange-accent bg-clip-text text-transparent">
              Pelatih SSB PUFC
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-base leading-relaxed">
            Dipimpin pelatih kepala berlisensi PSSI yang berdedikasi membina generasi emas sepakbola Palangka Raya.
          </p>
        </div>

        {/* Head Coach — large featured card */}
        <div className="flex justify-center mb-14">
          <div className="group relative w-full max-w-sm">
            {/* Glossy shine overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
              <div className="absolute -inset-full top-0 -left-full w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-[shimmer_1.5s_ease-in-out]"></div>
            </div>
            {/* Card */}
            <div className="relative rounded-3xl p-8 backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-[#ffd966]/40 hover:shadow-[0_8px_32px_rgba(233,69,96,0.15)] transition-all duration-500 text-center">
              {/* Glossy highlight strip at top */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>

              {/* Avatar */}
              <div className="relative mx-auto mb-5 w-28 h-28">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#e94560] via-[#ffd966] to-orange-accent animate-pulse blur-sm opacity-60"></div>
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#e94560] to-[#c23152] flex items-center justify-center shadow-lg ring-2 ring-white/30">
                  <span className="text-4xl font-extrabold text-white drop-shadow-lg">
                    {headCoach.name[0]}
                  </span>
                </div>
                {/* Crown / star badge */}
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#ffd966] rounded-full flex items-center justify-center shadow-md ring-2 ring-[#1a1a2e]">
                  <i className="fas fa-crown text-[10px] text-[#1a1a2e]"></i>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white">{headCoach.name}</h3>
              <span className="inline-block mt-2 bg-gradient-to-r from-[#e94560] to-[#ff6b6b] text-white text-sm font-bold uppercase tracking-wider px-5 py-1.5 rounded-full shadow-md">
                {headCoach.role}
              </span>

              {/* Badge */}
              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#94a3b8]">
                <i className="fas fa-shield-alt text-[#ffd966]"></i>
                <span>{headCoach.badge}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Assistant Coaches — glossy grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {assistantCoaches.map((coach, i) => {
            const [c1, c2] = avatarColors[i % avatarColors.length]
            return (
              <div key={i} className="group relative">
                {/* Glossy shine overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                  <div className="absolute -inset-full top-0 -left-full w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-[shimmer_1.5s_ease-in-out]"></div>
                </div>
                {/* Card */}
                <div className="relative rounded-2xl p-6 backdrop-blur-xl bg-white/10 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:border-white/30 hover:shadow-[0_8px_32px_rgba(233,69,96,0.1)] transition-all duration-500 text-center">
                  {/* Glossy highlight strip */}
                  <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

                  {/* Avatar */}
                  <div className="relative mx-auto mb-4 w-24 h-24">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
                      style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
                    ></div>
                    <div className="relative w-full h-full rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/20 group-hover:ring-[#ffd966]/40 transition-all duration-500"
                      style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
                    >
                      <span className="text-2xl font-extrabold text-white drop-shadow-lg">
                        {getInitials(coach.name)}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white">{coach.name}</h3>
                  <p className="text-sm font-medium text-[#94a3b8] mt-0.5">{coach.role}</p>

                  {/* Badge */}
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#64748b] bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    <i className="fas fa-shield-alt text-[#ffd966] text-[8px]"></i>
                    {coach.badge}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Shimmer keyframe injected once */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(100%) skewX(-20deg); }
        }
      `}</style>
    </section>
  )
}
