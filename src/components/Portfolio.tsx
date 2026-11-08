"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Flag, Lightbulb, Target, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project } from "@/content/projects";

function ProjectVisual({ project, className = "" }: { project: Project; className?: string }) {
  if (project.image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} ${className}`}>
      <div aria-hidden className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/20" />
      <div aria-hidden className="absolute -bottom-14 -left-10 h-52 w-52 rounded-full bg-white/10" />
      <div aria-hidden className="absolute bottom-6 right-6 grid grid-cols-3 gap-1.5 opacity-60">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
        ))}
      </div>
    </div>
  );
}

function CaseStudyDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const sections = [
    { icon: Target, title: "Challenge", text: project.challenge },
    { icon: Lightbulb, title: "Strategy", text: project.strategy },
    { icon: Flag, title: "Results", text: project.results },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-brand-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] bg-white shadow-glow sm:rounded-[2rem]"
        initial={reduce ? false : { y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <ProjectVisual project={project} className="h-48 sm:h-60" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-brand-ink shadow-soft"
          >
            <X aria-hidden className="h-5 w-5" />
          </button>
          {project.sample ? (
            <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-purple">
              Sample placeholder
            </span>
          ) : null}
        </div>

        <div className="p-6 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-purple">{project.category}</p>
          <h3 id="case-study-title" className="mt-2 font-display text-3xl font-semibold leading-tight">
            {project.title}
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-brand-ink/75">{project.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Services provided">
            {project.services.map((s) => (
              <li key={s} className="rounded-full bg-brand-lavender px-3.5 py-1.5 text-sm font-semibold text-brand-purple">
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4">
            {sections.map((s) => (
              <div key={s.title} className="rounded-2xl border border-brand-lavender bg-brand-canvas p-5">
                <h4 className="flex items-center gap-2 font-display text-lg font-semibold">
                  <s.icon aria-hidden className="h-5 w-5 text-brand-purple" />
                  {s.title}
                </h4>
                <p className="mt-2 leading-relaxed text-brand-ink/75">{s.text}</p>
              </div>
            ))}
          </div>

          <a href="#contact" onClick={onClose} className="btn btn-primary mt-8 w-full sm:w-auto">
            Discuss a similar project
            <ArrowRight aria-hidden className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const close = () => {
    setSelected(null);
    triggerRef.current?.focus();
  };

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="portfolio-title"
            eyebrow="Portfolio"
            title="Selected work and case studies."
            description="Each project tells the story: the challenge, the strategy, and the outcome."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <li key={project.slug} className="flex">
              <Reveal delay={i * 0.08} className="flex w-full">
                <article className="card group flex w-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                  <div className="relative">
                    <ProjectVisual project={project} className="aspect-[16/11]" />
                    {project.sample ? (
                      <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-purple shadow-soft">
                        Sample placeholder
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-purple">{project.category}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug">{project.title}</h3>
                    <p className="mt-3 leading-relaxed text-brand-ink/70">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Services provided">
                      {project.services.map((s) => (
                        <li key={s} className="rounded-full bg-brand-lavender/70 px-3 py-1 text-xs font-semibold text-brand-purple">
                          {s}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={(e) => {
                        triggerRef.current = e.currentTarget;
                        setSelected(project);
                      }}
                      className="group/btn mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-brand-purple"
                    >
                      View case study
                      <ArrowRight
                        aria-hidden
                        className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                      />
                    </button>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {selected ? <CaseStudyDialog key={selected.slug} project={selected} onClose={close} /> : null}
      </AnimatePresence>
    </section>
  );
}
