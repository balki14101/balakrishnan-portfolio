import { Briefcase, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Four years across enterprise product engineering and early-career internships."
        />

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-[19px] sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent opacity-40" />

          <div className="space-y-14">
            {experience.map((job, i) => (
              <Reveal key={job.company + job.period} delay={i * 0.1} className="relative pl-14 sm:pl-16">
                <div className="absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#08080d] border-2 border-accent flex items-center justify-center">
                  <Briefcase size={16} className="text-accent" />
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                  <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                    {job.role} <span className="text-accent">· {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {job.period}
                  </span>
                </div>

                <p className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <MapPin size={13} /> {job.location}
                </p>

                {job.description && (
                  <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                    {job.description}
                  </p>
                )}

                <div className="space-y-5">
                  {job.projects.map((proj, pi) => (
                    <div
                      key={pi}
                      className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5 sm:p-6"
                    >
                      {proj.title && (
                        <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">
                          {proj.title}
                        </h4>
                      )}
                      <ul className="space-y-2">
                        {proj.points.map((pt, ptIdx) => (
                          <li
                            key={ptIdx}
                            className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/70"
                          >
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {job.note && (
                  <p className="mt-4 text-xs italic text-slate-400 dark:text-slate-500">
                    {job.note}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
