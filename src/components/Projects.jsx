import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--violet)] mb-3">// featured projects</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text)]">
            Shipped, deployed, and still running.
          </h2>
          <p className="mt-4 text-[var(--text-dim)]">
            Every card below links to a live deployment and the source behind it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className="group relative rounded-xl border border-white/10 bg-[var(--surface)]/60 p-6 flex flex-col hover:-translate-y-1 hover:border-[var(--violet)]/50 hover:shadow-xl hover:shadow-[var(--violet)]/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-semibold text-xl text-[var(--text)]">{p.name}</h3>
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--teal)]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--teal)] opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--teal)]" />
                  </span>
                  {p.status}
                </span>
              </div>
              <p className="font-mono text-xs text-[var(--amber)] mb-3">{p.tagline}</p>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed mb-5 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2 py-1 rounded bg-white/5 text-[var(--text-faint)]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text)] hover:text-[var(--teal)] transition-colors focus-ring"
                >
                  Live demo <ExternalLink size={13} />
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-dim)] hover:text-[var(--text)] transition-colors focus-ring"
                >
                  Source <GithubIcon size={13} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
