import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-[#08080d]/70 backdrop-blur-lg border-b border-slate-200/70 dark:border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-lg text-slate-900 dark:text-white tracking-tight"
        >
          Balki<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-full border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:border-accent hover:text-accent transition-colors"
          >
            Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-accent hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-accent hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-accent hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-slate-600 dark:text-slate-300"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="p-2 rounded-full text-slate-600 dark:text-slate-300"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#08080d]/95 backdrop-blur-lg border-b border-slate-200/70 dark:border-white/10"
          >
            <ul className="px-5 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-slate-700 dark:text-slate-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm font-medium px-4 py-2 rounded-full border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200"
                >
                  Resume
                </a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-300">
                  <GithubIcon size={20} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-300">
                  <LinkedinIcon size={20} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
