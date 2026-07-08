import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, bootLines } from "../data";

function useTypedLines(lines, speed = 22) {
  const [done, setDone] = useState([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let cancelled = false;

    function typeNext() {
      if (cancelled) return;
      if (lineIdx >= lines.length) return;
      const line = lines[lineIdx];
      if (charIdx <= line.length) {
        setCurrent(line.slice(0, charIdx));
        charIdx++;
        setTimeout(typeNext, speed);
      } else {
        setDone((d) => [...d, line]);
        setCurrent("");
        lineIdx++;
        charIdx = 0;
        setTimeout(typeNext, 260);
      }
    }
    const start = setTimeout(typeNext, 400);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [lines, speed]);

  return { done, current };
}

export default function Hero() {
  const { done, current } = useTypedLines(bootLines);

  return (
    <section id="top" className="relative min-h-screen flex items-center bg-noise-grid pt-28 pb-16">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[860px] rounded-full opacity-[0.16] blur-[110px]"
        style={{ background: "radial-gradient(closest-side, var(--violet), transparent)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-widest uppercase text-[var(--teal)] mb-5"
          >
            {profile.location} · available for full-time roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-[2.6rem] sm:text-6xl leading-[1.05] tracking-tight text-[var(--text)]"
          >
            Building realtime & AI
            <br />
            products end-to-end.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-[var(--text-dim)] text-base sm:text-lg leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--violet)] text-white font-medium px-6 py-3 text-sm hover:bg-[var(--violet-dim)] transition-colors focus-ring"
            >
              View projects
              <ArrowDown size={15} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 text-[var(--text)] font-medium px-6 py-3 text-sm hover:border-white/35 transition-colors focus-ring"
            >
              <Mail size={15} />
              Contact me
            </a>
            <div className="flex items-center gap-3 pl-1">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors focus-ring">
                <GithubIcon size={19} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors focus-ring">
                <LinkedinIcon size={19} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="rounded-xl border border-white/10 bg-[var(--surface)]/80 shadow-2xl shadow-black/40 overflow-hidden"
        >
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[var(--surface-2)]/60">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[11px] text-[var(--text-faint)]">arjun@portfolio — zsh</span>
          </div>
          <div className="p-5 font-mono text-[13px] leading-6 min-h-[190px]">
            {done.map((line, i) => (
              <div key={i} className={line.startsWith(">") ? "text-[var(--teal)]" : "text-[var(--text)]"}>
                {line}
              </div>
            ))}
            <div className={current.startsWith(">") ? "text-[var(--teal)]" : "text-[var(--text)]"}>
              {current}
              <span className="cursor-blink text-[var(--amber)]">▍</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
