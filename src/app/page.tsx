"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

function LogoMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [transition, setTransition] = useState("");
  const [logos, setLogos] = useState(() => [...LOGOS, ...LOGOS, ...LOGOS]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      const container = containerRef.current;
      if (!container) return;
      const firstItem = container.children[0] as HTMLElement;
      if (!firstItem) return;
      const itemWidth = firstItem.offsetWidth + 48; // mx-6 * 2

      setTransition("transform 0.6s ease-in-out");
      setOffset(-itemWidth);
    }, 2500);
    return () => clearInterval(interval);
  }, [mounted]);

  const handleTransitionEnd = () => {
    setTransition("none");
    setOffset(0);
    setLogos((prev) => [...prev.slice(1), prev[0]]);
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-bg-base to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-bg-base to-transparent z-10 pointer-events-none" />
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
            className="flex-shrink-0 mx-6 flex items-center justify-center h-6"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.logo}
              alt={logo.name}
              className="h-4 w-auto object-contain opacity-40 hover:opacity-80 transition-opacity brightness-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="pt-14">
      <section className="min-h-[85vh] flex items-center px-6">
        <div className="max-w-3xl mx-auto w-full py-16 md:py-24">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-8 md:gap-12">
            <div className="w-full md:flex-1 min-w-0">
              <h1 className="font-display text-4xl md:text-5xl text-txt-primary leading-tight mb-4 italic">
                Ayan Gupta
              </h1>
              <p className="text-lg text-txt-muted leading-relaxed mb-6 max-w-lg">
                AI Developer Advocate at GitHub. I help developers build better with
                AI — through talks, workshops, open source, and a lot of curiosity.
              </p>

              {/* Logo marquee - right below the intro text */}
              <div className="mb-8 max-w-lg">
                <p className="text-xs text-txt-dim uppercase tracking-wide mb-3">
                  Featured & Spoken At
                </p>
                <LogoMarquee />
              </div>

              <div className="flex items-center gap-4 text-sm">
                <Link
                  href="/about"
                  className="text-accent-warm hover:text-accent-hover transition-colors"
                >
                  More about me →
                </Link>
                <Link
                  href="/speaking"
                  className="text-txt-muted hover:text-txt-primary transition-colors"
                >
                  Speaking
                </Link>
              </div>
            </div>
            <div className="mx-auto md:mx-0 flex-shrink-0 w-[240px] h-[300px] sm:w-[260px] sm:h-[320px] md:w-[220px] md:h-[280px] rounded-2xl overflow-hidden">
              <Image
                src="/ayan-hero.png?v=10"
                alt="Ayan Gupta"
                width={768}
                height={600}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
