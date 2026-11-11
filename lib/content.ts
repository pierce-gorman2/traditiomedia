// ─────────────────────────────────────────────────────────────
//  EDIT YOUR SITE'S WORDS HERE. No other file needs to change.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Traditio Media",
  slogan: "Building for the next thousand years.",
  // Used for search engines and link previews only (not shown on the page).
  description:
    "Reformational, postmillennial podcasts and books built to last a thousand years.",
  url: "https://traditiomedia.com", // change to your real domain
};

export const mission = {
  eyebrow: "What We Build",
  heading: "Made to be handed down.",
  paragraphs: [
    "Most media is built for this week. We build for the next millennium. Every podcast we record and every book we write is measured against a single question: will this still matter in a thousand years?",
    "That standard shapes everything: what we choose to say, how carefully we say it, and where we refuse to be passive. We are not building a brand. We are building toward a country, a legacy, and communities that our children's children are proud to inherit.",
  ],
  pillars: [
    { title: "Rooted", text: "Anchored in truth that does not change with the season." },
    { title: "Lasting", text: "Written and recorded to be read and heard by generations." },
    { title: "Handed down", text: "Every work is a gift to those who come after us." },
  ],
};

export const beliefs = {
  eyebrow: "What We Believe",
  heading: "Reformational & Postmillennial",
  intro:
    "We are a reformational ministry. We hold to the five solas of the Reformation, and we believe that Christ is reigning now and that His kingdom will fill the earth. We believe that we win down here.",
  solas: [
    { latin: "Sola Scriptura", english: "Scripture alone" },
    { latin: "Sola Fide", english: "Faith alone" },
    { latin: "Sola Gratia", english: "Grace alone" },
    { latin: "Solus Christus", english: "Christ alone" },
    { latin: "Soli Deo Gloria", english: "To God alone be glory" },
  ],
  postmillennial:
    "Postmillennial hope means we do not build for retreat. The gospel will succeed, the nations will be discipled, and the work we do today is laid as a foundation for a Christian world still to come.",
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  href: string; // replace "#" with the real link when ready
  cta: string;
};

export const projects: { eyebrow: string; heading: string; items: Project[] } = {
  eyebrow: "Our Work",
  heading: "Two organizations. One long vision.",
  items: [
    {
      name: "Die Well Media",
      tagline: "Go all-in on eternity.",
      description:
        "A podcast and body of content for Christian men who intend to live for eternity and die well — facing death honestly, and leaving a legacy of faith.",
      href: "https://diewellmedia.com",
      cta: "Visit Die Well Media",
    },
    {
      name: "Reforming USA",
      tagline: "Hand down a better country.",
      description:
        "Content aimed at reforming the nation — rebuilding what has been neglected so that we may pass on a better country than we received.",
      href: "https://reformingusa.org",
      cta: "Visit Reforming USA",
    },
  ],
};

export const works = {
  eyebrow: "The Library",
  heading: "Podcasts. Books. Writing.",
  intro:
    "Our catalogue will grow slowly and deliberately. Each piece is meant to stand for a very long time.",
  kinds: [
    { title: "Podcasts", text: "Conversations and teaching recorded with care." },
    { title: "Books", text: "Full-length works written to be read for generations." },
    { title: "Essays", text: "Shorter writing that sharpens the mind and steadies the heart." },
  ],
  // Placeholder slot. Later, paste a podcast embed or add book listings here.
  placeholder: {
    label: "Coming soon",
    text: "Our first podcast episodes and book listings will appear here.",
  },
};

export const footer = {
  note: "Traditio — from the Latin, “that which is handed down.”",
  links: [
    { label: "Die Well Media", href: "https://diewellmedia.com" },
    { label: "Reforming USA", href: "https://reformingusa.org" },
    { label: "Contact", href: "mailto:hello@traditiomedia.com" },
  ],
};
