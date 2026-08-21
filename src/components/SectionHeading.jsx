import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCenter = align === "center";
  return (
    <Reveal className={`mb-14 max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
