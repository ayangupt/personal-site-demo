"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 600, suffix: "+", label: "Conference attendees reached" },
  { value: 4,   suffix: "",  label: "Major conferences in 2026" },
  { value: 3,   suffix: "×", label: "Expected workshop turnout exceeded" },
  { value: 30,  suffix: "",  label: "Forbes 30 Under 30 — Seattle" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 50;
          const inc = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + inc, target);
            setCount(Math.round(current));
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="h-px w-8 bg-accent-blue" />
          <span className="text-xs text-accent-glow font-bold tracking-widest uppercase">About</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <h2 className="font-display text-3xl font-bold text-txt-primary mb-6">
              Building technology<br />
              <span className="text-accent-glow">for good.</span>
            </h2>
            <div className="space-y-4 text-txt-muted leading-relaxed">
              <p>
                I&apos;m a Cloud Advocate at Microsoft, focused on AI, developer tools, and modern
                application development. I help developers build and modernize applications using
                tools like GitHub Copilot through hands-on workshops, demos, and conference talks.
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

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-5 rounded-2xl bg-bg-surface border border-bg-border hover:border-accent-blue/30 transition-colors"
              >
                <div className="font-display text-4xl font-bold text-accent-glow mb-2">
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-txt-muted leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
