/**
 * PORTFOLIO PROJECTS
 *
 * To add a project: copy an entry, fill in the fields and put images in
 * /public/images/projects. `role`, `challenge`, `strategy`, `results` and
 * `gallery` are optional; empty ones are simply not shown.
 * Only add results you can verify.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  services: string[];
  role?: string;
  challenge?: string;
  strategy?: string;
  results?: string;
  /** Card cover image. Empty = gradient. */
  image: string;
  gallery?: GalleryImage[];
  /** true = shows a "Sample placeholder" badge */
  sample: boolean;
  /** Tailwind gradient classes used when no image is set */
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "project-harmonic",
    title: "Project Harmonic: Music Video Growth on YouTube",
    category: "Artists & Musicians",
    description:
      "YouTube optimization and growth work for the music videos of Project Harmonic, from titles and descriptions to thumbnails.",
    services: ["YouTube Optimization", "Thumbnail Management", "YouTube Growth"],
    role: "Video optimization, thumbnail management, and YouTube growth for Project Harmonic's music videos.",
    results:
      "YouTube Studio screenshots show vidIQ Optimize Scores of 92, 96 and 93 on three videos, and 3,591 views on Strange Computer (Official Music Video) 29 days after upload.",
    image: "/images/projects/harmonic-future-is-ours.jpg",
    gallery: [
      {
        src: "/images/projects/harmonic-strange-computer.jpg",
        alt: "YouTube Studio video details for Strange Computer (Official Music Video) with an Optimize Score of 92",
        caption: "Strange Computer (Official Music Video): Optimize Score 92, 3,591 views at 29 days.",
        width: 1478,
        height: 878,
      },
      {
        src: "/images/projects/harmonic-maximum-merp.jpg",
        alt: "YouTube Studio video details for Maximum Merp Official Audio with an Optimize Score of 96",
        caption: "Maximum Merp (Official Audio): Optimize Score 96.",
        width: 1358,
        height: 878,
      },
      {
        src: "/images/projects/harmonic-future-is-ours.jpg",
        alt: "YouTube Studio video details for The Future Is Ours with an Optimize Score of 93",
        caption: "The Future Is Ours (Official Cinematic Music Video): Optimize Score 93.",
        width: 1299,
        height: 747,
      },
    ],
    sample: false,
    gradient: "from-brand-purple to-brand-blue",
  },
  {
    slug: "delizioso-restaurant-website",
    title: "Delizioso Restaurant Website",
    category: "Food & Restaurant",
    description: "A website design and development project for a food and restaurant client.",
    services: ["Website Design", "Web Development"],
    role: "Design and development of the restaurant's website.",
    image: "/images/projects/restaurant-website.jpg",
    gallery: [
      {
        src: "/images/projects/restaurant-website.jpg",
        alt: "Website design for Delizioso Restaurant with a dark hero section, menu specialties and a table booking form",
        caption: "Website design for Delizioso Restaurant.",
        width: 1122,
        height: 1402,
      },
    ],
    sample: false,
    gradient: "from-brand-coral to-brand-purple",
  },
  {
    slug: "arecta-website",
    title: "Arecta Business Website",
    category: "Business & Services",
    description: "A website designed for a client's brand and services.",
    services: ["Website Design"],
    role: "Website design for the client's brand and services.",
    image: "/images/projects/arecta-website.jpg",
    gallery: [
      {
        src: "/images/projects/arecta-website.jpg",
        alt: "Website design for Arecta with a dark hero section and a grid of service cards",
        caption: "Website design for Arecta.",
        width: 1402,
        height: 1122,
      },
    ],
    sample: false,
    gradient: "from-brand-blue to-[#7A5CFF]",
  },
];
