"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "About",  href: "#about"   },
  { label: "Talks",  href: "#talks"   },
  { label: "Videos", href: "#videos"  },
  { label: "Contact",href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href) as HTMLElement | null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-base/80 backdrop-blur-xl border-b border-bg-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display font-bold text-lg text-txt-primary tracking-tight">
          Ayan Gupta
        </span>
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === l.href
                  ? "text-accent-glow"
                  : "text-txt-muted hover:text-txt-primary"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-sm font-semibold px-4 py-2 rounded-lg bg-accent-blue/10 border border-accent-blue/30 text-accent-glow hover:bg-accent-blue/20 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
