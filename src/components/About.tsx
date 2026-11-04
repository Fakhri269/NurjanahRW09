import { useState, useEffect } from 'react'
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

const dwpSlides = [
  { src: '/dharma-wanita-pdam-1.jpg', caption: 'Bersama Jajaran Pengurus DWP PDAM Tirta Kahuripan Kab. Bogor' },
  { src: '/dharma-wanita-pdam-2.jpg', caption: 'Ibu Nurjanah — Seragam Resmi Dharma Wanita Persatuan' },
  { src: '/dwp-3.jpg', caption: 'Kegiatan Indahnya Ramadhan Dengan Berbagi — PDAM Tirta Kahuripan' },
  { src: '/dwp-4.jpg', caption: 'Penyerahan Santunan Kepada Karyawan — DWP PDAM Tirta Kahuripan' },
  { src: '/dwp-5.jpg', caption: 'Pembukaan Program Cinta Quran DWP PDAM Tirta Kahuripan, Cibinong 2019' },
  { src: '/dwp-6.jpg', caption: 'Kegiatan Resmi Bersama Pengurus DWP PDAM Tirta Kahuripan' },
  { src: '/dwp-7.jpg', caption: 'Santunan Yatim Piatu — Hari Ibu & HUT DWP ke-17, PDAM Tirta Kahuripan' },
  { src: '/dwp-8.jpg', caption: 'Musyawarah Daerah Dharma Wanita Persatuan Kabupaten Bogor, Cibinong 23 Maret 2016' },
  { src: '/dwp-9.jpg', caption: 'Bakti Sosial & Khitanan Massal — HUT Dharma Wanita ke-15 & Hari Ibu, Cibinong 2014' },
  { src: '/dwp-10.jpg', caption: 'Ibu Nurjanah menyampaikan sambutan dalam kegiatan resmi DWP' },
  { src: '/dwp-11.jpg', caption: 'Ibu Nurjanah bersama Panji Dharma Wanita Persatuan — November 2020' },
  { src: '/dwp-12.jpg', caption: 'Sinergitas DWP PDAM Tirta Kahuripan Kab. Bogor ke Kota Solo' },
  { src: '/dwp-13.jpg', caption: 'Rapat Kerja & Koordinasi Bersama Pengurus DWP PDAM Tirta Kahuripan' },
]

const musholaSlides = [
  { src: '/mushola-panaragan-1.jpg', caption: 'Musyawarah & Rapat Panitia Pembangunan Mushola SDN Panaragan 1' },
  { src: '/mushola-panaragan-2.jpg', caption: 'Serah Terima Dokumen & Anggaran Pembangunan Mushola SDN Panaragan 1' },
]

interface SlideItem {
  src: string
  caption: string
}

