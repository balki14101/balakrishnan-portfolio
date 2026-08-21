import { Award, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { achievements, education } from "../data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Recognition" title="Achievements & Education" />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5">
            {achievements.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 0.1}
                className="flex gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5 sm:p-6"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Award size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{a.title}</h3>
                  <p className="text-xs font-mono text-accent mb-2">{a.subtitle}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.15}
            className="flex gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5 sm:p-6 h-fit"
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-accent-2/10 flex items-center justify-center">
              <GraduationCap size={20} className="text-accent-2" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{education.degree}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{education.school}</p>
              <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mt-2">
                {education.period}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
