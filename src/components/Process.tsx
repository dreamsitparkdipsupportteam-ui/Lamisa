import { Compass, Rocket, Search, TrendingUp, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { processSteps } from "@/content/site";

const icons: LucideIcon[] = [Search, Compass, Rocket, TrendingUp];

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="process-title"
            eyebrow="Work process"
            title="A clear path from first call to steady growth."
            description="A simple, transparent process so you always know what is happening and why."
          />
        </Reveal>

        <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute left-[12%] right-[12%] top-[3.1rem] hidden h-0.5 bg-gradient-to-r from-brand-purple/40 via-brand-blue/40 to-brand-coral/40 lg:block"
        />
        <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => {
            const Icon = icons[i] ?? Search;
            return (
              <li key={step.title} className="relative">
                <Reveal delay={i * 0.08} className="h-full">
                  <div className="card relative h-full p-7">
                    <div className="flex items-center justify-between">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue text-white">
                        <Icon aria-hidden className="h-6 w-6" />
                      </span>
                      <span aria-hidden className="font-display text-5xl font-semibold text-brand-lavender">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-brand-ink/70">{step.description}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
        </div>
      </div>
    </section>
  );
}
