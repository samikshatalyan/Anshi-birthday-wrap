import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#stats", label: "Stats" },
  { href: "#memories", label: "Gallery" },
  { href: "#moments", label: "Moments" },
  { href: "#letter", label: "Letter" },
  { href: "#finale", label: "Finale" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] hidden md:flex gap-1
      bg-[rgba(8,8,16,0.7)] border border-white/10 backdrop-blur-xl rounded-full p-1.5">
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className={`px-4 py-1.5 rounded-full text-xs tracking-wide transition-all duration-200
            ${active === href.slice(1)
              ? "bg-white/10 text-[#F0EDE8]"
              : "text-white/40 hover:text-white/80 hover:bg-white/5"}`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
