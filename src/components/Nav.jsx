import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data";

const links = [
  { href: "#stack", label: "stack" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[var(--ink)]/85 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight text-[var(--text)] focus-ring">
          arjun<span className="text-[var(--violet)]">.</span>gade
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm text-[var(--text-dim)]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--teal)] transition-colors focus-ring">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors focus-ring">
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors focus-ring">
            <LinkedinIcon size={18} />
          </a>
          <a
            href="#contact"
            className="font-mono text-xs px-4 py-2 rounded-full border border-[var(--violet)]/50 text-[var(--text)] hover:bg-[var(--violet)]/15 transition-colors focus-ring"
          >
            say hi
          </a>
        </div>

        <button
          className="md:hidden text-[var(--text)] focus-ring"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[var(--ink-2)] border-b border-white/10 px-6 py-4 flex flex-col gap-4 font-mono text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[var(--text-dim)] hover:text-[var(--teal)]">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-[var(--text-dim)]"><GithubIcon size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-[var(--text-dim)]"><LinkedinIcon size={18} /></a>
            <a href={`mailto:${profile.email}`} className="text-[var(--text-dim)]"><Mail size={18} /></a>
          </div>
        </div>
      )}
    </header>
  );
}
