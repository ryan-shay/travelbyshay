import Image from "next/image";
import Reveal from "./reveal";
import Footer, { PHONE_DISPLAY, PHONE_HREF, EMAIL } from "./footer";

// Each photo appears once. Photos are grouped into rows; within a row every
// tile shares one height and its width follows `ratio` (width / height), so
// each row fills the gallery edge to edge. `pos` sets the crop focus.
const rows = [
  [
    { src: "/lake-village.jpg", ratio: 4 / 5, alt: "Lakeside village seen from a boat" },
    { src: "/cabo-beach.jpg", ratio: 4 / 3, alt: "Beach at Montage Los Cabos" },
    { src: "/ritz-paris.jpg", ratio: 4 / 5, alt: "Ritz Paris lobby corridor" },
  ],
  [
    { src: "/alpine-trail.jpg", ratio: 3 / 2, pos: "50% 55%", alt: "Alpine trail past stone huts beneath snowy peaks" },
    { src: "/bay-terrace.jpg", ratio: 4 / 5, pos: "50% 60%", alt: "Terrace overlooking a misty bay at dawn" },
  ],
  [
    { src: "/spa-pool.jpg", ratio: 4 / 5, alt: "Softly lit indoor pool lined with cabanas" },
    { src: "/elephant.jpg", ratio: 1, pos: "50% 55%", alt: "Elephant walking across a green meadow" },
    { src: "/hotel-dubrovnik.jpg", ratio: 4 / 5, alt: "Terrace table overlooking the sea at Hotel Dubrovnik" },
  ],
  [
    { src: "/bulgari-tokyo.jpg", ratio: 4 / 5, pos: "50% 45%", alt: "Tokyo skyline from a guest room at Bulgari Tokyo" },
    { src: "/beach-club.jpg", ratio: 3 / 2, pos: "50% 72%", alt: "Beach club with white umbrellas beside a pool" },
  ],
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
          <p className="card-note rise" style={{ "--d": "0.5s" }}>
            We are currently accepting new clients by referral only.
            <br />
            Thank you for your understanding.
          </p>
          <p className="card-contact rise" style={{ "--d": "0.7s" }}>
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
        <Reveal className="about-byline">
          <div className="about-portrait">
            <Image
              src="/troy-shay.jpg"
              alt="Portrait of Troy Shay"
              width={1280}
              height={1599}
              sizes="96px"
              quality={85}
            />
          </div>
          <div>
            <h2 className="about-name">Troy Shay</h2>
            <p className="about-role">Founder, Troy Shay Travel</p>
          </div>
        </Reveal>
        <Reveal as="p" className="about-lede">
          The best trips happen when someone else is handling everything behind
          the scenes. My team and I book and plan every detail of your trip,
          staying in your corner around the clock so you get to actually enjoy
          the experience instead of researching it.
        </Reveal>
        <Reveal as="p" className="about-text">
          We work with luxury hotels, villas, yacht charters, and private jets
          worldwide, including direct relationships with the
          world’s leading properties like Four Seasons, Aman, Rosewood, and
          beyond. Because we work directly with these hotels, you pay the same
          rate you’d find booking yourself. The hotels compensate us directly, so
          there’s never a markup or a fee to you.
          Years spent traveling and working inside luxury hospitality mean we
          also know the people on property who’ll actually be taking care of you
          while you’re there.
        </Reveal>
        <Reveal as="p" className="about-close">
          Tell us where you want to go. We’ll handle the rest.
        </Reveal>
      </section>

      <section className="gallery" aria-label="Gallery">
        {rows.map((row, r) => (
          <div key={r} className="gallery-row">
            {row.map((p, i) => (
              <Reveal
                as="figure"
                key={p.src}
                className="gallery-item"
                delay={i * 0.08}
                style={{ "--r": p.ratio }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1100px) 640px, 60vw"
                  quality={80}
                  style={{ objectPosition: p.pos || "50% 50%" }}
                />
              </Reveal>
            ))}
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
