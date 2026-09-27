import Image from "next/image";
import Reveal from "./reveal";

const PHONE_DISPLAY = "+1 858 449 7335";
const PHONE_HREF = "tel:+18584497335";
const EMAIL = "info@travelbyshay.com";

const photos = [
  {
    src: "/ritz-paris.jpg",
    width: 3024,
    height: 4032,
    caption: "Ritz Paris",
    alt: "Ritz Paris lobby corridor",
  },
  {
    src: "/cabo-beach.jpg",
    width: 4032,
    height: 3024,
    caption: "Montage Los Cabos",
    alt: "Beach at Montage Los Cabos",
  },
  {
    src: "/bulgari-tokyo.jpg",
    width: 4284,
    height: 5712,
    caption: "Bulgari Tokyo",
    alt: "Bulgari Tokyo spa pool at night",
  },
  {
    src: "/cabo-pool.jpg",
    width: 3024,
    height: 4032,
    caption: "Montage Los Cabos",
    alt: "Pool at Montage Los Cabos",
  },
  {
    src: "/troy-shay.jpg",
    width: 4284,
    height: 5712,
    caption: "The Ranch at Rock Creek",
    alt: "Troy Shay at The Ranch at Rock Creek",
  },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className="card" aria-label="Contact card">
        <div className="card-body">
          <h1 className="card-name rise" style={{ "--d": "0.15s" }}>
            Troy Shay
          </h1>
          <p className="card-title rise" style={{ "--d": "0.35s" }}>
            Luxury Travel Concierge
          </p>

          <span className="card-rule rise" style={{ "--d": "0.55s" }} aria-hidden="true" />

          <div className="card-links">
            <a className="card-link rise" style={{ "--d": "0.7s" }} href={PHONE_HREF}>
              <PhoneIcon />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a className="card-link rise" style={{ "--d": "0.85s" }} href={`mailto:${EMAIL}`}>
              <MailIcon />
              <span>{EMAIL}</span>
            </a>
          </div>
        </div>

        <a className="learn-more rise" style={{ "--d": "1.3s" }} href="#about">
          <span>Learn more</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </section>

      <section id="about" className="about">
        <Reveal as="p" className="eyebrow">
          About
        </Reveal>
        <Reveal as="p" className="about-lede">
          Years spent traveling the world and working inside luxury hospitality
          taught me what separates a good hotel from one that stays with you.
        </Reveal>
        <Reveal as="p" className="about-text">
          I plan hotels, villas, yacht charters, private flights and ground
          transportation across Four Seasons, Rosewood, Aman, Belmond,
          Ritz-Carlton, Park Hyatt and beyond. You get the same rate as booking
          direct, plus breakfast, hotel credits, upgrades and flexible check-in
          and check-out, at no extra cost. You work with me directly, from the
          first message to the flight home.
        </Reveal>
      </section>

      <section className="gallery" aria-label="Gallery">
        {photos.map((p, i) => (
          <Reveal as="figure" key={p.src} className="gallery-item" delay={(i % 2) * 0.08}>
            <div className="gallery-frame">
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width: 900px) 440px, (min-width: 600px) 45vw, 92vw"
                quality={80}
              />
            </div>
            <figcaption>{p.caption}</figcaption>
          </Reveal>
        ))}
      </section>

      <footer className="footer">
        <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
        <span aria-hidden="true">·</span>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <p>© {new Date().getFullYear()} Troy Shay</p>
      </footer>
    </main>
  );
}
