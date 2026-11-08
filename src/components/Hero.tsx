"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PenTool, TrendingUp, Users } from "lucide-react";
import { ImageSlot } from "./ImageSlot";
import { site } from "@/content/site";

const highlights = [
  { value: `${site.experienceYears} Years`, label: "of Experience" },
  { value: "Organic", label: "Growth" },
  { value: "Digital", label: "Strategy" },
];

const chips = [
  { icon: TrendingUp, text: "Organic Growth", pos: "left-0 top-[14%] sm:-left-8", tint: "text-brand-purple bg-brand-lavender" },
  { icon: PenTool, text: "Content Strategy", pos: "right-0 top-[48%] sm:-right-8", tint: "text-brand-blue bg-[#DCE8FF]" },
  { icon: Users, text: "Real Audiences", pos: "bottom-[8%] left-2 sm:-left-4", tint: "text-[#C23A46] bg-[#FFE3E5]" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-lavender blur-3xl" />
        <div className="absolute right-[-8rem] top-40 h-[28rem] w-[28rem] rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-coral/15 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-white px-4 py-2 text-sm font-semibold text-brand-purple shadow-soft"
          >
            <span aria-hidden className="h-2 w-2 rounded-full bg-brand-coral" />
            {site.name} · {site.title}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            id="hero-title"
            className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Let&apos;s Turn Your Digital Presence Into <span className="gradient-text">Organic Growth.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-brand-ink/75 sm:text-xl"
          >
            Helping artists, brands, and organizations build visibility, grow their audience, and achieve meaningful
            results through strategic digital marketing.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#contact" className="btn btn-primary">
              Let&apos;s Work Together
              <ArrowRight aria-hidden className="h-5 w-5" />
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              Explore My Work
            </a>
          </motion.div>

          <motion.dl
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-brand-lavender rounded-3xl border border-brand-lavender/80 bg-white/80 py-5 shadow-soft backdrop-blur"
          >
            {highlights.map((h) => (
              <div key={h.value} className="px-3 text-center sm:px-6">
                <dt className="font-display text-xl font-semibold text-brand-purple sm:text-2xl">{h.value}</dt>
                <dd className="mt-0.5 text-xs font-semibold text-brand-ink/70 sm:text-sm">{h.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div aria-hidden className="absolute -inset-5 rounded-[3rem] bg-gradient-to-tr from-brand-lavender via-white to-[#DCE8FF] blur-2xl" />
          <div className="relative aspect-[4/5] rounded-t-[999px] rounded-b-[2.5rem] bg-gradient-to-br from-brand-purple via-[#5B5CFF] to-brand-blue p-3 shadow-glow">
            <ImageSlot
              src={site.images.hero}
              alt={`Portrait of ${site.name}`}
              label="Your portrait goes here"
              className="h-full w-full rounded-t-[999px] rounded-b-[2rem]"
              sizes="(min-width: 1024px) 38vw, 80vw"
              priority
            />
          </div>

          {chips.map((chip, i) => (
            <div
              key={chip.text}
              className={`absolute ${chip.pos} flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-soft ${
                reduce ? "" : "animate-float"
              }`}
              style={{ animationDelay: `${i * 1.2}s` }}
            >
              <span className={`grid h-8 w-8 place-items-center rounded-xl ${chip.tint}`}>
                <chip.icon aria-hidden className="h-4 w-4" />
              </span>
              <span className="text-sm font-bold">{chip.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
