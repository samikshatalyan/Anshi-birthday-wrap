import { motion } from "framer-motion";

const STATS = [
  { emoji: "📞", number: "250526", label: "Random calls that fixed everything", color: "#1DB954", glow: "rgba(29,185,84,0.12)" },
  { emoji: "💌", number: "∞",     label: "Messages that made my day",  color: "#FF6B9D", glow: "rgba(255,107,157,0.12)" },
  { emoji: "🚗", number: "2809",   label: "Drives with no destination",       color: "#A78BFA", glow: "rgba(167,139,250,0.12)" },
  { emoji: "⭐", number: "#1",    label: "Rank in my heart",            color: "#F5C842", glow: "rgba(245,200,66,0.12)" },
  { emoji: "🎵", number: "365",   label: "Songs that remind me of you",        color: "#1DB954", glow: "rgba(29,185,84,0.08)" },
  { emoji: "🫂", number: "100%",  label: "Always there for me",         color: "#FF6B9D", glow: "rgba(255,107,157,0.08)" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Stats() {
  return (
    <section id="stats" className="py-24 px-6">
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>Friendship Analytics</SectionLabel>
        <SectionTitle>
          So far<br />
          <em className="text-[#1DB954]">by the numbers</em>
        </SectionTitle>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={item}>
              <StatCard {...s} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ emoji, number, label, color, glow }) {
  return (
    <div
      className="relative overflow-hidden bg-white/[0.04] border border-white/10
        backdrop-blur-xl rounded-2xl p-6 group
        hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
        transition-all duration-300"
    >
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at 80% 20%, ${glow}, transparent 70%)` }}
      />
      <div className="text-3xl mb-4">{emoji}</div>
      <div className="font-serif text-[2.4rem] font-bold leading-none mb-1.5" style={{ color }}>
        {number}
      </div>
      <div className="text-xs text-white/40 tracking-wide">{label}</div>
    </div>
  );
}

export function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.18em]
      uppercase text-[#1DB954] mb-4">
      <span className="block w-6 h-px bg-[#1DB954]" />
      {children}
    </div>
  );
}

export function SectionTitle({ children }) {
  return (
    <h2 className="font-serif text-[clamp(1.8rem,5vw,3rem)] font-bold leading-[1.15] mb-12">
      {children}
    </h2>
  );
}
