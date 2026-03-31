import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Home from './components/Home'

const App = () => {
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