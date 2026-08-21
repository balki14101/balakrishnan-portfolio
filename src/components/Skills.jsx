import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-slate-50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies I work with"
          description="A full-stack toolkit spanning mobile, web, backend, and the infrastructure that ships it."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 0.08}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 sm:p-7"
            >
              <h3 className="font-display font-semibold text-slate-900 dark:text-white mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs sm:text-sm font-mono px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
