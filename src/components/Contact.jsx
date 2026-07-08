import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 border-t border-white/10 bg-noise-grid">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-[var(--surface)]/70 overflow-hidden"
        >
          <div className="flex items-center gap-1.5 px-5 py-3 border-b border-white/10 bg-[var(--surface-2)]/60">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[11px] text-[var(--text-faint)]">contact.sh</span>
          </div>

          <div className="p-8 sm:p-12">
            <p className="font-mono text-xs tracking-widest uppercase text-[var(--teal)] mb-3">// let's build something</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text)] mb-4">
              Open to full-time roles and interesting problems.
            </h2>
            <p className="text-[var(--text-dim)] max-w-xl mb-9">
              Whether it's a realtime product, an AI-powered workflow, or a MERN application that needs to
              ship — I'd like to hear about it.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3.5 hover:border-[var(--violet)]/50 hover:bg-white/5 transition-colors focus-ring"
              >
                <Mail size={17} className="text-[var(--violet)]" />
                <span className="font-mono text-sm text-[var(--text)]">{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3.5 hover:border-[var(--violet)]/50 hover:bg-white/5 transition-colors focus-ring"
              >
                <Phone size={17} className="text-[var(--violet)]" />
                <span className="font-mono text-sm text-[var(--text)]">{profile.phone}</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3.5 hover:border-[var(--violet)]/50 hover:bg-white/5 transition-colors focus-ring"
              >
                <GithubIcon size={17} className="text-[var(--violet)]" />
                <span className="font-mono text-sm text-[var(--text)]">github.com/GadeArjun</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3.5 hover:border-[var(--violet)]/50 hover:bg-white/5 transition-colors focus-ring"
              >
                <LinkedinIcon size={17} className="text-[var(--violet)]" />
                <span className="font-mono text-sm text-[var(--text)]">in/arjun-gade</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
