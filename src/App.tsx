import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import './App.css'

function App() {
  const { scrollProgress, showBackToTop, scrollToTop } = useScrollAnimation()

  return (
    <>
      {/* Smooth Scroll Progress Indicator */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <Navbar />

      <main>
        <Hero />
        <About />
      </main>

      <Footer />

      {/* Floating Smooth Back to Top Button */}
      <button
        className={`btn-float-top ${showBackToTop ? 'is-active' : ''}`}
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        title="Kembali ke atas"
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  )
}

export default App

