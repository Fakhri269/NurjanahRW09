import './Hero.css'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="spanduk-hero" id="home">
      {/* Banner Utama Kampanye RW */}
      <div className="container">
        {/* Kop Atas Spanduk */}
        <div className="spanduk-kop">
          <img
            src="/bismillah.png"
            alt="Bismillahirrahmanirrahim"
            className="spanduk-bismillah-img"
          />
          <p className="spanduk-bismillah-latin">BISMILLAHIRRAHMANIRRAHIM</p>
          <p className="spanduk-kop-sub">MOHON DOA RESTU & DUKUNGAN WARGA</p>
          <h1 className="spanduk-kop-title">
            PEMILIHAN KETUA RUKUN WARGA (RW 09) PERIODE 2026 – 2031
          </h1>
        </div>

        <div className="spanduk-body">
          {/* Sisi Kiri: Informasi Nomor Urut & Ajakan Coblos */}
          <div className="spanduk-info">
            <div className="spanduk-nomor-box">
              <span className="spanduk-nomor-tag">CALON KETUA RW 09 NOMOR URUT</span>
              <div className="spanduk-nomor-angka">03</div>
              <div className="spanduk-coblos-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="20" height="20">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>COBLOS NOMOR 03</span>
              </div>
            </div>

            <p className="spanduk-slogan">
              "Bersama Membangun, Bersama Menjaga, Bersama Memajukan Lingkungan."
            </p>

            <div className="spanduk-semangat-quote">
              <span className="quote-mark">“</span>
              <p className="quote-text">Bukan Sekadar Memimpin, Tetapi Melayani. Bukan Sekadar Berjanji, Tetapi Membuktikan.</p>
            </div>

            <div className="spanduk-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo('visi-misi')}
              >
                Lihat Visi & Misi Kerja
              </button>
            </div>
          </div>

          {/* Sisi Kanan: Kartu Foto Calon Bersahaja */}
          <div className="spanduk-foto-frame">
            <div className="foto-card-wrapper">


              {/* Tampilan Visual Calon Tokoh Masyarakat */}
              <div className="foto-kandidat-container">
                <div className="foto-kandidat-avatar">
                  <img
                    src="/nurjanah.jpg"
                    alt="Foto Resmi Ibu Nurjanah - Calon Ketua RW 09 No. 03"
                    className="foto-kandidat-img"
                  />
                </div>
              </div>

              <div className="foto-card-identitas">
                <h3 className="identitas-nama">IBU NURJANAH</h3>
                <p className="identitas-status">Calon Ketua RW 09</p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
