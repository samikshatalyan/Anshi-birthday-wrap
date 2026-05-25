// Gallery.jsx
import pic1 from "../assets/1.jpeg";
import pic2 from "../assets/2.jpeg";
import pic3 from "../assets/3.jpeg";
import pic4 from "../assets/4.jpeg";
import pic5 from "../assets/5.jpeg";
import { motion } from "framer-motion";
import { SectionLabel, SectionTitle } from "./Stats";

const MEMORIES = [
  {
    image: pic1,
    title: "The first cantt date",
    date: "the day you unknowingly became my comfort place",
    note: "still one of my favourite days ever",
    gradient: "from-[#1DB954]/15 to-[#1DB954]/4",
    tall: true,
  },

  {
    image: pic2,
    title: "Railway station conversations",
    date: "those random deep talks hit differently",
    note: "time genuinely paused there",
    gradient: "from-[#FF6B9D]/15 to-[#FF6B9D]/4",
  },

  {
    image: pic3,
    title: "The gol gappe disaster",
    date: "trying to save strangers from food poisoning 😭",
    note: '"phir khud bana lo" still haunts me',
    gradient: "from-[#A78BFA]/15 to-[#A78BFA]/4",
  },

  {
    image: pic4,
    title: "Our chaotic idiot energy",
    date: "zero plans, maximum memories",
    note: "somehow always embarrassing ourselves",
    gradient: "from-[#F5C842]/15 to-[#F5C842]/4",
  },

  {
    image: pic5,
    title: "The comfort you gave me",
    date: "even on the worst days",
    note: "you always stayed",
    gradient: "from-[#1DB954]/10 via-[#A78BFA]/10 to-[#A78BFA]/4",
  },
];

