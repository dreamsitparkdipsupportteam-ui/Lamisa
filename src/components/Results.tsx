import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { stats } from "@/content/site";

export function Results() {
  const hasPlaceholders = stats.some((s) => !s.verified);

  return (
    <section id="results" aria-labelledby="results-title" className="relative overflow-hidden bg-brand-deep py-20 text-white sm:py-28">
      <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-coral/25 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            id="results-title"
            invert
            eyebrow="Results & achievements"
            title="Growth you can measure."
            description="Numbers matter, but only honest ones. Verified figures appear here as they are confirmed."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <li key={stat.label}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="h-full rounded-3xl border border-white/25 bg-white/10 p-7 backdrop-blur">
                  <p
                    className={`font-display text-6xl font-semibold leading-none ${stat.verified ? "" : "text-white/70"}`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-4 text-base font-semibold">{stat.label}</p>
                  {!stat.verified ? (
                    <p className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
                      Placeholder
                    </p>
                  ) : null}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {hasPlaceholders ? (
          <p className="mt-8 text-center text-sm text-white/85">
            Placeholder fields are shown until verified figures are added.
          </p>
        ) : null}
      </div>
    </section>
  );
}
