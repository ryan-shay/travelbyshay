export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-layout">
        <div className="about-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/troy-shay.jpg" alt="Troy Shay" />
          <p className="photo-caption" style={{ textAlign: "right" }}>
            The Ranch at Rock Creek — one of my favorite places in the world
          </p>
        </div>

        <div className="about-content">
          <h1>Troy Shay</h1>
          <p className="about-subtitle">Founder, Shay Luxury Travel Concierge</p>

          <p>
            I&apos;ve spent years traveling the world and working inside luxury
            hospitality, learning firsthand what separates a good hotel from one
            that actually stays with you. Not just how it looks, but how it feels
            to be there, how the staff operates, and whether the experience lives
            up to what&apos;s on the page. That knowledge is what I bring to
            every trip I plan.
          </p>

          <p>
            When you work with me, you work with me directly. I have people I
            trust behind the scenes when I need them, but your trip, your
            preferences, and your experience are my responsibility from start to
            finish. No request is too small, and I take pride in noticing the
            details most people never think to ask about.
          </p>

          <h2>How We Work</h2>

          <p>
            I specialize in luxury travel across hotels, villas, yacht charters,
            private flights, and ground transportation, working with properties
            across Four Seasons, Rosewood, Aman, Belmond, Ritz-Carlton, Park
            Hyatt, and beyond. Through my direct relationships with on-property
            directors and leadership, my clients are consistently prioritized for
            upgrades, amenities, and experiences that simply aren&apos;t available
            through standard booking channels.
          </p>

          <p>
            I match the rates you&apos;d find booking directly. The difference is
            what comes with it: complimentary breakfast, hotel credits, room
            upgrades, and flexible check-in and check-out, at no additional cost
            to you.
          </p>

          <p>
            What I do best is cut through the noise. Two hotels can look nearly
            identical on paper and be worlds apart in reality. I know the
            difference, and I make sure you end up in the right place.
          </p>

          <p>
            Every client relationship I have is built on confidentiality,
            honesty, and trust. I take that seriously.
          </p>
        </div>
      </div>
    </main>
  );
}
