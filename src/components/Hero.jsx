import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden"
    >
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-accent/25 dark:bg-accent/20 rounded-full blur-[110px] animate-blob" />
        <div
          className="absolute top-1/3 -right-32 w-[26rem] h-[26rem] bg-accent-2/25 dark:bg-accent-2/20 rounded-full blur-[110px] animate-blob"
          style={{ animationDelay: "-6s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--tw-gradient-stops))] from-transparent via-transparent to-white dark:to-[#08080d]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-sm text-accent tracking-wide mb-5 flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for new opportunities
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display font-semibold text-4xl sm:text-6xl leading-[1.08] tracking-tight text-slate-900 dark:text-white"
            >
              Hi, I'm {profile.name.split(" ")[0]} —
              <br />
              <span className="text-gradient">{profile.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm hover:opacity-90 transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                View My Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 font-medium text-sm hover:border-accent hover:text-accent transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex items-center gap-5 text-slate-500 dark:text-slate-400"
            >
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
              <span className="w-px h-4 bg-slate-300 dark:bg-white/15" />
              <span className="flex items-center gap-1.5 text-sm">
                <MapPin size={15} />
                {profile.location}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="justify-self-center md:justify-self-end"
          >
            <div className="relative w-44 h-44 sm:w-56 sm:h-56">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent to-accent-2 opacity-90 rotate-6" />
              <div className="absolute inset-0 rounded-[2rem] bg-white dark:bg-[#0f0f16] border border-slate-200 dark:border-white/10 flex items-center justify-center -rotate-3 shadow-xl">
                <span className="font-display font-bold text-5xl sm:text-6xl text-gradient">
                  {profile.initials}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
