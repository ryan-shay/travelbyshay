import Image from "next/image";
import Reveal from "./reveal";

const PHONE_DISPLAY = "+1 858 449 0335";
const PHONE_HREF = "tel:+18584490335";
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
];

export default function Home() {
  return (
    <main>
      <section className="card" aria-label="Contact card">
        <div className="card-body">
          <h1 className="card-name rise" style={{ "--d": "0.2s" }}>
            Troy Shay
          </h1>
          <p className="card-title rise" style={{ "--d": "0.4s" }}>
            Luxury Travel Concierge
          </p>
          <p className="card-contact rise" style={{ "--d": "0.65s" }}>
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>

        <a className="learn-more rise" style={{ "--d": "1.3s" }} href="#about">
          <span>Learn more</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </section>

      <section id="about" className="about">
        <Reveal as="h2" className="about-name">
          Troy Shay
        </Reveal>
        <Reveal as="p" className="about-role">
          Founder, Troy Shay Travel
        </Reveal>
        <Reveal as="p" className="about-lede">
          The best trips happen when someone else is handling everything behind
          the scenes. My team and I book and plan every detail of your trip,
          staying in your corner around the clock so you get to actually enjoy
          the experience instead of researching it.
        </Reveal>
        <Reveal as="p" className="about-text">
          We work with luxury hotels, villas, yacht charters, private jets, and
          private security worldwide, including direct relationships with the
          world’s leading properties like Four Seasons, Aman, Rosewood, and
          beyond. Because we work directly with these hotels, you get the same
          rates you’d find booking yourself, with nothing additional to use us.
          Years spent traveling and working inside luxury hospitality mean we
          also know the people on property who’ll actually be taking care of you
          while you’re there.
        </Reveal>
        <Reveal as="p" className="about-close">
          Tell us where you want to go. We’ll handle the rest.
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
        <p className="footer-credentials">
          <span>Virtuoso Member</span>
          <span>Independent Affiliate of Fora</span>
        </p>
        <p>© {new Date().getFullYear()} Troy Shay</p>
      </footer>
    </main>
  );
}
