import { useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Visi, Misi & Komitmen', href: '#visi-misi' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="navbar-formal">
      {/* Pita Merah Putih di bagian paling atas */}
      <div className="navbar-flag-bar">
        <div className="navbar-flag-red" />
        <div className="navbar-flag-white" />
      </div>

      <div className="container navbar-inner">
        {/* Brand / Logo Kampanye */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
        >
          <div className="navbar-badge-number">03</div>
          <div className="navbar-brand-text">
            <span className="navbar-candidate-title">CALON KETUA RW 09</span>
            <span className="navbar-candidate-name">IBU NURJANAH</span>
          </div>
        </a>

        {/* Menu Navigasi */}
        <nav className={`navbar-links ${menuOpen ? 'navbar-links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link-item"
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Tombol Hamburger HP */}
        <button
          className={`navbar-hamburger ${menuOpen ? 'navbar-hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Buka menu"
          id="hamburger-btn"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
