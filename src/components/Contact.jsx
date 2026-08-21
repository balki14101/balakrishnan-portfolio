import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "balki14101",
    href: profile.github,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/balki14101",
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[36rem] h-[20rem] bg-accent/15 dark:bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-accent mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Let's build something great together
          </h2>
          <p className="mt-5 text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, my inbox is
            always open.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </Reveal>

        <Reveal delay={0.25} className="mt-14 grid sm:grid-cols-2 gap-4 text-left">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] px-5 py-4 hover:border-accent/50 transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <l.icon size={17} />
                </span>
                <span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400">{l.label}</span>
                  <span className="block text-sm font-medium text-slate-800 dark:text-slate-200 break-all">
                    {l.value}
                  </span>
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="text-slate-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
              />
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.3} className="mt-8 flex items-center justify-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <MapPin size={14} />
          {profile.location}
        </Reveal>
      </div>
    </section>
  );
}
