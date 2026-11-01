import './About.css'

const misiList = [
  {
    nomor: '1',
    judul: 'Meningkatkan Kerukunan dan Kebersamaan',
    desc: 'Membangun persatuan, mempererat silaturahmi, serta menghidupkan kembali semangat gotong royong antarwarga.',
  },
  {
    nomor: '2',
    judul: 'Mewujudkan Lingkungan Aman dan Nyaman',
    desc: 'Meningkatkan keamanan, ketertiban, kebersihan, serta kepedulian terhadap lingkungan.',
  },
  {
    nomor: '3',
    judul: 'Meningkatkan Pelayanan Masyarakat',
    desc: 'Memberikan pelayanan administrasi yang cepat, mudah, ramah, adil, dan transparan.',
  },
  {
    nomor: '4',
    judul: 'Mendorong Kemajuan Generasi Muda',
    desc: 'Membuka ruang kreativitas, kegiatan olahraga, pendidikan, keterampilan, dan pengembangan potensi pemuda.',
  },
  {
    nomor: '5',
    judul: 'Memperkuat Nilai Religius dan Sosial',
    desc: 'Menghidupkan kegiatan keagamaan, meningkatkan kepedulian sosial, serta membangun sikap saling menghormati dan membantu.',
  },
  {
    nomor: '6',
    judul: 'Meningkatkan Pembangunan dan Fasilitas Lingkungan',
    desc: 'Mendorong perbaikan infrastruktur, drainase, penerangan jalan, fasilitas umum, dan sarana pendukung lainnya.',
  },
  {
    nomor: '7',
    judul: 'Mewujudkan Pengelolaan Organisasi yang Amanah',
    desc: 'Mengelola anggaran dan kegiatan RW secara terbuka, bertanggung jawab, partisipatif, dan dapat dipertanggungjawabkan kepada warga.',
  },
]

const nilaiSemangat = [
  { pilar: 'Religius', detail: 'dalam nilai dan tindakan.' },
  { pilar: 'Amanah', detail: 'dalam menjalankan tanggung jawab.' },
  { pilar: 'Guyub', detail: 'dalam membangun kebersamaan.' },
  { pilar: 'Transparan', detail: 'dalam pengelolaan.' },
  { pilar: 'Progresif', detail: 'dalam mewujudkan kemajuan.' },
]

export default function About() {
  return (
    <section className="section profil-section" id="visi-misi">
      <div className="container">
        {/* Header Section */}
        <div className="section-header-center">
          <span className="section-badge-kampanye">ARAH & KOMITMEN KERJA</span>
          <h2 className="section-title-formal">
            Visi, Misi & <span>Semangat Pengabdian</span>
          </h2>
          <p className="section-subtitle-formal">
            Pedoman utama Ibu Nurjanah (Calon Ketua RW 09 Nomor Urut 03) untuk mewujudkan lingkungan yang lebih baik.
          </p>
          <div className="red-divider-center" />
        </div>

        {/* VISI BOX */}
        <div className="visi-banner-official">
          <div className="visi-tag-badge">VISI CALON KETUA RW 09</div>
          <blockquote className="visi-quote">
            “Mewujudkan Lingkungan RW yang Religius, Aman, Rukun, Maju, dan Sejahtera melalui Pelayanan yang Amanah, Transparan, serta Gotong Royong.”
          </blockquote>
        </div>

        {/* 7 MISI KAMPANYE */}
        <div className="misi-wrapper">
          <div className="misi-header">
            <h3 className="misi-section-title">7 MISI UTAMA</h3>
            <span className="misi-subtitle">Langkah Konkret Menuju Perubahan Nyata</span>
          </div>

          <div className="misi-grid">
            {misiList.map((m) => (
              <div key={m.nomor} className="misi-card">
                <div className="misi-card-header">
                  <div className="misi-badge-num">{m.nomor}</div>
                  <h4 className="misi-card-title">{m.judul}</h4>
                </div>
                <p className="misi-card-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEMANGAT DAN KOMITMEN */}
        <div className="komitmen-wrapper">
          <div className="komitmen-header">
            <span className="komitmen-badge">SEMANGAT & KOMITMEN</span>
            <h3 className="komitmen-tagline">
              "Bukan Sekadar Memimpin, Tetapi Melayani.<br />
              Bukan Sekadar Berjanji, Tetapi Membuktikan."
            </h3>
            <p className="komitmen-intro">Dengan semangat tulus mengabdi untuk warga:</p>
          </div>

          <div className="semangat-pilar-grid">
            {nilaiSemangat.map((s, idx) => (
              <div key={idx} className="semangat-pilar-card">
                <span className="pilar-point">&#10003;</span>
                <div className="pilar-content">
                  <strong className="pilar-name">{s.pilar}</strong>
                  <span className="pilar-desc">{s.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SLOGAN KAMPANYE BANNER */}
        <div className="slogan-campaign-banner">
          <span className="slogan-badge-label">SLOGAN KAMPANYE</span>
          <h3 className="slogan-campaign-text">
            "Bersama Membangun, Bersama Menjaga, Bersama Memajukan Lingkungan."
          </h3>
        </div>
      </div>
    </section>
  )
}
