import { ArrowUp } from "lucide-react";
import { SocialIcon } from "./SocialIcons";
import { activeSocials, navItems, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5 font-display text-2xl font-semibold">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue text-lg"
              >
                L
              </span>
              {site.name}
            </a>
            <p className="mt-4 max-w-sm leading-relaxed text-white/80">{site.intro}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/70">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-white/90 transition hover:text-white hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/70">Connect</h2>
            {activeSocials.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-3">
                {activeSocials.map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} (opens in a new tab)`}
                      className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-brand-purple"
                    >
                      <SocialIcon name={s.key} />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
            <a href="#contact" className="btn btn-primary mt-5 !py-2.5 text-sm">
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-white/75">
            © {year} {site.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-brand-ink"
          >
            Back to top
            <ArrowUp aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
