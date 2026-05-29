import { useState, useEffect, useRef } from 'react'

const stats = [
  { icon: 'fa-trophy', value: 50, suffix: '+', label: 'Medali', sub: 'Tingkat Provinsi & Nasional' },
  { icon: 'fa-users', value: 200, suffix: '+', label: 'Siswa', sub: 'Pemain Muda Binaan' },
  { icon: 'fa-chalkboard-user', value: 7, suffix: '', label: 'Pelatih', sub: 'Berpengalaman & Profesional' },
  { icon: 'fa-layer-group', value: 3, suffix: '', label: 'Program', sub: 'Kelompok Usia 6-17 Tahun' },
]

function CountUp({ target, suffix, visible }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) return
    let current = 0
    const step = Math.ceil(target / 40)
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [visible, target])

  return (
    <span className="text-4xl sm:text-5xl font-extrabold text-white tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-gradient-to-r from-red-dark via-red-primary to-red-dark py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <i className={`fas ${s.icon} text-2xl text-[#ffd966]`}></i>
              </div>
              <CountUp target={s.value} suffix={s.suffix} visible={visible} />
              <p className="text-white/90 font-bold text-sm mt-1 uppercase tracking-wider">{s.label}</p>
              <p className="text-white/60 text-xs mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
