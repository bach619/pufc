import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import LegalDocs from './components/LegalDocs'
import Programs from './components/Programs'
import Schedule from './components/Schedule'
import Registration from './components/Registration'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans bg-[#f9fbf7] text-text-dark min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <LegalDocs />
        <Programs />
        <Schedule />
        <Registration />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
