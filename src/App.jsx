import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import BigMarquee from './components/BigMarquee'

export default function App() {
  return (
    <div className="grain relative min-h-screen overflow-x-clip bg-surface">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#1b0c05]"
      >
        Skip to content
      </a>

      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main id="main">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <BigMarquee />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
