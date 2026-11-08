import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="testimonials-title"
            eyebrow="Testimonials"
            title="Kind words from people I've worked with."
            description="Real, approved client feedback will be featured here."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={i} className="flex">
              <Reveal delay={i * 0.08} className="flex w-full">
                <figure
                  className={`flex w-full flex-col rounded-3xl p-8 ${
                    i === 1
                      ? "bg-brand-deep text-white shadow-glow"
                      : "border border-brand-lavender/70 bg-brand-canvas shadow-soft"
                  }`}
                >
                  <Quote
                    aria-hidden
                    className={`h-10 w-10 ${i === 1 ? "text-white/60" : "text-brand-purple/40"}`}
                    strokeWidth={1.5}
                  />
                  <blockquote className="mt-5 flex-1 font-display text-xl leading-relaxed">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`grid h-12 w-12 place-items-center rounded-full font-display text-lg font-semibold ${
                        i === 1 ? "bg-white/20" : "bg-brand-lavender text-brand-purple"
                      }`}
                    >
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className={`text-sm ${i === 1 ? "text-white/85" : "text-brand-ink/70"}`}>{t.role}</p>
                    </div>
                    {t.placeholder ? (
                      <span
                        className={`ml-auto rounded-full px-3 py-1 text-xs font-bold ${
                          i === 1 ? "bg-white/20" : "bg-brand-lavender text-brand-purple"
                        }`}
                      >
                        Placeholder
                      </span>
                    ) : null}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
