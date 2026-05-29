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
      try {
        await ensureEngine()
      } catch (err) {
        console.error('[Particles] Gagal load engine:', err)
        return
      }

      if (cancelled || !containerRef.current) return

      try {
        instance = await tsParticles.load({
          id: 'tsparticles-bg',
          options: {
            fullScreen: false,
            detectRetina: true,
            fpsLimit: 60,
            particles: {
              number: {
                value: 18,
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
                value: { min: 32, max: 64 },
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 24,
                  sync: false,
                },
              },
              opacity: {
                value: 0.35,
                animation: {
                  enable: true,
                  speed: 0.6,
                  minimumValue: 0.18,
                  sync: false,
                },
              },
              color: {
                value: '#f57c00',
                animation: {
                  enable: true,
                  speed: 20,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: 'none',
                random: true,
                straight: false,
                outModes: { default: 'bounce' },
              },
              rotate: {
                value: { min: 0, max: 360 },
                animation: {
                  enable: true,
                  speed: 1.0,
                  sync: false,
                },
              },
              collisions: {
                enable: true,
                mode: 'bounce',
              },
              wobble: {
                enable: true,
                distance: 6,
                speed: 3,
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
                    size: { value: { min: 22, max: 42 } },
                    move: { speed: 0.35 },
                    opacity: { value: 0.25 },
                    color: { animation: { enable: false } },
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
        if (process.env.NODE_ENV === 'development') {
          console.log('[Particles] Container loaded:', instance?.id?.description)
        }
      } catch (err) {
        console.error('[Particles] Gagal load partikel:', err)
      }
    }

    start()

    return () => {
      cancelled = true
      if (instance) {
        try {
          instance.destroy()
        } catch (err) {
          // ignore cleanup errors
        }
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
