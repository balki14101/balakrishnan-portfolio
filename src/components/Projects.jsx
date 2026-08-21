import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-slate-50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built on my own time"
          description="Personal projects exploring ideas end-to-end — from data model to UI."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.1}
              className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {p.name}
                </h3>
                <span
                  className={`text-[10px] font-mono uppercase tracking-wide px-2 py-1 rounded-full ${
                    p.status === "In Progress"
                      ? "bg-amber-400/15 text-amber-600 dark:text-amber-400"
                      : "bg-emerald-400/15 text-emerald-600 dark:text-emerald-400"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono px-2 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all"
              >
                {p.linkLabel}
                <ArrowUpRight size={15} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
