import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Home from './components/Home'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.18, rootMargin: '0px 0px -12% 0px' })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="min-h-screen bg-[#0F172A] selection:bg-blue-500/30">
        <Navbar />
        <main className="container mx-auto">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App