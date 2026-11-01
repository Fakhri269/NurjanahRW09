import './Footer.css'

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer-formal">
      <div className="footer-flag-bar">
        <div className="footer-flag-red" />
        <div className="footer-flag-white" />
      </div>

      <div className="container footer-content">
        <div className="footer-top-grid">
          {/* Kolom 1: Slogan & Identitas */}
          <div className="footer-brand-col">
            <div className="footer-badge-box">
              <span className="footer-badge-num">03</span>
              <div className="footer-badge-text">
                <span className="footer-badge-tag">CALON KETUA RW 09</span>
                <span className="footer-badge-name">IBU NURJANAH</span>
              </div>
            </div>
            <p className="footer-motto">
              "Bersama Membangun, Bersama Menjaga, Bersama Memajukan Lingkungan."
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigasi Halaman</h4>
            <ul className="footer-nav-list">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home') }}>Beranda Spanduk</a></li>
              <li><a href="#visi-misi" onClick={(e) => { e.preventDefault(); scrollTo('#visi-misi') }}>Visi, Misi & Komitmen</a></li>
            </ul>
          </div>

          {/* Kolom 3: Pesan Kebersamaan */}
          <div className="footer-pesan-col">
            <h4 className="footer-col-title">Pesan Warga</h4>
            <p className="footer-pesan-text">
              Perbedaan pilihan adalah hal wajar dalam demokrasi lingkungan. Yang terpenting, tali silaturahmi, gotong royong, dan kerukunan antarwarga tetap nomor satu.
            </p>
            <div className="footer-callout">
              <strong>Mari Bersatu untuk Lingkungan RW 09</strong>
              <span>Satukan suara dan doa restu kita bersama Ibu Nurjanah Nomor Urut 03.</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; 2026 Tim Relawan & Warga Pendukung Ibu Nurjanah (Calon Ketua RW 09 Nomor Urut 03).
          </p>
          <button
            className="footer-btn-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            &#8593; Kembali ke Atas
          </button>
        </div>
      </div>
    </footer>
  )
}
