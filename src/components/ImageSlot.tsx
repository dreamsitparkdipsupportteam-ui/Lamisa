import Image from "next/image";
import { Camera } from "lucide-react";

type ImageSlotProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Shows a real photo when `src` is set (optimized by next/image),
 * otherwise a clearly labelled placeholder.
 */
export function ImageSlot({ src, alt, label, className = "", sizes = "(min-width: 1024px) 40vw, 90vw", priority }: ImageSlotProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-brand-soft text-brand-purple ${className}`}
    >
      <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-coral/25 blur-2xl" />
      <div aria-hidden className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-brand-blue/25 blur-2xl" />
      <Camera aria-hidden className="relative h-10 w-10" strokeWidth={1.5} />
      <span className="relative px-6 text-center text-sm font-semibold">{label}</span>
    </div>
  );
}
