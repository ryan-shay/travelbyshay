import Image from "next/image";
import Reveal from "./reveal";
import Footer, { PHONE_DISPLAY, PHONE_HREF, EMAIL } from "./footer";

const sources = {
  ritz: { src: "/ritz-paris.jpg", alt: "Ritz Paris lobby corridor" },
  cabo: { src: "/cabo-beach.jpg", alt: "Beach at Montage Los Cabos" },
  bulgari: { src: "/bulgari-tokyo.jpg", alt: "Bulgari Tokyo spa pool at night" },
  dubrovnik: {
    src: "/hotel-dubrovnik.jpg",
    alt: "Terrace table overlooking the sea at Hotel Dubrovnik",
  },
};

// Each tile is cropped to `ratio` (width / height); `pos` sets the crop focus.
// Rows share a height, so the mix of ratios gives the loose, editorial rhythm.
const photos = [
  { img: "cabo", ratio: 4 / 3 },
  { img: "ritz", ratio: 3 / 4 },
  { img: "bulgari", ratio: 1, pos: "50% 60%" },
  { img: "dubrovnik", ratio: 3 / 4 },
  { img: "cabo", ratio: 16 / 9, pos: "50% 70%" },
  { img: "ritz", ratio: 1, pos: "50% 45%" },
  { img: "bulgari", ratio: 3 / 4 },
  { img: "dubrovnik", ratio: 3 / 2, pos: "50% 35%" },
  { img: "ritz", ratio: 4 / 5 },
  { img: "cabo", ratio: 1, pos: "40% 50%" },
  { img: "bulgari", ratio: 7 / 5, pos: "50% 55%" },
  { img: "dubrovnik", ratio: 4 / 5 },
  { img: "cabo", ratio: 4 / 5, pos: "60% 50%" },
  { img: "ritz", ratio: 4 / 3, pos: "50% 55%" },
  { img: "bulgari", ratio: 4 / 5 },
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
        {photos.map((p, i) => {
          const { src, alt } = sources[p.img];
          return (
            <Reveal
              as="figure"
              key={i}
              className="gallery-item"
              delay={(i % 4) * 0.06}
              style={{ "--r": p.ratio }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 900px) 300px, 40vw"
                quality={75}
                style={{ objectPosition: p.pos || "50% 50%" }}
              />
            </Reveal>
          );
        })}
      </section>

      <Footer />
    </main>
  );
}
