type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
  id,
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p
        className={`text-sm font-bold uppercase tracking-[0.18em] ${
          invert ? "text-white/85" : "text-brand-purple"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl ${
          invert ? "text-white" : "text-brand-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-lg leading-relaxed ${invert ? "text-white/90" : "text-brand-ink/70"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
