import Image from "next/image";
import Link from "next/link";
import Footer, { PHONE_DISPLAY, PHONE_HREF, EMAIL, SITE } from "../footer";
import PrintButton from "./print-button";

export const metadata = {
  title: "An Invitation — Troy Shay Travel",
  description:
    "An invitation to partner with Troy Shay Travel, a luxury travel concierge working by referral only.",
};

const clientGroups = [
  [
    "Families and family offices",
    "Milestone journeys, multigenerational gatherings and the details that surround them.",
  ],
  [
    "Corporate and executive clients",
    "Senior leaders and their teams, for whom time and discretion matter above all.",
  ],
];

const programs = [
  "Aman Travel Advisor Program",
  "Belmond Bellini Club",
  "Dorchester Diamond Club",
  "Four Seasons Preferred Partner (FSPP)",
  "Hilton for Luxury (Waldorf Astoria, LXR, Conrad)",
  "Hyatt Privé (Park Hyatt, Andaz, Alila, Thompson)",
  "Mandarin Oriental Fan Club",
  "Marriott STARS & Luminous (Ritz-Carlton, St. Regis, Bulgari, W Hotels)",
  "Oetker Collection Pearl Partner",
  "Peninsula PenClub",
  "Rocco Forte Knights",
  "Rosewood Elite",
];

const perks = [
  [
    "With every booking",
    [
      "Complimentary daily breakfast",
      "$100 hotel credit",
      "Room upgrade, subject to availability",
      "Early check-in and late check-out",
    ],
  ],
  [
    "At many properties",
    [
      "Third or fourth night complimentary",
      "Complimentary transfers",
      "Spa treatments",
    ],
  ],
];

const referrerBenefits = [
  [
    "A gesture that reflects well on you.",
    "A thoughtful, memorable gift or introduction that clients associate with your name.",
  ],
  [
    "Nothing asked of you.",
    "An introduction is all that is required. We handle everything from there, and your client never has to chase anyone.",
  ],
  [
    "Complete discretion.",
    "We never contact anyone without an introduction, and we never share who introduced whom.",
  ],
];

const process = [
  ["Introduction", "You introduce a client, or present our offer at the moment that suits you."],
  ["A personal first conversation", "Troy speaks with the client directly, at their convenience, to understand how they like to travel."],
  ["Planning and booking", "We arrange every detail, from hotels and villas to yachts, jets and ground logistics, with nothing for you or the client to manage."],
  ["During the stay", "We remain available to the client every step of the way, day or night, for any adjustment or request."],
  ["Afterward", "We follow up on the experience and keep you informed."],
];

