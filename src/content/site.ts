/**
 * EDIT THIS FILE to change the site's core content.
 * Anything left empty ("") is hidden or shown as a clearly labelled placeholder.
 */

export const site = {
  name: "Lamisa",
  title: "Digital Marketing Specialist",
  experienceYears: 4,
  intro:
    "I help artists, brands, and organizations achieve genuine organic growth through strategic digital marketing.",
  description:
    "Lamisa is a digital marketing specialist with 4 years of experience helping artists, brands, and organizations grow their audience organically through social media, content, SEO, and strategy.",

  /** Your real email address, e.g. "hello@yourdomain.com". Empty = placeholder shown. */
  email: "",
  placeholderEmail: "your-email@example.com",

  /** Paste full profile URLs. Empty ones are hidden everywhere on the site. */
  socials: [
    { key: "linkedin", label: "LinkedIn", url: "" },
    { key: "instagram", label: "Instagram", url: "" },
    { key: "x", label: "X", url: "" },
    { key: "facebook", label: "Facebook", url: "" },
  ] as { key: "linkedin" | "instagram" | "x" | "facebook"; label: string; url: string }[],

  /**
   * Photos. Put files in /public/images and use paths like "/images/lamisa-hero.jpg".
   * Empty = a tasteful placeholder is shown.
   */
  images: {
    hero: "",
    about: "",
  },
};

export const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Portfolio", href: "#portfolio", id: "portfolio" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const activeSocials = site.socials.filter((s) => s.url.trim() !== "");

/**
 * Stats. Only set `verified: true` for figures you can back up.
 * Unverified entries display as clearly labelled placeholders.
 */
export const stats: {
  value: string;
  label: string;
  verified: boolean;
}[] = [
  { value: String(site.experienceYears), label: "Years of experience", verified: true },
  { value: "—", label: "Audience growth", verified: false },
  { value: "—", label: "Projects delivered", verified: false },
  { value: "—", label: "Countries reached", verified: false },
];

export const processSteps = [
  {
    title: "Discovery",
    description:
      "We start with listening: your goals, your audience, your voice, and where you stand online today.",
  },
  {
    title: "Strategy",
    description:
      "A clear, realistic plan for content, channels, and growth, built around your brand rather than a template.",
  },
  {
    title: "Execution",
    description:
      "Consistent, high-quality publishing and community building, with you kept in the loop at every step.",
  },
  {
    title: "Optimization",
    description:
      "We review what is working, learn from the data, and keep refining so growth compounds over time.",
  },
];

/**
 * Testimonials. Replace placeholders only with real, approved client words.
 * Set `placeholder: false` once a quote is genuine.
 */
export const testimonials: {
  quote: string;
  name: string;
  role: string;
  placeholder: boolean;
}[] = [
  {
    quote: "Your client's testimonial will appear here once you add a real, approved quote.",
    name: "Client name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    quote: "Share what working together was like and the difference it made for their brand.",
    name: "Client name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    quote: "Real testimonials build trust fastest. Add them in src/content/site.ts.",
    name: "Client name",
    role: "Role, Company",
    placeholder: true,
  },
];

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
