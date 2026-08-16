import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Process from './sections/Process'
import Portfolio from './sections/Portfolio'
import BeforeAfter from './sections/BeforeAfter'
import WhyWorkWithMe from './sections/WhyWorkWithMe'
import Reviews from './sections/Reviews'
import FiverrCTA from './sections/FiverrCTA'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <BeforeAfter />
        <WhyWorkWithMe />
        <Reviews />
        <FiverrCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
