const photos = [
  {
    id: 1,
    src: "/cabo-beach.jpg",
    bg: "#c9bfaf",
    caption: "Montage Los Cabos",
    alt: "Montage Los Cabos",
  },
  {
    id: 2,
    src: "/ritz-paris.jpg",
    bg: "#1a1a1a",
    caption: "Ritz Paris",
    alt: "Ritz Paris lobby corridor",
  },
  {
    id: 3,
    src: "/bulgari-tokyo.jpg",
    bg: "#0d1a2a",
    caption: "Bulgari Tokyo",
    alt: "Bulgari Tokyo spa pool at night",
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Luxury Travel Concierge</h1>
        <p className="hero-byline">by Troy Shay</p>
      </section>

      <div className="photo-grid">
        {photos.map((p) => (
          <figure key={p.id} className="photo-item">
            <div className="photo-frame" style={{ background: p.bg }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} />
            </div>
            <figcaption className="photo-caption">{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
