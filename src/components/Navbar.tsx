"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/content/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? "border-b border-brand-lavender/70 bg-brand-canvas/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="container-page flex h-[72px] items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5 font-display text-2xl font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue text-lg text-white"
          >
            L
          </span>
          {site.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                aria-current={active === item.id ? "true" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === item.id
                    ? "bg-brand-lavender text-brand-purple"
                    : "text-brand-ink/75 hover:text-brand-purple"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex">
            Let&apos;s Talk
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-lavender bg-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="container-page pb-6 md:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-lg font-semibold hover:bg-brand-lavender/60"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-4 w-full">
            Let&apos;s Talk
          </a>
        </div>
      ) : null}
    </header>
  );
}
