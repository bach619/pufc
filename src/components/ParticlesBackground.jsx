import { Particles, ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const particlesOptions = {
  fullScreen: false,
  detectRetina: true,
  fpsLimit: 60,
  particles: {
    number: {
      value: 20,
      density: { enable: true, width: 1920, height: 1080 },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 4, max: 8 },
      animation: {
        enable: true,
        speed: 3,
        minimumValue: 2,
        sync: false,
      },
    },
    opacity: {
      value: 0.5,
      animation: {
        enable: true,
        speed: 0.8,
        minimumValue: 0.2,
        sync: false,
      },
    },
    color: {
      value: '#f57c00',
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'bounce' },
    },
    links: {
      enable: true,
      distance: 150,
      color: '#f57c00',
      opacity: 0.15,
      width: 1,
    },
    collisions: {
      enable: false,
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
        distance: 100,
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
          number: { value: 10 },
          size: { value: { min: 3, max: 6 } },
          move: { speed: 0.3 },
          opacity: { value: 0.35 },
          links: { enable: false },
        },
        interactivity: {
          events: { onHover: { enable: false } },
        },
      },
    },
  ],
}

export default function ParticlesBackground() {
  return (
    <ParticlesProvider init={loadSlim}>
      <Particles
        id="tsparticles-bg"
        options={particlesOptions}
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
    </ParticlesProvider>
  )
}
