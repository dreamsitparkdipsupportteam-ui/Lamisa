import { Ear, Leaf, LineChart } from "lucide-react";
import { Reveal } from "./Reveal";
import { ImageSlot } from "./ImageSlot";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/content/site";

const pillars = [
  {
    icon: Ear,
    title: "Listen first",
    text: "Every brand has its own voice and audience. Strategy starts with understanding both.",
  },
  {
    icon: Leaf,
    title: "Grow organically",
    text: "Real connection over shortcuts. Communities built on trust last longer than spikes in numbers.",
  },
  {
    icon: LineChart,
    title: "Learn and refine",
    text: "Clear goals, honest reporting, and steady improvement based on what the data shows.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div aria-hidden className="absolute -bottom-5 -right-5 h-full w-full rounded-[2.5rem] bg-gradient-to-br from-brand-coral/30 to-brand-lavender" />
            <ImageSlot
              src={site.images.about}
              alt={`${site.name}, digital marketing specialist`}
              label="Your professional photo goes here"
              className="relative aspect-[4/5] rounded-[2.5rem] shadow-glow"
              sizes="(min-width: 1024px) 34vw, 85vw"
            />
            <div className="absolute -left-4 bottom-8 rounded-2xl bg-white px-5 py-3 shadow-soft">
              <p className="font-display text-3xl font-semibold text-brand-purple">{site.experienceYears}</p>
              <p className="text-xs font-bold text-brand-ink/70">Years of experience</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            id="about-title"
            align="left"
            eyebrow="About me"
            title={`Hi, I'm ${site.name}. Strategy with a human touch.`}
          />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-brand-ink/75">
            <p>
              I&apos;m a digital marketing professional with {site.experienceYears} years of experience helping
              artists, brands, and organizations show up online with confidence.
            </p>
            <p>
              My approach is simple: understand who you are, learn who you want to reach, and build a presence that
              connects with them. I focus on genuine, organic growth through thoughtful content, smart strategy, and
              consistent community building.
            </p>
          </div>

          <ul className="mt-9 grid gap-4 sm:grid-cols-3">
            {pillars.map((p) => (
              <li key={p.title} className="card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-lavender text-brand-purple">
                  <p.icon aria-hidden className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-ink/70">{p.text}</p>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary mt-9">
            Start a conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
