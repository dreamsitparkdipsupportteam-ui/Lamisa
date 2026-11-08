/**
 * PORTFOLIO PROJECTS
 *
 * The entries below are clearly labelled SAMPLE placeholders (sample: true).
 * They contain no real clients and no performance numbers.
 *
 * To add a real project: copy an entry, set sample: false, fill in the fields,
 * and (optionally) set `image` to a file in /public/images, e.g. "/images/project-one.jpg".
 * Only add results you can verify.
 */

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  services: string[];
  challenge: string;
  strategy: string;
  results: string;
  image: string;
  sample: boolean;
  /** Tailwind gradient classes used when no image is set */
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "sample-music-artist",
    title: "Sample Project: Independent Music Artist",
    category: "Artists & Musicians",
    description:
      "A placeholder case study showing how an artist's social presence and release campaign could be presented here.",
    services: ["Social Media Marketing", "Content Strategy", "Organic Audience Growth"],
    challenge: "Describe the starting point: where the artist's audience and visibility stood.",
    strategy: "Describe the approach: content themes, channels, release planning, and community building.",
    results: "Add verified results here. No figures are published until they are confirmed.",
    image: "",
    sample: true,
    gradient: "from-brand-purple to-brand-blue",
  },
  {
    slug: "sample-startup-brand",
    title: "Sample Project: Early-Stage Startup",
    category: "Startups & Brands",
    description:
      "A placeholder case study for a brand-awareness and content engine built for a young company.",
    services: ["Brand Awareness", "SEO Strategy", "Social Media Management"],
    challenge: "Describe the brand's goal and the obstacles to being discovered.",
    strategy: "Describe the plan: positioning, content pillars, search focus, and publishing rhythm.",
    results: "Add verified results here. No figures are published until they are confirmed.",
    image: "",
    sample: true,
    gradient: "from-brand-coral to-brand-purple",
  },
  {
    slug: "sample-organization",
    title: "Sample Project: Non-Profit Organization",
    category: "Organizations",
    description:
      "A placeholder case study illustrating how an organization's community and message could be grown organically.",
    services: ["Digital Marketing Consulting", "Content Strategy", "Social Media Marketing"],
    challenge: "Describe the organization's mission and its communication challenge.",
    strategy: "Describe the roadmap: audience research, messaging, channel focus, and measurement.",
    results: "Add verified results here. No figures are published until they are confirmed.",
    image: "",
    sample: true,
    gradient: "from-brand-blue to-[#7A5CFF]",
  },
];
