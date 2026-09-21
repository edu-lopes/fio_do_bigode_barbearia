import Navbar from './components/layout/Navbar'
import MobileNav from './components/layout/MobileNav'
import Footer from './components/layout/Footer'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'

import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Ribbons from './components/sections/Ribbons'
import About from './components/sections/About'
import Gallery from './components/sections/Gallery'
import Marquee from './components/sections/Marquee'
import Booking from './components/sections/Booking'

import useActiveSection from './hooks/useActiveSection'

const SECTION_IDS = ['inicio', 'servicos', 'sobre', 'galeria', 'agendar', 'contato']

export default function App() {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <>
      <a className="skip-link" href="#servicos">Pular para o conteúdo</a>

      <Navbar activeId={activeId} />

      <main>
        <Hero />
        <Services />
        <Ribbons />
        <About />
        <Gallery />
        <Marquee />
        <Booking />
      </main>

      <Footer />

      <MobileNav activeId={activeId} />
      <FloatingWhatsApp />
    </>
  )
}
