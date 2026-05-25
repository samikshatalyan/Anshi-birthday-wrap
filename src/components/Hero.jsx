import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[60%] h-[50%] top-[10%] left-[5%]
          bg-[radial-gradient(ellipse,rgba(29,185,84,0.18),transparent_70%)]" />
        <div className="absolute w-[50%] h-[60%] bottom-[5%] right-[5%]
          bg-[radial-gradient(ellipse,rgba(167,139,250,0.18),transparent_70%)]" />
        <div className="absolute w-[40%] h-[40%] top-[5%] right-[15%]
          bg-[radial-gradient(ellipse,rgba(255,107,157,0.12),transparent_60%)]" />
      </div>

      {/* Badge */}
      <motion.div {...fadeUp(0)}
        className="inline-flex items-center gap-2 bg-white/5 border border-white/10
          backdrop-blur-xl rounded-full px-5 py-2 text-[#1DB954] text-xs tracking-widest
          uppercase mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse" />
        For Anshika — with love
      </motion.div>

      {/* Title */}
      <motion.h1 {...fadeUp(0.1)}
        className="font-serif text-[clamp(2.8rem,9vw,6.5rem)] font-bold leading-[1.05]
          tracking-tight">
        Another year<br />
        of being{" "}
        <em className="text-[#FF6B9D] not-italic font-serif italic">absolutely</em>
        <br />
        <span className="text-[#1DB954]">wonderful</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p {...fadeUp(0.2)}
        className="mt-6 text-[clamp(0.95rem,2.5vw,1.15rem)] text-white/45
          max-w-[480px] leading-relaxed">
        A curated collection of everything that makes you, friendship— presented in the
        most cinematic way possible.
      </motion.p>

      {/* CTA */}
      <motion.div {...fadeUp(0.35)}
        className="mt-12 flex flex-wrap gap-4 justify-center">
        <a href="#stats"
          className="px-8 py-3.5 bg-[#1DB954] text-black rounded-full text-sm font-medium
            tracking-wide hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(29,185,84,0.35)]
            transition-all duration-200">
          Explore memories →
        </a>
        <a href="#letter"
          className="px-8 py-3.5 bg-white/5 border border-white/10 backdrop-blur-xl
            text-white rounded-full text-sm font-medium tracking-wide
            hover:-translate-y-0.5 hover:bg-white/10 transition-all duration-200">
          Read the Letter
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div {...fadeUp(0.6)}
        className="absolute bottom-10 flex flex-col items-center gap-2
          text-white/30 text-[11px] tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#1DB954] to-transparent
          animate-[scrollLine_2s_ease_infinite]" />
      </motion.div>
    </section>
  );
}
