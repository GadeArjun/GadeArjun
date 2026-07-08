import { motion } from "framer-motion";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--violet)] mb-3">// work experience</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text)]">
            Where it's been running in production.
          </h2>
        </div>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--violet)] via-white/15 to-transparent" />
          {experience.map((job, i) => (
            <motion.div
              key={job.org}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pb-4"
            >
              <span className="absolute -left-8 sm:-left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-[var(--ink)] border-2 border-[var(--violet)]" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <h3 className="font-display font-semibold text-xl text-[var(--text)]">{job.role}</h3>
                <span className="font-mono text-xs text-[var(--teal)]">{job.period}</span>
              </div>
              <p className="font-mono text-sm text-[var(--text-faint)] mb-4">{job.org}</p>
              <ul className="space-y-2.5">
                {job.points.map((pt, idx) => (
                  <li key={idx} className="flex gap-3 text-[var(--text-dim)] text-sm sm:text-[15px] leading-relaxed">
                    <span className="text-[var(--violet)] mt-1.5">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
