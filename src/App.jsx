import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import ParticlesBackground from './components/ParticlesBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Coaches from './components/Coaches'
import LegalDocs from './components/LegalDocs'
import Programs from './components/Programs'
import Schedule from './components/Schedule'
import Registration from './components/Registration'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="relative z-10 font-sans text-text-dark min-h-screen">
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Coaches />
          <LegalDocs />
          <Programs />
          <Schedule />
          <Registration />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
