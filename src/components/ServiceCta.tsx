"use client";

import { ArrowRight } from "lucide-react";

export const SERVICE_EVENT = "lamisa:service-selected";

/** Link to the contact form that also pre-selects the service of interest. */
export function ServiceCta({ label, service }: { label: string; service: string }) {
  return (
    <a
      href="#contact"
      onClick={() => {
        window.dispatchEvent(new CustomEvent(SERVICE_EVENT, { detail: service }));
      }}
      className="group/cta mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-brand-purple"
    >
      {label}
      <ArrowRight
        aria-hidden
        className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1"
      />
    </a>
  );
}