export default function Partnerships() {
  const year = new Date().getFullYear();

  return (
    <main className="doc-page">
      <nav className="doc-toolbar" aria-label="Document actions">
        <Link href="/" className="doc-back">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 6-6 6 6 6" />
          </svg>
          <span>Back to site</span>
        </Link>
        <PrintButton />
      </nav>

      {/* Each sheet is one printed page, so the site and the PDF break in the same places. */}
      <article className="doc">
        <div className="doc-sheet doc-sheet-cover">
          {/* Cover */}
          <header className="doc-cover">
            <p className="doc-mark">Troy Shay Travel</p>
            <p className="doc-kicker">By Introduction</p>
            <h1 className="doc-title">An Invitation</h1>
            <p className="doc-sub">A relationship for the few we choose to build</p>
            <dl className="doc-meta">
              <div>
                <dt>Prepared by</dt>
                <dd>Troy Shay, Founder</dd>
              </div>
              <div>
                <dt>Edition</dt>
                <dd>{year}</dd>
              </div>
              <div>
                <dt>Affiliations</dt>
                <dd>Virtuoso Member</dd>
              </div>
            </dl>
          </header>
        </div>

        <div className="doc-sheet">
          {/* 1 */}
          <section className="doc-section">
            <h2>
              <span className="doc-num">01</span>A Letter from the Founder
            </h2>
            <p>Dear Partner,</p>
            <p>
              Thank you for taking the time to read this. Troy Shay Travel is a
              luxury travel concierge. We do not advertise. Every client who comes
              to us arrives by introduction, and we intend to keep it that way.
            </p>
            <p>
              I rarely extend an invitation like this one. I am offering it because
              I believe your clients and ours expect the same standard: attentive,
              discreet and without compromise. This overview sets out who we serve,
              what we offer the people you introduce, and how we look after them,
              and you.
            </p>
            <p>I would welcome the chance to speak with you personally.</p>
            <div className="doc-signoff">
              <p>With warm regards,</p>
              <p className="doc-signature">Troy Shay</p>
              <p className="doc-signature-role">Founder, Troy Shay Travel</p>
            </div>
          </section>

          {/* 2 */}
          <section className="doc-section">
            <h2>
              <span className="doc-num">02</span>Who We Serve
            </h2>
            <p>
              We do not advertise. Our clients come to us by referral, and their
              privacy is the foundation of our work. For that reason we speak about
              them only in general terms.
            </p>
            <div className="doc-grid doc-grid-spaced">
              {clientGroups.map(([title, body]) => (
                <div key={title} className="doc-card">
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </section>
          <p className="doc-folio">2</p>
        </div>

        <div className="doc-sheet">
          {/* 3 */}
          <section className="doc-section">
            <h2>
              <span className="doc-num">03</span>Company Profile
            </h2>
            <p>
              Troy Shay Travel plans and books luxury travel worldwide for our
              clients. Our hotel relationships run through the industry’s leading
              preferred-partner programs, alongside our current partnerships with{" "}
              <strong>Montage Hotels &amp; Resorts</strong> and{" "}
              <strong>The St. Regis Aspen Resort</strong>. We also arrange villas,
              yacht charters and jet charters.
            </p>
            <table className="doc-facts">
              <tbody>
                <tr>
                  <th scope="row">Founder</th>
                  <td>Troy Shay</td>
                </tr>
                <tr>
                  <th scope="row">Services</th>
                  <td>
                    Hotels and resorts, villas, yacht charters, jet charters, full
                    itinerary planning, ground logistics
                  </td>
                </tr>
                <tr>
                  <th scope="row">Clientele</th>
                  <td>By referral only</td>
                </tr>
                <tr>
                  <th scope="row">Reach</th>
                  <td>Worldwide</td>
                </tr>
                <tr>
                  <th scope="row">Affiliations</th>
                  <td>Virtuoso Member</td>
                </tr>
                <tr>
                  <th scope="row">Availability</th>
                  <td>Our team is available 24 hours a day, 7 days a week</td>
                </tr>
              </tbody>
            </table>
          </section>

          <div className="doc-figure-pair">
            <figure className="doc-figure">
              <div className="doc-frame doc-frame-tall">
                <Image
                  src="/cabo-beach.jpg"
                  alt="Beach at Montage Los Cabos"
                  fill
                  sizes="(min-width: 860px) 350px, 45vw"
                  quality={80}
                  loading="eager"
                />
              </div>
              <figcaption>Montage Los Cabos</figcaption>
            </figure>
            <figure className="doc-figure">
              <div className="doc-frame doc-frame-tall">
                <Image
                  src="/bulgari-tokyo.jpg"
                  alt="Tokyo skyline from a guest room at Bulgari Tokyo"
                  fill
                  sizes="(min-width: 860px) 350px, 45vw"
                  quality={80}
                  loading="eager"
                />
              </div>
              <figcaption>Bulgari Tokyo</figcaption>
            </figure>
          </div>
          <p className="doc-folio">3</p>
        </div>

        <div className="doc-sheet">
          {/* 4 */}
          <section className="doc-section">
            <h2>
              <span className="doc-num">04</span>Our Strengths
            </h2>
            <div className="doc-stack">
              <div className="doc-card">
                <h3>Personal attention</h3>
                <p>
                  Every client is handled personally by Troy Shay. Preferences,
                  celebrations and special requests are known before arrival, not
                  discovered at check-in.
                </p>
              </div>
              <div className="doc-card">
                <h3>Inside knowledge of luxury hospitality</h3>
                <p>
                  Years spent traveling and working within luxury hospitality
                  shape how we brief properties, set expectations and protect the
                  guest experience.
                </p>
              </div>
              <div className="doc-card">
                <h3>Recognized affiliations</h3>
                <p>
                  As a Virtuoso Member, we operate within the industry’s leading
                  preferred-partner programs, including:
                </p>
                <ul className="doc-list doc-programs">
                  {programs.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="doc-card">
                <h3>The complete journey</h3>
                <p>
                  From the first conversation to the flight home, we arrange every
                  element, so guests arrive settled and well looked after.
                </p>
              </div>
            </div>
          </section>
          <p className="doc-folio">4</p>
        </div>

        <div className="doc-sheet">
          {/* 5 */}
          <section className="doc-section">
            <h2>
              <span className="doc-num">05</span>What Your Clients Receive
            </h2>
            <p>
              There is no planning fee and no booking fee. Because of the volume and
              value of the journeys we arrange, our hotel partners compensate us
              directly, so your clients pay the hotel’s website rate and receive
              the following in addition. Every client has one point of contact for
              the entire journey, someone looking out for their best interests from
              the first call to the flight home.
            </p>
            <div className="doc-grid doc-grid-spaced">
              {perks.map(([title, items]) => (
                <div key={title} className="doc-card">
                  <h3>{title}</h3>
                  <ul className="doc-list">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="doc-highlight">
              <h3>Exclusive to our clients</h3>
              <p>
                A <strong>$1,000 USD credit</strong> toward a future stay at any
                Montage property or The St. Regis Aspen Resort
              </p>
            </div>
          </section>
          <p className="doc-folio">5</p>
        </div>

        <div className="doc-sheet">
          {/* 6 */}
          <section className="doc-section">
            <h2>
              <span className="doc-num">06</span>What You Receive
            </h2>
            <ul className="doc-list doc-list-spaced">
              {referrerBenefits.map(([lead, body]) => (
                <li key={lead}>
                  <strong>{lead}</strong> {body}
                </li>
              ))}
            </ul>
          </section>

          {/* 7 */}
          <section className="doc-section">
            <h2>
              <span className="doc-num">07</span>How We Work Together
            </h2>
            <ol className="doc-steps">
              {process.map(([title, body], i) => (
                <li key={title}>
                  <span className="doc-step-num">{i + 1}.</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <p className="doc-folio">6</p>
        </div>

        <div className="doc-sheet">
          {/* 8 */}
          <section className="doc-section">
            <h2>
              <span className="doc-num">08</span>Standards & Confidentiality
            </h2>
            <p>
              Our clients trust us with their privacy, and we extend the same
              discretion to our partners. Client information is shared only as
              needed to deliver the journey, and the terms of every partnership
              remain confidential. We represent your name with the same care we
              give our own.
            </p>
          </section>

          {/* 9 */}
          <section className="doc-section doc-contact">
            <h2>
              <span className="doc-num">09</span>Next Steps
            </h2>
            <p>
              If this resonates, I would be glad to speak, or to meet at a time and
              place that suits you. Please reach out to me directly.
            </p>
            <address className="doc-address">
              <strong>Troy Shay</strong>
              <span>Founder, Troy Shay Travel</span>
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={`https://${SITE}`}>{SITE}</a>
            </address>
          </section>

          <p className="doc-colophon">
            © {year} Troy Shay Travel · Virtuoso Member
          </p>
          <p className="doc-folio">7</p>
        </div>
      </article>

      <div className="doc-print-bottom">
        <PrintButton />
      </div>

      <Footer />
    </main>
  );
}
