import {
  Megaphone,
  CalendarCheck,
  Sprout,
  PenTool,
  Search,
  Compass,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  cta: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Platform-smart campaigns and content that reach the right people and give them a reason to follow.",
    cta: "Ask about this",
    icon: Megaphone,
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    description:
      "Day-to-day publishing, community engagement, and reporting so your channels stay active and on-brand.",
    cta: "Ask about this",
    icon: CalendarCheck,
  },
  {
    slug: "organic-audience-growth",
    title: "Organic Audience Growth",
    description:
      "Sustainable, genuine growth built on relevance and community, not shortcuts or inflated numbers.",
    cta: "Grow my audience",
    icon: Sprout,
  },
  {
    slug: "content-strategy",
    title: "Content Strategy",
    description:
      "A focused plan for what to say, where to say it, and how often, rooted in your story and your audience.",
    cta: "Plan my content",
    icon: PenTool,
  },
  {
    slug: "seo-strategy",
    title: "SEO Strategy",
    description:
      "Search-friendly structure and content that helps the right people find you without paid ads.",
    cta: "Improve my search presence",
    icon: Search,
  },
  {
    slug: "digital-marketing-consulting",
    title: "Digital Marketing Consulting",
    description:
      "Expert guidance for founders and teams who want a clear roadmap and a second set of strategic eyes.",
    cta: "Book a consultation",
    icon: Compass,
  },
  {
    slug: "brand-awareness",
    title: "Brand Awareness",
    description:
      "Consistent visibility and storytelling that make your name familiar, trusted, and easy to remember.",
    cta: "Build my visibility",
    icon: Sparkles,
  },
];
