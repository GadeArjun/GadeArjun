import { motion } from "framer-motion";
import { stack } from "../data";

export default function Stack() {
  return (
    <section id="stack" className="relative py-28 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--violet)] mb-3">// system architecture</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text)]">
            One stack, six layers, all shipped in production.
          </h2>
          <p className="mt-4 text-[var(--text-dim)]">
            Each layer below is a real part of the same MERN + AI systems I've deployed — from the client
            someone touches down to the sockets and models running underneath.
          </p>
        </div>

        <div className="space-y-3">
          {stack.map((layer, i) => (
            <motion.div
              key={layer.layer}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative rounded-lg border border-white/10 bg-[var(--surface)]/60 hover:bg-[var(--surface)] hover:border-[var(--violet)]/40 transition-colors px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
            >
              <div className="flex items-baseline gap-3 sm:w-48 shrink-0">
                <span className="font-mono text-[11px] text-[var(--text-faint)]">{`0${i + 1}`}</span>
                <h3 className="font-display font-semibold text-lg text-[var(--text)]">{layer.layer}</h3>
              </div>
              <span className="hidden sm:inline font-mono text-[11px] text-[var(--teal)] w-24 shrink-0">/{layer.tag}</span>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 text-[var(--text-dim)] group-hover:text-[var(--text)] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
