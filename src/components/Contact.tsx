import { Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { SocialIcon } from "./SocialIcons";
import { activeSocials, site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-brand-canvas via-brand-lavender/60 to-brand-lavender" />

      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-purple">Contact</p>
          <h2
            id="contact-title"
            className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Have a project in mind? <span className="gradient-text">Let&apos;s grow together.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-brand-ink/75">
            Tell me where you are and where you want to be. I work with clients around the world and read every
            inquiry personally.
          </p>

          <ul className="mt-10 space-y-3">
            <li>
              {site.email ? (
                <a
                  href={`mailto:${site.email}`}
                  className="card flex items-center gap-4 p-4 transition hover:-translate-y-0.5 hover:border-brand-purple/40"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-lavender text-brand-purple">
                    <Mail aria-hidden className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-brand-ink/60">Email</span>
                    <span className="font-semibold">{site.email}</span>
                  </span>
                </a>
              ) : (
                <div className="card flex items-center gap-4 p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-lavender text-brand-purple">
                    <Mail aria-hidden className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-brand-ink/60">
                      Email (placeholder)
                    </span>
                    <span className="font-semibold text-brand-ink/70">{site.placeholderEmail}</span>
                  </span>
                </div>
              )}
            </li>

            {activeSocials.map((s) => (
              <li key={s.key}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 p-4 transition hover:-translate-y-0.5 hover:border-brand-purple/40"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-lavender text-brand-purple">
                    <SocialIcon name={s.key} />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-brand-ink/60">
                      {s.label}
                    </span>
                    <span className="font-semibold">Follow along</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
