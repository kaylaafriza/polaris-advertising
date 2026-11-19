
import "./artikel.css";

const artikelData = [
  {
    kategori: "Tips Cetak",
    gambar: "/images/artikel-banner.jpg",
    tanggal: "18 Juni 2026",
    waktu: "5 menit baca",
    judul: "7 Tips Memilih Bahan Banner yang Awet untuk Acara Outdoor",
    deskripsi:
      "Mau bikin banner untuk event sekolah, kampanye, atau promosi UMKM di Kepanjen? Pelajari perbedaan bahan dan tips supaya banner tahan panas dan hujan.",
    keyword: "Tips Cetak Banner Awet",
  },
  {
    kategori: "Mahasiswa",
    gambar: "/images/artikel-skripsi.jpg",
    tanggal: "10 Juni 2026",
    waktu: "7 menit baca",
    judul: "Panduan Lengkap Cetak Skripsi & Hardcover di Kepanjen, Malang",
    deskripsi:
      "Dari format margin, jenis kertas HVS 80gr vs 100gr, sampai pilihan jilid hardcover dan softcover. Panduan praktis untuk mahasiswa.",
    keyword: "Cetak Skripsi Murah Kepanjen",
  },
  {
    kategori: "Sablon Kaos",
    gambar: "/images/artikel-sablon.jpg",
    tanggal: "1 Juni 2026",
    waktu: "6 menit baca",
    judul: "Sablon DTF vs Sablon Manual: Mana yang Cocok Buat Kaos Komunitas?",
    deskripsi:
      "Bingung pilih teknik sablon untuk seragam kelas, kaos organisasi kampus, atau merchandise instansi? Kenali perbedaan teknik sablon DTF dan manual.",
    keyword: "Sablon DTF Malang",
  },
];

export default function ArtikelPage() {
  return (
    <main className="artikel-page">
      <section className="artikel-header">
        <span className="artikel-label">Blog & Artikel</span>

        <h1>
          Tips & Inspirasi{" "}
          <span>Dunia Cetak Digital</span>
        </h1>

        <p>
          Baca artikel pilihan dari tim Polaris Advertising
          biar hasil cetakmu makin maksimal dan hemat budget.
        </p>
      </section>

      <section className="artikel-container">
        <div className="artikel-grid">
          {artikelData.map((artikel, index) => (
            <article className="artikel-card" key={index}>
              <div className="artikel-image">
                <img src={artikel.gambar} alt={artikel.judul} />
                <span className="artikel-kategori">
                  {artikel.kategori}
                </span>
              </div>

              <div className="artikel-content">
                <div className="artikel-meta">
                  <span>📅 {artikel.tanggal}</span>
                  <span>◷ {artikel.waktu}</span>
                </div>

                <h2>{artikel.judul}</h2>

                <p className="artikel-deskripsi">
                  {artikel.deskripsi}
                </p>

                <p className="artikel-keyword">
                  ▫ <strong>Keyword:</strong> {artikel.keyword}
                </p>

                
<a
  href={`https://wa.me/6282228584139?text=${encodeURIComponent(
    `Halo Polaris Advertising, saya tertarik dengan artikel "${artikel.judul}". Saya ingin bertanya lebih lanjut mengenai layanan percetakan tersebut.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  Baca Selengkapnya →
</a>

              </div>
            </article>
          ))}
        </div>
      </section>

      <a href="/" className="artikel-back">
        ← Kembali ke Beranda
      </a>

      <a href="#" className="artikel-top" aria-label="Kembali ke atas">
        ↑
      </a>
    </main>
  );
}
