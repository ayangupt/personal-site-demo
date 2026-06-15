"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const TAGLINES = [
  "Building the Agentic Future.",
  "Helping Developers Move Faster.",
  "Tech Enthusiast. Educator. Advocate.",
  "Cloud Advocate @ Microsoft.",
];

function useTypewriter(lines: string[], speed = 55, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [lineIdx, setLineIdx]  = useState(0);
  const [charIdx, setCharIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIdx];
    const delay = deleting ? speed / 2 : speed;
    const t = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplay(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), pause);
      } else if (deleting && charIdx > 0) {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      } else {
        setDeleting(false);
        setLineIdx(i => (i + 1) % lines.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, lineIdx, lines, speed, pause]);

  return display;
}

export function Hero() {
  const tagline = useTypewriter(TAGLINES);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[length:300%_300%] animate-gradient-shift"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #050A14 0%, #0C1626 25%, #0d1b3e 50%, #0C1626 75%, #050A14 100%)",
        }}
      />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-2 mb-5">
            <span className="h-px w-8 bg-accent-blue" />
            <span className="text-sm text-accent-glow font-semibold tracking-widest uppercase">Cloud Advocate @ Microsoft</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-txt-primary leading-tight mb-3">
            Ayan Gupta
          </h1>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-gold/40 bg-accent-gold/10 animate-pulse-glow mb-5">
            <span className="text-accent-gold text-xs font-bold tracking-wide">🏆 FORBES 30 UNDER 30</span>
          </div>
          <p className="text-xl md:text-2xl text-txt-muted font-display font-medium min-h-[2rem] mb-6">
            {tagline}
            <span className="inline-block w-0.5 h-6 bg-accent-glow ml-0.5 animate-pulse align-middle" />
          </p>
          <p className="text-txt-muted leading-relaxed mb-8 max-w-md">
            I believe technology should be used to build for good — helping developers
            move faster, supporting students and founders, and building solutions that
            create real-world impact.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.youtube.com/live/cJ1odDNflEA?t=449"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-blue text-white font-semibold text-sm hover:bg-accent-glow transition-colors shadow-lg shadow-accent-blue/25"
            >
              ▶ Watch JDConf Keynote
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-bg-border text-txt-primary font-semibold text-sm hover:border-accent-blue/50 hover:bg-bg-surface transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className={`flex justify-center md:justify-end transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-blue via-accent-purple to-accent-blue opacity-60 blur-md animate-pulse" />
            <Image
              src="https://github.com/ayangupt.png"
              alt="Ayan Gupta"
              width={280}
              height={280}
              className="relative rounded-full border-2 border-bg-border"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-txt-muted text-xs animate-bounce">
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 10.293L3.354 5.646l-.708.708L8 11.707l5.354-5.353-.708-.708L8 10.293z" />
        </svg>
      </div>
    </section>
  );
}
