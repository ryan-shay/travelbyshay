import Image from "next/image";
import Link from "next/link";
import Footer, { PHONE_HREF, EMAIL, SITE } from "../footer";
import PrintButton from "./print-button";

// Shared layout for every partnership overview. Each partner's wording lives
// in partners.js; this component supplies the cover, the fixed sections
// (Who We Are details, Contact) and the sheet structure. Each sheet is one
// printed page, so the site and the PDF break in the same places.

// Shared privately with selected companies: not linked from the site and kept
// out of search results. Anyone with the link can still open it.
export function partnershipMetadata(partner) {
  return {
    title: partner.title,
    description: partner.description,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false, noimageindex: true },
    },
    openGraph: {
      title: partner.title,
      description: partner.description,
      url: partner.path,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    },
  };
}

function Steps({ items }) {
  return (
    <ol className="doc-numbered">
      {items.map((item) => (
        <li key={item.lead}>
          <strong>{item.lead}</strong> {item.body}
          {item.list && (
            <ul className="doc-list">
              {item.list.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

function HotelPartners({ partners }) {
  if (partners.logos) {
    return (
      <div className="doc-partners">
        {partners.logos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={logo.className}
          />
        ))}
      </div>
    );
  }
  // Names sit in rows of four so no separator dot dangles at a line break.
  const rows = [];
  for (let i = 0; i < partners.names.length; i += 4) {
    rows.push(partners.names.slice(i, i + 4));
  }
  return (
    <div className="doc-partners-names">
      {rows.map((row) => (
        <p key={row.join()}>{row.join(" · ")}</p>
      ))}
    </div>
  );
}

export default function PartnershipDoc({ partner }) {
  const year = new Date().getFullYear();
  const { letter, whoWeAre, receive, how } = partner;

  const sheets = [
    // 01 Letter
    <section className="doc-section" key="letter">
      <h2>
        <span className="doc-num">01</span>A Letter from the Founder
      </h2>
      <p>{letter.salutation}</p>
      {letter.paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}
      <div className="doc-signoff">
        <p>{letter.closing ?? "With warm regards,"}</p>
        <p className="doc-signature">{letter.signature ?? "Troy Shay"}</p>
        {letter.role !== null && (
          <p className="doc-signature-role">
            {letter.role ?? "Founder, Troy Shay Travel"}
          </p>
        )}
      </div>
    </section>,

    // 02 Who We Are
    <>
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
        {whoWeAre?.extra && (
          <div className="doc-subsection">
            <h3>{whoWeAre.extra.title}</h3>
            <p>{whoWeAre.extra.body}</p>
          </div>
        )}
      </section>
      {whoWeAre?.photos && (
        <div className="doc-figure-pair">
          {whoWeAre.photos.map((photo) => (
            <figure className="doc-figure" key={photo.src}>
              <div className="doc-frame">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 860px) 360px, 45vw"
                  quality={85}
                  style={photo.position ? { objectPosition: photo.position } : undefined}
                />
              </div>
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </>,

    // 03 What Your Clients Receive
    <section className="doc-section" key="receive">
      <h2>
        <span className="doc-num">03</span>What Your Clients Receive
      </h2>
      <div className="doc-highlight doc-highlight-lead">
        <h3>{receive.lead.title}</h3>
        <p>{receive.lead.body}</p>
      </div>
      <Steps items={receive.items} />
      {receive.extra && (
        <div className="doc-subsection">
          <h3>{receive.extra.title}</h3>
          <p>{receive.extra.body}</p>
        </div>
      )}
    </section>,

    // 04 How It Works + 05 Contact
    <>
      <section className="doc-section">
        <h2>
          <span className="doc-num">04</span>How It Works
        </h2>
        <Steps items={how.steps} />
        {how.after.map((text, i) => (
          <p key={text} className={i === 0 ? "doc-after-list" : undefined}>
            {text}
          </p>
        ))}
      </section>

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

      <p className="doc-colophon">© {year} Troy Shay Travel · Virtuoso Member</p>
    </>,
  ];

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
        <div className="doc-sheet doc-sheet-cover">
          <header className="doc-cover">
            <p className="doc-mark">Troy Shay Travel</p>
            <p className="doc-kicker">By Introduction</p>
            <h1 className="doc-title">Partnership Overview</h1>
            {partner.tagline && (
              <p className="doc-sub">
                <em>{partner.tagline}</em>
              </p>
            )}
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
            <HotelPartners partners={partner.hotelPartners} />
            <p className="doc-cover-site">{SITE}</p>
          </div>
        </div>

        {sheets.map((content, i) => (
          <div className="doc-sheet" key={i}>
            {content}
            <p className="doc-folio">{i + 2}</p>
          </div>
        ))}
      </article>

      <div className="doc-print-bottom">
        <PrintButton />
      </div>

      <Footer />
    </main>
  );
}
