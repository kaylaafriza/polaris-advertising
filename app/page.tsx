
import GoogleReviews from "./components/GoogleReviews";

const layanan = [
  {
    title: "Banner & Spanduk",
    description:
      "Cetak banner, spanduk, dan MMT untuk acara sekolah, instansi, maupun promosi usaha.",
    image: "/images/banner.png",
  },
  {
    title: "Stiker Custom",
    description:
      "Cetak stiker vinyl, transparan, dan die-cut untuk kebutuhan branding produk.",
    image: "/images/stiker.jpg",
  },
  {
    title: "Kartu Nama",
    description:
      "Cetak kartu nama berkualitas dengan desain menarik dan profesional.",
    image: "/images/kartu-nama.jpg",
  },
  {
    title: "Sablon DTF",
    description:
      "Cetak sablon kaos dengan warna tajam dan hasil berkualitas.",
    image: "/images/sablon-dtf.jpg",
  },
  {
    title: "Brosur & Flyer",
    description:
      "Cetak brosur dan flyer untuk promosi usaha, event, maupun kegiatan.",
    image: "/images/brosur.jpg",
  },
  {
    title: "ID Card & Name Tag",
    description:
      "Cetak ID card karyawan, kartu pelajar, dan name tag.",
    image: "/images/id-card.jpg",
  },
  {
    title: "Cetak Dokumen",
    description:
      "Layanan cetak tugas, laporan, proposal, dan berbagai dokumen.",
    image: "/images/dokumen.jpg",
  },
  {
    title: "Cetak Art Paper A3",
    description:
      "Cetak art paper untuk kebutuhan poster, desain, dan media promosi.",
    image: "/images/art-paper.jpg",
  },
];


const portfolio = [
  {
    title: "Banner Promosi",
    category: "Advertising",
    image: "/images/portofolio-benner.png",
  },
  {
    title: "Desain Branding",
    category: "Desain Grafis",
    image: "/images/portofolio-setiker.png",
  },
  {
    title: "Media Promosi",
    category: "Digital Printing",
    image: "/images/portofolio-media.png",
  },
];



