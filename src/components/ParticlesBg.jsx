import { useEffect, useRef } from 'react'

export default function ParticlesBg({ id = 'hero-particles' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animId = null
    let particles = []
    let mouse = { x: null, y: null, radius: 120 }

    // ---- config ----
    const COUNT = 65
    const COLORS = ['rgba(255,255,255,0.8)', 'rgba(255,217,102,0.6)', 'rgba(255,255,255,0.5)']
    const CONNECT_DIST = 130

    function resize() {
      const parent = canvas.parentElement
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
    }

    function createParticles() {
      const arr = []
      for (let i = 0; i < COUNT; i++) {
        arr.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          r: Math.random() * 2.5 + 1.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: Math.random() * 0.5 + 0.3,
        })
      }
      return arr
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // move
        p.x += p.vx
        p.y += p.vy

        // wrap edges
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
        if (p.y < -10) p.y = canvas.height + 10
        if (p.y > canvas.height + 10) p.y = -10

        // mouse interaction
        if (mouse.x !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius
            const angle = Math.atan2(dy, dx)
            p.x -= Math.cos(angle) * force * 2
            p.y -= Math.sin(angle) * force * 2
          }
        }

        // draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()

        // connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - dist / CONNECT_DIST)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }

    // ---- init ----
    resize()
    particles = createParticles()

    window.addEventListener('resize', () => {
      resize()
      particles = createParticles()
    })

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    })

    window.addEventListener('mouseleave', () => {
      mouse.x = null
      mouse.y = null
    })

    draw()

    return () => {
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
