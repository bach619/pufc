import { useEffect, useRef } from 'react'
import { tsParticles } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

// Module-level flag: engine hanya di-load sekali (bukan per mount)
let engineLoaded = false

async function ensureEngine() {
  if (!engineLoaded) {
    await loadSlim(tsParticles)
    engineLoaded = true
  }
}

export default function ParticlesBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    let instance = null

    const start = async () => {
      await ensureEngine()
      if (cancelled || !containerRef.current) return

      instance = await tsParticles.load({
        id: 'tsparticles-bg',
        options: {
          fullScreen: false,
          detectRetina: true,
          fpsLimit: 60,
          particles: {
            number: {
              value: 20,
              density: { enable: true, width: 1920, height: 1080 },
            },
            shape: {
              type: 'image',
              image: {
                src: '/asset/soccer-ball.svg',
                width: 100,
                height: 100,
              },
            },
            size: {
              value: { min: 28, max: 72 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 20,
                sync: false,
              },
            },
            opacity: {
              value: 0.18,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.08,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: 'none',
              random: true,
              straight: false,
              outModes: { default: 'bounce' },
            },
            rotate: {
              value: { min: 0, max: 360 },
              animation: {
                enable: true,
                speed: 1.2,
                sync: false,
              },
            },
            collisions: {
              enable: true,
              mode: 'bounce',
            },
            wobble: {
              enable: true,
              distance: 8,
              speed: 4,
            },
          },
          interactivity: {
            detectsOn: 'window',
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              repulse: {
                distance: 120,
                duration: 0.4,
                speed: 1,
              },
            },
          },
          background: {
            color: 'transparent',
          },
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: { value: 8 },
                  size: { value: { min: 20, max: 45 } },
                  move: { speed: 0.4 },
                  opacity: { value: 0.12 },
                  rotate: { animation: { speed: 0.8 } },
                  wobble: { enable: false },
                },
                interactivity: {
                  events: {
                    onHover: { enable: false },
                  },
                },
              },
            },
          ],
        },
      })
    }

    start()

    return () => {
      cancelled = true
      if (instance) {
        instance.destroy()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      id="tsparticles-bg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
