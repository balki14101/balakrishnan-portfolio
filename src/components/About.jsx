import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="About Me" title="Building products that hold up in production" />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <Reveal delay={0.1} className="md:col-span-3">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5 hover:border-accent/50 dark:hover:border-accent/50 transition-colors"
                >
                  <p className="font-display text-3xl font-semibold text-gradient">{s.value}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
