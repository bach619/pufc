import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import ScrollReveal from './components/ScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Coaches from './components/Coaches'
import LegalDocs from './components/LegalDocs'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import Schedule from './components/Schedule'
import Registration from './components/Registration'
import Contact from './components/Contact'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App({ initialPage }) {
  // On client, read page from data attribute (set by prerender.mjs) to match SSR
  const page = initialPage

  if (page === 'privacy') {
    return <PrivacyPolicy standalone />
  }
  if (page === 'terms') {
    return <TermsOfService standalone />
  }
  if (page === 'cookies') {
    return <CookiePolicy standalone />
  }

  // ── landing page (home) ──
  return (
    <>
      <div className="relative z-10 font-sans text-text-dark min-h-screen">
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <main>
          <Hero />
          <ScrollReveal><About /></ScrollReveal>
          <Stats />
          <ScrollReveal><Coaches /></ScrollReveal>
          <ScrollReveal><LegalDocs /></ScrollReveal>
          <ScrollReveal><Programs /></ScrollReveal>
          <ScrollReveal><Gallery /></ScrollReveal>
          <ScrollReveal><Schedule /></ScrollReveal>
          <ScrollReveal><Registration /></ScrollReveal>
          <ScrollReveal><Contact /></ScrollReveal>
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  )
}
