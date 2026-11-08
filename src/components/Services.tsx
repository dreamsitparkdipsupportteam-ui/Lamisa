import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ServiceCta } from "./ServiceCta";
import { services } from "@/content/services";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="Everything you need to grow, nothing you don't."
            description="Focused services that work together to build visibility, trust, and an audience that genuinely cares."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <li key={service.slug} className="flex">
              <Reveal delay={(i % 4) * 0.07} className="flex w-full">
                <article className="card group flex w-full flex-col p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-purple/40 hover:shadow-glow">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue text-white">
                    <service.icon aria-hidden className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold leading-snug">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-brand-ink/70">{service.description}</p>
                  <ServiceCta label={service.cta} service={service.title} />
                </article>
              </Reveal>
            </li>
          ))}

          <li className="flex">
            <Reveal delay={0.21} className="flex w-full">
              <div className="flex w-full flex-col justify-between rounded-3xl bg-brand-deep p-7 text-white shadow-glow">
                <div>
                  <h3 className="font-display text-xl font-semibold leading-snug">Not sure where to start?</h3>
                  <p className="mt-3 leading-relaxed text-white/90">
                    Tell me about your goals and we&apos;ll work out the right mix together.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="btn mt-8 bg-white text-brand-purple hover:-translate-y-0.5 hover:shadow-soft"
                >
                  Let&apos;s talk
                  <ArrowUpRight aria-hidden className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}
