import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono text-xs">Built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
