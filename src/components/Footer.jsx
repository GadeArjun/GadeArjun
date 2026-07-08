import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[var(--text-faint)]">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React, Vite &amp; Tailwind CSS.</span>
        <span>status: <span className="text-[var(--teal)]">online</span></span>
      </div>
    </footer>
  );
}
