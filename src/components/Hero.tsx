"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function WaveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    function resize() {
      canvas!.width = canvas!.offsetWidth * window.devicePixelRatio;
      canvas!.height = canvas!.offsetHeight * window.devicePixelRatio;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);

      const cols = 40;
      const rows = 20;
      const perspective = 300;
      const baseY = h * 0.75;
      const spacing = w / cols;

      ctx!.strokeStyle = "rgba(47, 128, 237, 0.25)";
      ctx!.lineWidth = window.devicePixelRatio;

      // Draw horizontal wave lines
      for (let row = 0; row < rows; row++) {
        const z = row / rows;
        const scale = perspective / (perspective + row * 15);
        const y = baseY - row * spacing * scale * 0.6;

        ctx!.beginPath();
        for (let col = 0; col <= cols; col++) {
          const x = (col / cols) * w;
          const wave = Math.sin((col / cols) * Math.PI * 3 + time + row * 0.4) * 12 * scale;
          const wave2 = Math.sin((col / cols) * Math.PI * 2 - time * 0.7 + row * 0.2) * 8 * scale;
          const py = y + wave + wave2;

          if (col === 0) ctx!.moveTo(x, py);
          else ctx!.lineTo(x, py);
        }
        ctx!.globalAlpha = 0.15 + z * 0.4;
        ctx!.stroke();
      }

      // Draw vertical lines connecting the waves
      for (let col = 0; col <= cols; col += 2) {
        ctx!.beginPath();
        for (let row = 0; row < rows; row++) {
          const z = row / rows;
          const scale = perspective / (perspective + row * 15);
          const y = baseY - row * spacing * scale * 0.6;
          const x = (col / cols) * w;
          const wave = Math.sin((col / cols) * Math.PI * 3 + time + row * 0.4) * 12 * scale;
          const wave2 = Math.sin((col / cols) * Math.PI * 2 - time * 0.7 + row * 0.2) * 8 * scale;
          const py = y + wave + wave2;

          if (row === 0) ctx!.moveTo(x, py);
          else ctx!.lineTo(x, py);
        }
        ctx!.globalAlpha = 0.1;
        ctx!.stroke();
      }

      ctx!.globalAlpha = 1;
      time += 0.015;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}
const TAGLINES = [
  "Building the Agentic Future.",
  "Helping Developers Move Faster.",
  "Tech Enthusiast. Educator. Advocate.",
  "AI Developer Advocate @ GitHub.",
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
      {/* Animated wave grid */}
      <WaveGrid />

      {/* Blue glow on the left/text side */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center w-full" style={{ zIndex: 3 }}>
        <div className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-2 mb-5">
            <span className="h-px w-8 bg-accent-blue" />
            <span className="text-sm text-accent-glow font-semibold tracking-widest uppercase">Hey, I&apos;m</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-txt-primary leading-tight mb-3">
            Ayan Gupta
          </h1>
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
            {/* Purple glow behind profile picture */}
            <div className="absolute -inset-12 bg-accent-purple/30 rounded-full blur-[80px] pointer-events-none animate-pulse" />
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