function PhotoSlideshow({ slides }: { slides: SlideItem[] }) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || slides.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
    }, 2000)
    return () => clearInterval(timer)
  }, [isPaused, slides.length])

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  return (
    <div
      className="dwp-slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="dwp-slide-frame">
        <div className="dwp-slide-img-wrap">
          {slides.map((slide, idx) => (
            <img
              key={idx}
              src={slide.src}
              alt={slide.caption}
              className={`dwp-slide-img${idx === current ? ' is-active' : ''}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <p className="dwp-slide-caption">{slides[current].caption}</p>

      {/* Tombol Navigasi & Dots di Bawah Foto */}
      <div className="dwp-controls-bottom">
        <button className="dwp-btn-bottom" onClick={prev} aria-label="Foto sebelumnya" title="Sebelumnya">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="dwp-slide-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`dwp-dot${idx === current ? ' is-active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Foto ${idx + 1}`}
            />
          ))}
        </div>

        <button className="dwp-btn-bottom" onClick={next} aria-label="Foto berikutnya" title="Berikutnya">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <span className="dwp-slide-counter">{current + 1} / {slides.length}</span>
    </div>
  )
}

export default function About() {
  return (
    <section className="section profil-section" id="visi-misi">
      <div className="container">
        {/* Header Section */}
        <div className="section-header-center reveal-up">
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
        <div className="visi-banner-official reveal-scale delay-1">
          <div className="visi-tag-badge">VISI CALON KETUA RW 09</div>
          <blockquote className="visi-quote">
            “Mewujudkan Lingkungan RW yang Religius, Aman, Rukun, Maju, dan Sejahtera melalui Pelayanan yang Amanah, Transparan, serta Gotong Royong.”
          </blockquote>
        </div>

        {/* 7 MISI KAMPANYE */}
        <div className="misi-wrapper">
          <div className="misi-header reveal-up">
            <h3 className="misi-section-title">7 MISI UTAMA</h3>
            <span className="misi-subtitle">Langkah Konkret Menuju Perubahan Nyata</span>
          </div>

          <div className="misi-grid">
            {misiList.map((m, idx) => (
              <div key={m.nomor} className={`misi-card reveal-up delay-${(idx % 4) + 1}`}>
                <div className="misi-card-header">
                  <div className="misi-badge-num">{m.nomor}</div>
                  <h4 className="misi-card-title">{m.judul}</h4>
                </div>
                <p className="misi-card-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PENGALAMAN KERJA & REKAM JEJAK */}
        <div className="pengalaman-wrapper" id="pengalaman">
          <div className="pengalaman-header reveal-up">
            <span className="pengalaman-badge">REKAM JEJAK & PENGABDIAN</span>
            <h3 className="pengalaman-section-title">PENGALAMAN KERJA & ORGANISASI</h3>
            <span className="pengalaman-subtitle">
              Dedikasi Kepemimpinan Nyata, Integritas, dan Pengabdian Sosial
            </span>
          </div>

          {/* KARTU 1: PENGALAMAN DHARMA WANITA PDAM (18 TAHUN) */}
          <div className="pengalaman-featured-card reveal-scale delay-1">
            <div className="pengalaman-featured-info">
              <div className="featured-badge-row">
                <span className="featured-time-badge">2005 – 2023 (18 TAHUN)</span>
              </div>
              <h4 className="featured-job-title">Ketua Bidang Sosial Budaya</h4>
              <p className="featured-instansi-name">
                Dharma Wanita Persatuan PDAM Tirta Kahuripan Kabupaten Bogor
              </p>
            </div>

            <PhotoSlideshow slides={dwpSlides} />
          </div>

          {/* KARTU 2: KETUA PEMBANGUNAN MUSHOLA SDN PANARAGAN 1 */}
          <div className="pengalaman-featured-card reveal-scale delay-2">
            <div className="pengalaman-featured-info">
              <h4 className="featured-job-title">Ketua Pembangunan Mushola</h4>
              <p className="featured-instansi-name">
                SDN Panaragan 1 Kota Bogor
              </p>
            </div>

            <PhotoSlideshow slides={musholaSlides} />
          </div>
        </div>

        {/* SEMANGAT DAN KOMITMEN */}
        <div className="komitmen-wrapper" id="komitmen">
          <div className="komitmen-header reveal-up">
            <span className="komitmen-badge">SEMANGAT & KOMITMEN</span>
            <h3 className="komitmen-tagline">
              "Bukan Sekadar Memimpin, Tetapi Melayani.<br />
              Bukan Sekadar Berjanji, Tetapi Membuktikan."
            </h3>
            <p className="komitmen-intro">Dengan semangat tulus mengabdi untuk warga:</p>
          </div>

          <div className="semangat-pilar-grid">
            {nilaiSemangat.map((s, idx) => (
              <div key={idx} className={`semangat-pilar-card reveal-up delay-${idx + 1}`}>
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
        <div className="slogan-campaign-banner reveal-scale delay-1">
          <span className="slogan-badge-label">SLOGAN KAMPANYE</span>
          <h3 className="slogan-campaign-text">
            "Bersama Membangun, Bersama Menjaga, Bersama Memajukan Lingkungan."
          </h3>
        </div>
      </div>
    </section>
  )
}
