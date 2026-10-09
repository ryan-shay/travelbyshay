// Wording for each partnership overview, rendered by partnership-doc.js.
//
// DEFAULT_PARTNER is the general page at /partnerships. Every entry in
// PARTNERS gets its own private page at /partnerships/<slug>; to add a
// company, copy an entry, give it a new slug, and adjust the wording.

const STANDARD_PERKS = [
  "Complimentary breakfast",
  "A $100 hotel credit",
  "Room upgrade on arrival, based on availability",
  "Early check in and late check out",
];

const MONTAGE_ST_REGIS_LOGOS = {
  logos: [
    {
      src: "/partner-montage.png",
      alt: "Montage Hotels & Resorts",
      width: 1363,
      height: 526,
      className: "doc-partner-montage",
    },
    {
      src: "/partner-st-regis.png",
      alt: "St. Regis Hotels & Resorts",
      width: 887,
      height: 718,
      className: "doc-partner-st-regis",
    },
  ],
};

export const DEFAULT_PARTNER = {
  path: "/partnerships",
  title: "Partnership Overview — Troy Shay Travel",
  description:
    "A partnership overview from Troy Shay Travel, a luxury travel concierge working by referral only.",
  tagline: "Exceptional travel for the clients you look after",
  hotelPartners: MONTAGE_ST_REGIS_LOGOS,
  letter: {
    salutation: "Dear Partner,",
    paragraphs: [
      "Troy Shay Travel is a luxury travel concierge, and we work by referral only.",
      "Over the years I have built close friendships with the people behind some of the world’s finest hotels. Those relationships allow me to offer something personal to the guests you introduce, and I am glad to extend that to you and your clients.",
      "I am selective about the hotels I work with. Montage and the St. Regis Aspen are the two I have chosen, because they believe, as I do, that a stay should be built around the guest. This overview covers who we are, what we offer, and how we care for the people you trust us with.",
      "If it feels like a good fit once you have read through, I would welcome the chance to continue the conversation.",
    ],
  },
  whoWeAre: {
    photos: [
      {
        src: "/montage-laguna-beach.jpg",
        alt: "Montage Laguna Beach above the cove and the Pacific",
        caption: "Montage Laguna Beach",
        position: "55% 50%",
      },
      {
        src: "/st-regis-aspen.jpg",
        alt: "The St. Regis Aspen Resort in winter, framed by snow-covered trees",
        caption: "The St. Regis Aspen Resort",
      },
    ],
  },
  receive: {
    lead: {
      title: "A $1,000 credit for every client",
      body: "Clients who book through me receive $1,000 toward a future stay at any Montage or at the St. Regis Aspen, on top of everything below.",
    },
    items: [
      {
        lead: "No planning or booking fees.",
        body: "Clients pay the hotel’s website rate, and I’m compensated directly by the hotels.",
      },
      {
        lead: "Added perks.",
        body: "At many properties, this includes:",
        list: STANDARD_PERKS,
      },
      {
        lead: "And often more.",
        body: "Extra touches vary by property and are chosen to suit each stay.",
      },
      {
        lead: "A dedicated team.",
        body: "Personal service from the first request to the flight home, with someone available around the clock.",
      },
    ],
  },
  how: {
    steps: [
      { lead: "You mention it", body: "to a client when it feels like a natural fit." },
      { lead: "If they’re interested, you connect us", body: "by email." },
      {
        lead: "I take it from there.",
        body: "I reach out directly, offer the $1,000 credit, and take care of the booking.",
      },
    ],
    after: [
      "There is no cost to you. You know your clients best, so the timing is yours: an upcoming honeymoon, an anniversary, or simply a client who loves to travel well. The credit is presented as a gift from you.",
    ],
  },
};

export const PARTNERS = {
  "oscar-de-la-renta": {
    path: "/partnerships/oscar-de-la-renta",
    title: "Partnership Overview for Oscar de la Renta Beverly Hills · Troy Shay Travel",
    description:
      "A partnership overview prepared for Oscar de la Renta Beverly Hills by Troy Shay Travel, a luxury travel concierge working by referral only.",
    tagline: "Exceptional honeymoons for the brides you dress",
    // Text for now; swap for logos once the files arrive.
    hotelPartners: {
      names: [
        "Four Seasons",
        "Rosewood",
        "Belmond",
        "Mandarin Oriental",
        "One&Only",
        "Ritz-Carlton",
        "St. Regis",
        "Montage",
      ],
    },
    letter: {
      salutation: "Dear Oscar de la Renta Beverly Hills Team,",
      paragraphs: [
        "Troy Shay Travel is a luxury travel concierge, and we work by referral only.",
        "For every bride you refer to us, I would like to offer a $1,000 credit toward a future stay with any of my preferred hotel partners, presented as a gift from your team.",
        "Over the years I have built close friendships with the people behind some of the world’s finest hotels. Those relationships allow me to arrange something personal for each couple, from the first conversation to the moment they return home.",
        "This overview covers who we are, what your brides receive, and how a honeymoon comes together.",
        "If it feels like a good fit once you have read through, I would welcome the chance to continue the conversation.",
      ],
    },
    whoWeAre: {
      extra: {
        title: "Our Hotel Relationships",
        body: "Our preferred partners include Four Seasons, Rosewood, Belmond, Mandarin Oriental, One&Only, Ritz‑Carlton, St. Regis and Montage. We also work closely with Relais & Châteaux, Leading Hotels of the World and Oetker Collection, and arrange safaris with Singita and Wilderness.",
      },
    },
    receive: {
      lead: {
        title: "A $1,000 credit for every couple",
        body: "Couples who book through me receive $1,000 toward a future stay at any of the preferred partners listed above, on top of everything below.",
      },
      items: [
        {
          lead: "No planning or booking fees.",
          body: "Couples pay the published website rate, and I am compensated by the property.",
        },
        {
          lead: "Added perks.",
          body: "At many properties, this includes:",
          list: STANDARD_PERKS,
        },
        {
          lead: "Completely custom.",
          body: "No two honeymoons are alike, so each trip is designed around the couple, anywhere in the world they wish to go.",
        },
        {
          lead: "And often more.",
          body: "Extra touches vary by property and are chosen to suit each stay.",
        },
        {
          lead: "A dedicated team.",
          body: "Personal service from the first request to the flight home, with someone available around the clock.",
        },
      ],
      // Written as an invitation until the boutique confirms the cake and note.
      extra: {
        title: "A Welcome from Oscar de la Renta",
        body: "If your team would like to be part of the arrival, a custom Oscar de la Renta cake can be waiting when the newlyweds reach their first hotel, inscribed with their names. Beside it, a note from the bridal stylist and/or manager who dressed the bride would wish the couple a wonderful honeymoon and thank them for their trust.",
      },
    },
    how: {
      steps: [
        { lead: "You mention it", body: "to a bride when her honeymoon comes up naturally." },
        { lead: "If the couple is interested, you connect us", body: "by email." },
        {
          lead: "I take it from there.",
          body: "I reach out directly, offer the $1,000 credit, and take care of every detail of the trip.",
        },
      ],
      after: [
        "Once everything is confirmed, I coordinate the cake and note with your team.",
        "There is no cost to you. You know your brides best, so the timing is yours. The credit is presented as a gift from you.",
      ],
    },
  },
};
