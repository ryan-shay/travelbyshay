import Image from "next/image";
import Link from "next/link";
import Footer, { PHONE_DISPLAY, PHONE_HREF, EMAIL } from "../footer";
import PrintButton from "./print-button";

export const metadata = {
  title: "Partnerships — Troy Shay Travel",
  description:
    "Partnership overview for hotels, resorts, villas, yacht charters, private aviation and destination partners of Troy Shay Travel.",
};

const strengths = [
  {
    title: "A personal, high-touch model",
    body: "Every client is handled directly by Troy Shay and a small team. Requests, preferences and special occasions are known before arrival, not discovered at check-in.",
  },
  {
    title: "Inside knowledge of luxury hospitality",
    body: "Years spent traveling and working within luxury hospitality inform how we brief properties, set expectations and protect the guest experience on both sides.",
  },
  {
    title: "Established industry affiliations",
    body: "As a Virtuoso Member, we operate within the industry’s recognized preferred-partner programs and standard commission structures.",
  },
  {
    title: "Full-journey planning",
    body: "We arrange the entire trip — accommodation, villas, yacht charters, private aviation, ground transport and private security — so partners receive guests who arrive settled and well prepared.",
  },
];

const benefits = [
  [
    "Qualified, high-value guests",
    "Discerning travelers who book premium room categories, suites and villas, and who value service over price.",
  ],
  [
    "Detailed pre-arrival briefs",
    "Arrival times, preferences, dietary needs, celebrations and VIP notes shared in advance, so your team can prepare properly.",
  ],
  [
    "A single point of contact",
    "One accountable advisor for every reservation, change and on-property request, reachable around the clock.",
  ],
  [
    "Repeat and referral business",
    "Our clients return to properties that look after them well, and recommend them to family, friends and colleagues.",
  ],
  [
    "Considered representation",
    "Your property presented accurately and thoughtfully in client proposals, itineraries and personal recommendations.",
  ],
  [
    "Honest post-stay feedback",
    "Clear, constructive notes after each stay, so partners know what delighted guests and what could be refined.",
  ],
];

const categories = [
  ["Hotels & Resorts", "Independent and branded luxury properties worldwide."],
  ["Private Villas & Residences", "Fully staffed homes and estate rentals."],
  ["Yacht Charter", "Crewed motor and sailing yachts, day and week charters."],
  ["Private Aviation", "Charter operators, jet card and fractional providers."],
  ["Destination Management", "Ground handlers, guides, transfers and logistics."],
  ["Experiences & Dining", "Private access, cultural experiences and reservations."],
  ["Private Security", "Executive protection and secure travel arrangements."],
];

const process = [
  ["Inquiry & proposal", "We match the client to the right partner and confirm availability, rates and amenities directly with your team."],
  ["Confirmation & brief", "Bookings are confirmed in writing, followed by a complete guest profile ahead of arrival."],
  ["During the stay", "We remain available to your team and to the guest for any adjustment or request."],
  ["After the stay", "We share feedback, settle commission through the appropriate program and plan the next visit."],
];