export function Gallery() {
  return (
    <section
      id="memories"
      className="py-24 px-6"
      style={{ background: "linear-gradient(to bottom, transparent, rgba(29,185,84,0.03), transparent)" }}
    >
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>Memory Gallery</SectionLabel>
        <SectionTitle>
          The moments<br />
          I keep <em className="text-[#FF6B9D]">rewinding</em>
        </SectionTitle>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-3 gap-3"
        >
          {MEMORIES.map((m, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
              className={`relative bg-gradient-to-br ${m.gradient} border border-white/10
                backdrop-blur-xl rounded-2xl overflow-hidden cursor-pointer
                hover:scale-[1.04] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                transition-all duration-300 flex flex-col justify-end
                ${m.tall ? "row-span-2 min-h-[200px]" : "aspect-square"}`}
            >
              <>
  {/* Photo */}
  <img
    src={m.image}
    alt={m.title}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/35" />

  {/* Scrapbook tape */}
  <div
    className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4
    bg-white/30 rotate-[-6deg] rounded-sm backdrop-blur-sm"
  />

  {/* Content */}
  <div className="relative z-10 mt-auto w-full text-left p-3">
    <p
      className="text-[0.65rem] uppercase tracking-[0.2em]
      text-white/60 mb-1"
    >
      memory #{i + 1}
    </p>

    <div
      className="font-semibold leading-snug text-white
      text-sm sm:text-base"
    >
      {m.title}
    </div>

    <div className="text-[0.72rem] text-white/75 mt-1 leading-relaxed">
      {m.date}
    </div>

    <div className="mt-3 text-[0.68rem] italic text-[#F5E6CC]">
      {m.note}
    </div>
  </div>
</>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Ranking ────────────────────────────────────────────────────────────────

const MOMENTS = [
  { num: "01", title: "The day you just showed up — no reason needed", desc: "That's what real friendship looks like", pct: 100, color: "#F5C842", top: true },
  { num: "02", title: "The cooking sessions we had — craving more",  desc: "Honestly, you are a great chef",        pct: 88,  color: "#1DB954" },
  { num: "03", title: "The geddiyan in cantt we had — that one particular house spot",     desc: "Best days of my life so far",          pct: 76,  color: "#A78BFA" },
  { num: "04", title: "Sharing songs that became our soundtrack",      desc: "Every playlist tells our story",        pct: 64,  color: "#FF6B9D" },
  { num: "05", title: "The circuit house visits — with soda drinks",      desc: "Memorable ones always",                  pct: 50,  color: "#1DB954" },
];

export function Ranking() {
  return (
    <section id="moments" className="py-24 px-6">
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>Top Moments</SectionLabel>
        <SectionTitle>
          Your greatest<br />
          <em className="text-[#F5C842]">hits</em> this year
        </SectionTitle>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col gap-3"
        >
          {MOMENTS.map((m) => (
            <motion.div
              key={m.num}
              variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
              className="flex items-center gap-5 bg-white/[0.04] border border-white/10
                backdrop-blur-xl rounded-2xl px-6 py-5
                hover:translate-x-1.5 hover:border-white/20 transition-all duration-250 cursor-default"
            >
              <span className={`font-serif text-[1.6rem] font-bold min-w-[36px] ${m.top ? "text-[#F5C842]" : "text-white/30"}`}>
                {m.num}
              </span>
              <div className="flex-1">
                <div className="text-[0.95rem] font-medium mb-1">{m.title}</div>
                <div className="text-xs text-white/35">{m.desc}</div>
              </div>
              <div className="hidden sm:block w-20 h-1 bg-white/8 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${m.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: m.color }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Letter ──────────────────────────────────────────────────────────────────

const LETTER = `Hie Anshi,

I don't even know where to properly begin with this.

For the last few months, we haven't really been in touch the way we used to be, and honestly, I miss you a lot more than I say out loud. Some days, something random happens and my first instinct is still to tell you about it.

I know life changes, timings change, people get busy — but even then, you've remained one of the most important people in my life.

And if I've ever disappointed you, hurt you, or made you feel unsupported in any way, I'm genuinely sorry. That was never something I would ever want for us.

You've stood by me during moments where I genuinely felt alone. You took my side when you didn't have to. You listened to me on days where even I couldn't understand myself properly. I don't think you even realise how much that meant to me.

Some people come into your life and slowly become a habit.
You became home.

No matter how distant things get sometimes, I'll always be grateful for you, for our memories, for the comfort you brought into my life, and for the kind of person you are.

I hope this year gives you peace, happiness, good health, and everything your heart quietly wishes for.

And selfishly, I hope life gives us more moments together again.

Happy Birthday My Kajukatli, truly. 🤍
`;

export function Letter() {
  return (
    <section
      id="letter"
      className="py-24 px-6"
      style={{ background: "linear-gradient(to bottom, transparent, rgba(255,107,157,0.04), transparent)" }}
    >
      <div className="max-w-[700px] mx-auto">
        <SectionLabel>Personal Message</SectionLabel>
        <SectionTitle>
          A letter I've been<br />
          <em className="text-[#FF6B9D]">meaning to write</em>
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white/[0.04] border border-white/10 backdrop-blur-[30px]
            rounded-3xl p-10 sm:p-14 overflow-hidden"
        >
          {/* Background glows */}
          <div className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(255,107,157,0.10), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(167,139,250,0.10), transparent 60%)" }} />

          {/* Seal */}
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-8
            shadow-[0_8px_32px_rgba(255,107,157,0.30)]"
            style={{ background: "linear-gradient(135deg, #FF6B9D, #A78BFA)" }}>
            💌
          </div>

          <p className="font-serif text-[clamp(1rem,2.5vw,1.2rem)] leading-[1.9]
            text-white/85 whitespace-pre-line relative z-10">
            {LETTER}
          </p>

          <p className="mt-8 font-serif italic text-[#FF6B9D] text-lg relative z-10">
            — with love sam, always 🌿
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Finale ──────────────────────────────────────────────────────────────────

import { useState } from "react";

export function Finale() {
  const [boom, setBoom] = useState(false);

  return (
    <section
      id="finale"
      className="relative min-h-[90vh] flex flex-col items-center justify-center
        text-center px-6 overflow-hidden"
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(29,185,84,0.12),transparent 70%), radial-gradient(ellipse 40% 30% at 20% 80%, rgba(255,107,157,0.10),transparent 60%), radial-gradient(ellipse 40% 30% at 80% 20%, rgba(167,139,250,0.10),transparent 60%)" }} />

      {/* Watermark year */}
      <span className="absolute font-serif font-bold select-none pointer-events-none opacity-[0.07]"
        style={{ fontSize: "clamp(5rem,20vw,14rem)", background: "linear-gradient(135deg,#1DB954,#A78BFA,#FF6B9D)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
        🎂
      </span>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <div className="flex gap-4 justify-center text-[2.5rem] mb-8 animate-bounce">
          🎉 🥳 ✨ 🎂 🌟
        </div>

        <h2 className="font-serif text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.1] mb-5">
          Happy<br />
          <span style={{ background: "linear-gradient(135deg,#1DB954,#FF6B9D)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            Birthday
          </span>
        </h2>

        <p className="text-[clamp(0.9rem,2vw,1.1rem)] text-white/45 max-w-[400px]
          mx-auto leading-relaxed mb-10">
          Here's to you — to another year of magic, memories, and being completely,
          wonderfully yourself.
        </p>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setBoom(!boom)}
          className="px-8 py-3.5 bg-[#1DB954] text-black rounded-full text-sm font-medium
            tracking-wide hover:shadow-[0_12px_40px_rgba(29,185,84,0.35)] transition-shadow duration-200"
        >
          Celebrate! 🎊
        </motion.button>
      </motion.div>

      {/* Confetti burst */}
      {boom && <Confetti key={String(boom)} />}

      <p className="absolute bottom-8 text-[0.7rem] text-white/20 tracking-widest uppercase">
        Made with love · Birthday Wrapped
      </p>
    </section>
  );
}

function Confetti() {
  const COLORS = ["#1DB954","#FF6B9D","#A78BFA","#F5C842","#60A5FA","#FB923C"];
  const dots = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    duration: 2.5 + Math.random() * 3,
    delay: Math.random() * 2,
    size: 4 + Math.random() * 6,
    round: Math.random() > 0.5,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <motion.div
          key={d.id}
          initial={{ y: -20, opacity: 1 }}
          animate={{ y: "110vh", opacity: 0, rotate: 720 }}
          transition={{ duration: d.duration, delay: d.delay, ease: "linear" }}
          style={{
            position: "absolute",
            left: d.left,
            top: 0,
            width: d.size,
            height: d.size,
            background: d.color,
            borderRadius: d.round ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
}
