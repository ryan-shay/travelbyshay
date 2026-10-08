import Image from "next/image";
import Link from "next/link";
import Footer, { PHONE_HREF, EMAIL, SITE } from "../footer";
import PrintButton from "./print-button";

// Shared privately with selected companies: not linked from the site and
// kept out of search results. Anyone with the link can still open it.
export const metadata = {
  title: "Partnership Overview — Troy Shay Travel",
  description:
    "A partnership overview from Troy Shay Travel, a luxury travel concierge working by referral only.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: {
    title: "Partnership Overview — Troy Shay Travel",
    description:
      "A partnership overview from Troy Shay Travel, a luxury travel concierge working by referral only.",
    url: "/partnerships",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

const perks = [
  "Complimentary breakfast",
  "A $100 hotel credit",
  "Room upgrade on arrival, based on availability",
  "Early check in and late check out",
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
            <h1 className="doc-title">Partnership Overview</h1>
            <p className="doc-sub">
              <em>Exceptional travel for the clients you look after</em>
            </p>
            <dl className="doc-meta">
              <div>
                <dt>Prepared by</dt>
                <dd>Troy Shay, Founder</dd>
              </div>
            </dl>
            <p className="doc-edition">{year} · Virtuoso Member</p>
          </header>
          <div className="doc-cover-foot">
            <p className="doc-partners-label">Hotel Partners</p>
            <div className="doc-partners">
              <Image
                src="/partner-montage.png"
                alt="Montage Hotels & Resorts"
                width={1363}
                height={526}
                className="doc-partner-montage"
              />
              <Image
                src="/partner-st-regis.png"
                alt="St. Regis Hotels & Resorts"
                width={887}
                height={718}
                className="doc-partner-st-regis"
              />
            </div>
            <p className="doc-cover-site">{SITE}</p>
          </div>
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
              luxury travel concierge. We work by referral only.
            </p>
            <p>
              Your clients and ours expect the same things: the highest quality,
              close attention to detail, and an experience that feels as exclusive
              as the purchase itself.
            </p>
            <p>
              I’m selective about the hotels I work with. Montage and the St.
              Regis Aspen are the two I’ve chosen, because they share my belief
              that a stay should be built around the guest. This overview covers
              who we serve, what we offer those you introduce, and how we take
              care of them.
            </p>
            <p>
              After reading through, should this feel like a good fit, I’d welcome
              the chance to continue the conversation.
            </p>
            <div className="doc-signoff">
              <p>With warm regards,</p>
              <p className="doc-signature">Troy Shay</p>
              <p className="doc-signature-role">Founder, Troy Shay Travel</p>
            </div>
          </section>
          <p className="doc-folio">2</p>
        </div>

        <div className="doc-sheet">
          {/* 2 */}
          <section className="doc-section">
            <h2>
              <span className="doc-num">02</span>Who We Are
            </h2>
            <p>
              Troy Shay Travel is a luxury travel concierge. We plan and book trips
              worldwide for private families and corporate clients, and everything
              is handled by Troy Shay and his team.
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
                    Hotels and resorts, villas, yachts, private aviation, full
                    itinerary planning
                  </td>
                </tr>
                <tr>
                  <th scope="row">Clientele</th>
                  <td>Private families and corporate clients</td>
                </tr>
                <tr>
                  <th scope="row">Availability</th>
                  <td>Around the clock</td>
                </tr>
                <tr>
                  <th scope="row">Affiliation</th>
                  <td>Virtuoso Member</td>
                </tr>
              </tbody>
            </table>
          </section>

          <div className="doc-figure-pair">
            <figure className="doc-figure">
              <div className="doc-frame">
                <Image
                  src="/montage-laguna-beach.jpg"
                  alt="Montage Laguna Beach above the cove and the Pacific"
                  fill
                  sizes="(min-width: 860px) 360px, 45vw"
                  quality={85}
                  style={{ objectPosition: "55% 50%" }}
                />
              </div>
              <figcaption>Montage Laguna Beach</figcaption>
            </figure>
            <figure className="doc-figure">
              <div className="doc-frame">
                <Image
                  src="/st-regis-aspen.jpg"
                  alt="The St. Regis Aspen Resort in winter, framed by snow-covered trees"
                  fill
                  sizes="(min-width: 860px) 360px, 45vw"
                  quality={85}
                />
              </div>
              <figcaption>The St. Regis Aspen Resort</figcaption>
            </figure>
          </div>
          <p className="doc-folio">3</p>
        </div>

        <div className="doc-sheet">
          {/* 3 */}
          <section className="doc-section">
            <h2>
              <span className="doc-num">03</span>What Your Clients Receive
            </h2>
            <div className="doc-highlight doc-highlight-lead">
              <h3>A $1,000 credit for every client</h3>
              <p>
                Clients who book through me receive $1,000 toward a future stay at
                any Montage or at the St. Regis Aspen, on top of everything below.
              </p>
            </div>
            <ol className="doc-numbered">
              <li>
                <strong>No planning or booking fees.</strong> Clients pay the
                hotel’s website rate, and I’m compensated directly by the hotels.
              </li>
              <li>
                <strong>Added perks.</strong> At many properties, this includes:
                <ul className="doc-list">
                  {perks.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
              <li>
                <strong>And often more.</strong> Extra touches vary by property
                and are chosen to suit each stay.
              </li>
              <li>
                <strong>A dedicated team.</strong> Personal service from the first
                request to the flight home, with someone available around the
                clock.
              </li>
            </ol>
          </section>
          <p className="doc-folio">4</p>
        </div>

        <div className="doc-sheet">
          {/* 4 */}
          <section className="doc-section">
            <h2>
              <span className="doc-num">04</span>How It Works
            </h2>
            <ol className="doc-numbered">
              <li>
                <strong>You mention it</strong> to a client when it feels like a
                natural fit.
              </li>
              <li>
                <strong>If they’re interested, you connect us</strong> by email.
              </li>
              <li>
                <strong>I take it from there.</strong> I reach out directly, offer
                the $1,000 credit, and take care of the booking.
              </li>
            </ol>
            <p className="doc-after-list">
              There is no cost to you. You know your clients best, so the timing
              is yours: an upcoming honeymoon, an anniversary, or simply a client
              who loves to travel well. The credit is presented as a gift from
              you.
            </p>
          </section>

          {/* 5 */}
          <section className="doc-section doc-contact">
            <h2>
              <span className="doc-num">05</span>Contact
            </h2>
            <address className="doc-address">
              <strong>Troy Shay</strong>
              <span>Founder, Troy Shay Travel</span>
              <a href={PHONE_HREF}>+1 (858) 449-0335</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={`https://${SITE}`}>{SITE}</a>
            </address>
          </section>

          <p className="doc-colophon">
            © {year} Troy Shay Travel · Virtuoso Member
          </p>
          <p className="doc-folio">5</p>
        </div>
      </article>

      <div className="doc-print-bottom">
        <PrintButton />
      </div>

      <Footer />
    </main>
  );
}