const asks = [
  "Preferred rates and partner amenities for our clients, where available",
  "Upgrades and early check-in or late check-out on availability",
  "A named contact in sales or guest relations",
  "Commission paid under standard industry or program terms",
  "Familiarization visits or site inspections when convenient",
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

      <article className="doc">
        {/* Cover */}
        <header className="doc-cover">
          <p className="doc-mark">Troy Shay Travel</p>
          <p className="doc-kicker">Partnership Overview</p>
          <h1 className="doc-title">An Invitation to Partner</h1>
          <p className="doc-sub">
            For hotels, resorts, villas, yacht charters, private aviation and
            destination partners
          </p>
          <figure className="doc-figure doc-figure-hero">
            <div className="doc-frame">
              <Image
                src="/ritz-paris.jpg"
                alt="Ritz Paris lobby corridor"
                fill
                sizes="(min-width: 860px) 720px, 92vw"
                quality={80}
                priority
              />
            </div>
            <figcaption>Ritz Paris</figcaption>
          </figure>
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

        {/* 1 */}
        <section className="doc-section">
          <h2>
            <span className="doc-num">01</span>A Letter from the Founder
          </h2>
          <p>Dear Partner,</p>
          <p>
            Thank you for taking the time to learn about Troy Shay Travel. We are
            a luxury travel concierge serving clients who expect their journeys to
            be handled with care, discretion and precision from the first inquiry
            to the flight home.
          </p>
          <p>
            Our work depends on the properties and providers who look after our
            clients once they arrive. We choose those partners carefully, and we
            aim to be the kind of advisor your team is glad to hear from: clear
            in our requests, generous with context, and loyal to those who take
            good care of our guests.
          </p>
          <p>
            This overview sets out who we are, what we bring to a partnership and
            what we hope to build together. I would welcome the opportunity to
            speak with you personally.
          </p>
          <div className="doc-signoff">
            <p>With warm regards,</p>
            <p className="doc-signature">Troy Shay</p>
            <p className="doc-signature-role">Founder, Troy Shay Travel</p>
          </div>
        </section>

        {/* 2 */}
        <section className="doc-section">
          <h2>
            <span className="doc-num">02</span>Company Profile
          </h2>
          <p>
            Troy Shay Travel plans and books luxury travel worldwide on behalf of
            private clients, families and executives. We work directly with the
            world’s leading properties, including Four Seasons, Aman and Rosewood,
            alongside independent hotels, private villas, yacht charters, private
            aviation and security providers.
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
                  Hotels and resorts, villas, yacht charter, private aviation,
                  private security, full itinerary planning
                </td>
              </tr>
              <tr>
                <th scope="row">Clientele</th>
                <td>Private clients, families and executives</td>
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
                <td>Around the clock for clients and partners</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 3 */}
        <section className="doc-section">
          <h2>
            <span className="doc-num">03</span>Our Strengths
          </h2>
          <div className="doc-grid">
            {strengths.map((s) => (
              <div key={s.title} className="doc-card">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="doc-figure-pair">
          <figure className="doc-figure">
            <div className="doc-frame doc-frame-tall">
              <Image
                src="/bulgari-tokyo.jpg"
                alt="Bulgari Tokyo spa pool at night"
                fill
                sizes="(min-width: 860px) 350px, 45vw"
                quality={80}
                loading="eager"
              />
            </div>
            <figcaption>Bulgari Tokyo</figcaption>
          </figure>
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
        </div>

        {/* 4 */}
        <section className="doc-section">
          <h2>
            <span className="doc-num">04</span>What Partners Receive
          </h2>
          <ol className="doc-benefits">
            {benefits.map(([title, body]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 5 */}
        <section className="doc-section">
          <h2>
            <span className="doc-num">05</span>Partnership Categories
          </h2>
          <p>We welcome conversations with partners in the following areas:</p>
          <table className="doc-facts doc-categories">
            <tbody>
              {categories.map(([name, desc]) => (
                <tr key={name}>
                  <th scope="row">{name}</th>
                  <td>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 6 */}
        <section className="doc-section">
          <h2>
            <span className="doc-num">06</span>How We Work Together
          </h2>
          <ol className="doc-steps">
            {process.map(([title, body], i) => (
              <li key={title}>
                <span className="doc-step-num">{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 7 */}
        <section className="doc-section">
          <h2>
            <span className="doc-num">07</span>Preferred Partner Terms
          </h2>
          <p>
            Every partnership is tailored, but our preferred partners typically
            extend the following to our clients and our team:
          </p>
          <ul className="doc-list">
            {asks.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <p>
            In return, we commit to accurate representation of your property,
            complete guest information ahead of every stay, and a long-term
            relationship built on repeat business.
          </p>
        </section>

        <figure className="doc-figure doc-figure-wide">
          <div className="doc-frame doc-frame-wide">
            <Image
              src="/hotel-dubrovnik.jpg"
              alt="Terrace table overlooking the sea at Hotel Dubrovnik"
              fill
              sizes="(min-width: 860px) 720px, 92vw"
              quality={80}
              loading="eager"
            />
          </div>
          <figcaption>Hotel Dubrovnik</figcaption>
        </figure>

        {/* 8 */}
        <section className="doc-section">
          <h2>
            <span className="doc-num">08</span>Standards & Confidentiality
          </h2>
          <p>
            Our clients trust us with their privacy, and we extend the same
            discretion to our partners. Guest information is shared only as
            needed to deliver the stay, and commercial terms are kept strictly
            confidential. We conduct all bookings in line with the standards of
            the Virtuoso network, and we expect partners to uphold the
            same commitment to guest privacy and safety.
          </p>
        </section>

        {/* 9 */}
        <section className="doc-section doc-contact">
          <h2>
            <span className="doc-num">09</span>Next Steps
          </h2>
          <p>
            To discuss a partnership, arrange a site visit or request further
            information, please contact us directly.
          </p>
          <address className="doc-address">
            <strong>Troy Shay</strong>
            <span>Founder, Troy Shay Travel</span>
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>travelbyshay.com</span>
          </address>
        </section>

        <p className="doc-colophon">
          © {year} Troy Shay Travel · Virtuoso Member
        </p>
      </article>

      <div className="doc-print-bottom">
        <PrintButton />
      </div>

      <Footer />
    </main>
  );
}
