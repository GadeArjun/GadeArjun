import { eventTicker } from "../data";

export default function EventTicker() {
  const items = [...eventTicker, ...eventTicker];

  return (
    <div className="relative border-y border-white/10 bg-[var(--surface)]/60 backdrop-blur-sm overflow-hidden py-2.5 select-none">
      <div className="flex w-max animate-ticker gap-8 whitespace-nowrap font-mono text-xs">
        {items.map((evt, i) => (
          <span key={i} className="flex items-center gap-2 text-[var(--text-dim)]">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                i % 3 === 0 ? "bg-[var(--teal)]" : "bg-[var(--violet)]"
              }`}
            />
            <span className="text-[var(--text-faint)]">socket.on</span>
            <span className="text-[var(--text)]">"{evt}"</span>
          </span>
        ))}
      </div>
    </div>
  );
}
