"use client";

import { useEffect, useRef, useState } from "react";

const LOGOS = [
  { name: "Microsoft", logo: "/logos/microsoft.png?v=4" },
  { name: "GitHub", logo: "/logos/github.png?v=4" },
  { name: "DevNexus", logo: "/logos/devnexus.png?v=4" },
  { name: "JavaOne", logo: "/logos/javaone.png?v=4" },
  { name: "All Things Open", logo: "/logos/allthingsopen.png?v=4" },
  { name: "GeekWire", logo: "/logos/geekwire.png?v=4" },
  { name: "KOMO 4", logo: "/logos/komo.png?v=4" },
  { name: "King 5", logo: "/logos/king5.png?v=4" },
  { name: "WE Day", logo: "/logos/weday.png?v=4" },
];

function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [transition, setTransition] = useState("");
  const [logos, setLogos] = useState(() => [...LOGOS, ...LOGOS, ...LOGOS]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Measure the first item's actual width including margins
      const container = containerRef.current;
      if (!container) return;
      const firstItem = container.children[0] as HTMLElement;
      if (!firstItem) return;
      const itemWidth = firstItem.offsetWidth + 64; // 64 = mx-8 * 2

      setTransition("transform 0.6s ease-in-out");
      setOffset(-itemWidth);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    setTransition("none");
    setOffset(0);
    setLogos((prev) => [...prev.slice(1), prev[0]]);
  };

  return (
    <div className="relative overflow-hidden py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg-base to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg-base to-transparent z-10 pointer-events-none" />

      <div
        ref={containerRef}
        className="flex items-center w-max"
        style={{
          transform: `translateX(${offset}px)`,
          transition: transition,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {logos.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-shrink-0 mx-8 flex items-center justify-center h-8"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.logo}
              alt={logo.name}
              className="h-6 w-auto object-contain opacity-80 brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="h-px w-8 bg-accent-blue" />
          <span className="text-xs text-accent-glow font-bold tracking-widest uppercase">About</span>
        </div>

        <div className="grid md:grid-cols-1 gap-12 items-start">
          {/* Bio */}
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-txt-primary mb-6">
              Building technology<br />
              <span className="text-accent-glow">for good.</span>
            </h2>
            <div className="space-y-4 text-txt-muted leading-relaxed">
              <p>
                I&apos;m an AI Developer Advocate at Microsoft and GitHub, focused on AI, developer tools,
                and modern application development. I help developers build and modernize applications
                using tools like GitHub Copilot through hands-on workshops, demos, and conference talks.
              </p>
              <p>
                I regularly speak at major developer conferences including JavaOne, DevNexus,
                JDConf, and Microsoft Build. I was named to the Forbes 30 Under 30 (Seattle) list
                and have been featured in GeekWire and KOMO News for my work at the intersection
                of technology and community impact.
              </p>
              <p>
                Beyond Microsoft, I&apos;m an active open source contributor — including contributions
                to LangChain4j and Spring AI — and I&apos;m passionate about mentoring students,
                supporting founders, and building projects that prioritize impact alongside
                innovation.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/ayangupt"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-accent-glow hover:text-white transition-colors font-semibold"
              >
                GitHub →
              </a>
            </div>
          </div>

          {/* Logo marquee */}
          <div>
            <p className="text-xs text-txt-muted uppercase tracking-widest font-bold mb-4">Conferences & Features</p>
            <Marquee />
          </div>
        </div>
      </div>
    </section>
  );
}