export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <span>POLARIS</span>
            <small>ADVERTISING</small>
          </div>

          
        <div className="nav-menu">
          <a href="#home">Beranda</a>
          <a href="#layanan">Layanan</a>
          <a href="#portfolio">Portofolio</a>
          <a href="#tentang">Tentang</a>
          <a href="/artikel">Artikel</a>
          <a href="#kontak">Kontak</a>
        </div>


          <a href="#kontak" className="nav-button">
            Konsultasi
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-label">
              POLARIS ADVERTISING KEPANJEN
            </p>

            <h1>
              Solusi Cetak
              <br />
              Terpercaya <span>di Kepanjen</span>
            </h1>

            <p className="hero-description">
              Dari tugas sekolah, skripsi, kartu nama, banner, sampai stiker
              custom — semua bisa dicetak cepat, tajam, dan harga ramah kantong! 🎯
            </p>

            <div className="hero-buttons">
              <a href="#layanan" className="button-primary">
                Lihat Layanan →
              </a>

              <a href="#portfolio" className="button-secondary">
                Lihat Portofolio
              </a>
            </div>
          </div>
          

          {/* GAMBAR HERO */}
          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img
                src="/images/mesin-print.png"
                alt="Mesin Cetak Banner dan Stiker"
                className="hero-image"
              />
            </div>

            {/* ORNAMEN HIJAU */}
            <div className="hero-green-accent"></div>

            {/* ORNAMEN TITIK */}
            <div className="hero-dots hero-dots-top"></div>
            <div className="hero-dots hero-dots-bottom"></div>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <GoogleReviews />

      {/* TENTANG KAMI */}
      <section id="tentang" className="about-section">
        <div className="container">
          <div className="about-heading">
            <span className="about-badge">Tentang Kami</span>

            <h2>
              Melayani Semua{" "}
              <span>Kebutuhan Cetak</span>
            </h2>

            <p>
              Polaris Advertising hadir di Kepanjen, Malang untuk membantu
              berbagai kebutuhan percetakan dan media promosi. Mulai dari
              pelajar, mahasiswa, perusahaan, hingga pelaku UMKM dengan
              layanan cetak yang cepat, terjangkau, dan berkualitas.
            </p>
          </div>

          <div className="about-card-grid">
            <div className="about-card">
              <div className="about-icon">🎓</div>
              <h3>Pelajar & Mahasiswa</h3>
              <p>
                Cetak tugas, makalah, skripsi, poster, dan kartu pelajar
                dengan hasil cetak yang rapi dan berkualitas.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">💼</div>
              <h3>Karyawan & Profesional</h3>
              <p>
                Kartu nama, proposal, presentasi, brosur, dan berbagai
                kebutuhan dokumen kantor.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">🏢</div>
              <h3>Instansi & Perusahaan</h3>
              <p>
                Banner kegiatan, ID card, spanduk, poster, dan kebutuhan
                media promosi perusahaan.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">🏪</div>
              <h3>Pelaku UMKM</h3>
              <p>
                Stiker produk, brosur promosi, packaging, dan branding
                untuk membantu memperkenalkan usaha Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="layanan-section">
        <div className="layanan-container">
          {/* JUDUL LAYANAN */}
          <div className="layanan-header">
            <span className="layanan-label">
              Katalog Layanan
            </span>

            <h2>
              Apa yang Bisa Kami{" "}
              <span>Cetak Buat Kamu?</span>
            </h2>

            <p>
              Semua kebutuhan cetak digital ada di sini.
              Kualitas terbaik, harga bersahabat, dan
              proses pengerjaan yang cepat!
            </p>
          </div>

          {/* DAFTAR LAYANAN */}
          <div className="layanan-grid">
            {layanan.map((item) => (
              <div className="layanan-card" key={item.title}>
                <div className="layanan-image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="layanan-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <a
                    href={`https://wa.me/6282228584139?text=${encodeURIComponent(
                      `Halo Polaris Advertising, saya ingin memesan layanan ${item.title}. Mohon informasi lebih lanjut.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="layanan-order"
                  >
                    💬 Order Sekarang →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* ALASAN MEMILIH KAMI */}
<section className="alasan-section">
  <div className="container">

    {/* JUDUL SECTION */}
    <div className="alasan-header">
      <span className="alasan-badge">
        Kenapa Polaris Advertising?
      </span>

      <h2>
        Alasan Pelanggan <span>Pilih Kami</span>
      </h2>
    </div>

    {/* DAFTAR KEUNGGULAN */}
    <div className="alasan-grid">

      <div className="alasan-card">
        <div className="alasan-icon">⚡</div>
        <h3>Cetak Super Cepat</h3>
        <p>
          Proses pengerjaan cepat dan efisien.
          Tidak perlu menunggu terlalu lama untuk
          mendapatkan hasil cetakan.
        </p>
      </div>

      <div className="alasan-card">
        <div className="alasan-icon">🛡️</div>
        <h3>Kualitas Tajam</h3>
        <p>
          Mengutamakan kualitas hasil cetak dengan
          warna yang jelas, tajam, dan sesuai
          kebutuhan pelanggan.
        </p>
      </div>

      <div className="alasan-card">
        <div className="alasan-icon">🕒</div>
        <h3>Pelayanan Fleksibel</h3>
        <p>
          Siap membantu berbagai kebutuhan
          percetakan dengan pelayanan yang ramah
          dan responsif.
        </p>
      </div>

      <div className="alasan-card">
        <div className="alasan-icon">😊</div>
        <h3>Harga Bersahabat</h3>
        <p>
          Menawarkan harga yang terjangkau untuk
          pelajar, mahasiswa, UMKM, maupun
          kebutuhan perusahaan.
        </p>
      </div>

      <div className="alasan-card">
        <div className="alasan-icon">🎨</div>
        <h3>Bantuan Desain</h3>
        <p>
          Membantu pelanggan dalam menyiapkan
          desain agar hasil cetakan terlihat
          lebih menarik dan profesional.
        </p>
      </div>

      <div className="alasan-card">
        <div className="alasan-icon">🚚</div>
        <h3>Layanan Pengantaran</h3>
        <p>
          Konsultasikan kebutuhan pengantaran
          pesanan agar pelanggan mendapatkan
          layanan yang lebih mudah.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* PORTFOLIO */}
<section id="portfolio" className="portfolio">
  <div className="container">
    <div className="section-heading">
      <div>
        <p className="section-label">PORTOFOLIO</p>

        <h2>
          Hasil Karya
          <br />
          <span>Polaris Advertising</span>
        </h2>
      </div>

      <p>
        
        Beberapa contoh media promosi dan desain yang dapat kami kerjakan
        untuk kebutuhan bisnis Anda.
      </p>
    </div>

    <div className="portfolio-grid">
      {portfolio.map((item, index) => (
        <div className="portfolio-card" key={item.title}>
          <div className={`portfolio-image image-${index + 1}`}>

            {/* TAMBAHKAN GAMBAR DI SINI */}
            <img
              src={item.image}
              alt={item.title}
              className="portfolio-img"
            />

            <div className="portfolio-number">
              0{index + 1}
            </div>
          </div>

          <div className="portfolio-info">
            <p>{item.category}</p>
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
{/* TESTIMONI */}
<section className="testimoni-section">
  <div className="container">

    {/* HEADER */}
    <div className="testimoni-header">
      <span className="testimoni-badge">
        Testimoni Pelanggan
      </span>

      <h2>
        Apa Kata <span>Pelanggan Kami?</span>
      </h2>

      <p>
        Pengalaman pelanggan menggunakan layanan Polaris Advertising.
      </p>
    </div>

    {/* DAFTAR TESTIMONI */}
    <div className="testimoni-grid">

      <article className="testimoni-card">
        <div className="testimoni-stars">★★★★★</div>

        <p className="testimoni-text">
          Mengenai DTF bagus. Kalau ada masalah selalu
          dikonfirmasi. Sejauh ini selalu aman. Sukses
          selalu. DTF-nya selalu bagus tidak burik,
          pelayanannya juga bagus.
        </p>

        <div className="testimoni-profile">
          <h3>Nadhirhotul ChasanahArif</h3>
          <span>Pelanggan Polaris</span>
        </div>
      </article>

      <article className="testimoni-card">
        <div className="testimoni-stars">★★★★★</div>

        <p className="testimoni-text">
          Sesuai request.
        </p>

        <div className="testimoni-profile">
          <h3>Khutfiatul Angel</h3>
          <span>Local Guide</span>
        </div>
      </article>

      <article className="testimoni-card">
        <div className="testimoni-stars">★★★★★</div>

        <p className="testimoni-text">
          Pelayanan ramah, proses cepat, hasil baguss.
        </p>

        <div className="testimoni-profile">
          <h3>Sandy Ayu</h3>
          <span>Pelanggan Polaris</span>
        </div>
      </article>

      <article className="testimoni-card">
        <div className="testimoni-stars">★★★★★</div>

        <p className="testimoni-text">
          Pelayanan sangat memuaskan 🥰🥰 ...
        </p>

        <div className="testimoni-profile">
          <h3>Dian Christina</h3>
          <span>Pelanggan Polaris</span>
        </div>
      </article>

      <article className="testimoni-card">
        <div className="testimoni-stars">★★★★★</div>

        <p className="testimoni-text">
          Asli nyetak disini bagus banget kualitasnya
          brokk asli dah.
        </p>

        <div className="testimoni-profile">
          <h3>Heksa io</h3>
          <span>Pelanggan Polaris</span>
        </div>
      </article>

    </div>

    <div className="testimoni-footer">
      <p>Ulasan pelanggan berdasarkan Google Maps.</p>
    </div>

  </div>
</section>

    
{/* CTA */}
<section className="cta-section" id="kontak">
  <div className="cta-decoration cta-decoration-one"></div>
  <div className="cta-decoration cta-decoration-two"></div>

  <div className="cta-content">
    <span className="cta-label">SIAP MEMULAI?</span>

    <h2>
      Buat Promosi Bisnis
      <br />
      Anda Lebih Menarik.
    </h2>

    <p>
      Wujudkan kebutuhan desain dan cetak promosi bisnis Anda
      bersama Polaris Advertising.
    </p>

    <div className="cta-services">
      <span>Desain Kreatif</span>
      <span>Digital Printing</span>
      <span>Media Promosi</span>
    </div>

    <a
      href="https://wa.me/6282228584139?text=Halo%20Polaris%20Advertising,%20saya%20ingin%20bertanya%20tentang%20layanan%20percetakan."
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button"
    >
      <span>Hubungi Kami</span>
      <span>→</span>
    </a>
  </div>
</section>

{/* Lokasi Kami */}
<section className="lokasi-section" id="lokasi">
  <div className="container">

    <div className="lokasi-header">
      <span className="lokasi-label">Lokasi Kami</span>

      <h2>
        Kunjungi <span>Polaris Advertising Kepanjen</span>
      </h2>

      <p>
        Temukan lokasi kami dan kunjungi Polaris Advertising
        untuk mendapatkan berbagai kebutuhan desain dan media promosi.
      </p>
    </div>

    <div className="lokasi-map">
      <iframe
  src="https://www.google.com/maps?q=Polaris+Advertising+Kepanjen&output=embed"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Lokasi Polaris Advertising Kepanjen"
></iframe>
    </div>

    <div className="lokasi-button">
      <a
        href="https://www.google.com/maps/search/?api=1&query=Polaris+Advertising+Kepanjen"
        target="_blank"
        rel="noopener noreferrer"
      >
        📍 Buka di Google Maps
      </a>
    </div>

  </div>
</section>


{/* FOOTER */}
<footer className="footer">
  <div className="footer-container">

    {/* BRAND */}
    <div className="footer-brand">
      <h2>POLARIS<span>.</span></h2>
      <h4>ADVERTISING</h4>

      <p>
        Polaris Advertising | Digital Printing Kepanjen.
        Membantu UMKM, pelajar, perusahaan, dan instansi
        dengan solusi percetakan kreatif serta media promosi
        berkualitas.
      </p>
    </div>

    {/* KONTAK */}
    <div className="footer-column">
      <h3>Kontak Kami</h3>

      <ul>
        <li>
          <a href="https://wa.me/6282228584139">
            0822-2858-4139 (WhatsApp)
          </a>
        </li>

        <li>
          JL Sidomoro NO.17 E Kepanjen, Kabupaten Malang,
          Jawa Timur
        </li>

        <li>
          Digital Printing & Advertising
        </li>

        <li>
          Instagram Polaris Advertising
        </li>
      </ul>
    </div>

    {/* LAYANAN */}
    <div className="footer-column">
      <h3>Layanan Populer</h3>

      <ul>
        <li>Banner & Spanduk</li>
        <li>Stiker Custom</li>
        <li>Kartu Nama</li>
        <li>Sablon DTF</li>
        <li>Cetak Dokumen</li>
        <li>ID Card & Name Tag</li>
        <li>Brosur & Flyer</li>
      </ul>
    </div>

    {/* TAUTAN */}
    <div className="footer-column">
      <h3>Tautan Cepat</h3>

      <ul>
        <li><a href="#home">Beranda</a></li>
        <li><a href="#tentang">Tentang Kami</a></li>
        <li><a href="#layanan">Layanan</a></li>
        <li><a href="#portfolio">Portofolio</a></li>
        <li><a href="#artikel">Artikel</a></li>
        <li><a href="#kontak">Kontak</a></li>
      </ul>
    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="footer-bottom">
    <p>
      © 2026 <strong>Polaris Advertising.</strong>
      All rights reserved.
    </p>

    <p>
      Bersama <strong>Polaris</strong>, Wujudkan Promosi
      Terbaik untuk Bisnis Anda.
    </p>
  </div>
</footer>

</main>
);
}