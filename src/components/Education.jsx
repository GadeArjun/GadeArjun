import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="relative py-28 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs tracking-widest uppercase text-[var(--violet)] mb-3">// education</p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-white/10 bg-[var(--surface)]/60 p-7 sm:p-9 flex flex-col sm:flex-row gap-6 sm:items-center"
        >
          <div className="h-14 w-14 rounded-lg bg-[var(--violet)]/15 border border-[var(--violet)]/30 flex items-center justify-center shrink-0">
            <GraduationCap size={26} className="text-[var(--violet)]" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-xl text-[var(--text)] mb-1.5">{education.degree}</h3>
            <p className="text-[var(--text-dim)] text-sm mb-1">{education.school}</p>
            <p className="text-[var(--text-faint)] text-sm mb-3">{education.university}</p>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-white/5 text-[var(--teal)]">{education.year}</span>
              <span className="px-2.5 py-1 rounded bg-white/5 text-[var(--amber)]">{education.cgpa}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
