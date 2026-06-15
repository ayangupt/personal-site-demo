"use client";

import { useState } from "react";

const talks = [
  {
    event: "JDConf 2026",
    title: "Building the Agentic Future Together",
    type: "Opening Keynote",
    detail: "Delivered the opening keynote demo alongside Bruno Borges (Microsoft) and Rod Johnson (Creator of Spring). Showcased live how agentic AI workflows transform Java app modernization — demonstrating GitHub Copilot agent capabilities on stage to kick off the conference. Covered real-world migration patterns, the rise of AI-first developer tooling, and what the agentic future looks like for the Java ecosystem.",
    url: "https://www.youtube.com/live/cJ1odDNflEA?t=449",
    embedUrl: "https://www.youtube.com/embed/cJ1odDNflEA?start=449",
    with: ["Bruno Borges · Microsoft", "Rod Johnson · Creator of Spring"],
    highlight: true,
  },
  {
    event: "DevNexus 2026",
    title: "Modernize Your Apps in Days with AI Agents in GitHub Copilot",
    type: "Session Lead",
    detail: "Led a full pre-day workshop and main conference session on modernizing Java applications using AI agents in GitHub Copilot. Designed all lab content from scratch as primary technical lead. The workshop drew ~70 attendees — nearly 3× the expected capacity of 25.",
    url: "https://devnexus.com/events/modernize-your-apps-in-days-with-ai-agents",
    highlight: false,
  },
  {
    event: "MCAPS Tech Connect 2026",
    title: "Modernize Your Apps in Days / AI-Driven App Modernization",
    type: "Session Lead + SME Speaker",
    detail: "Presented to ~600 Microsoft field teams and stakeholders across two sessions. Equipped go-to-market teams with practical modernization narratives, live demos, and talking points for customer conversations.",
    highlight: false,
  },
  {
    event: "JavaOne 2026",
    title: "Agentic-first Modernization & Migration with GitHub Copilot",
    type: "Booth Talks",
    detail: "Ran interactive booth talks on Agentic-first Modernization and Migration with GitHub Copilot. Engaged hundreds of Java developers exploring AI-assisted development and showed practical migration workflows live.",
    highlight: false,
  },
];

export function Talks() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  return (
    <section id="talks" className="py-24 px-6 bg-bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="h-px w-8 bg-accent-blue" />
          <span className="text-xs text-accent-glow font-bold tracking-widest uppercase">Conference Talks</span>
        </div>
        <h2 className="font-display text-3xl font-bold text-txt-primary mb-12">
          On stage at the world&apos;s<br />
          <span className="text-accent-glow">biggest developer conferences.</span>
        </h2>
        <div className="relative pl-8">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent" />
          <div className="space-y-10">
            {talks.map((t, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-8 top-4 w-3 h-3 rounded-full border-2 ${t.highlight ? "bg-accent-gold border-accent-gold shadow-[0_0_12px_rgba(212,160,23,0.8)]" : "bg-accent-blue border-accent-blue"}`} />
                <div className={`rounded-2xl p-6 border transition-all ${t.highlight ? "bg-bg-elevated border-accent-gold/30 shadow-lg shadow-accent-gold/10" : "bg-bg-surface border-bg-border hover:border-accent-blue/30"}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-xs font-bold uppercase tracking-widest ${t.highlight ? "text-accent-gold" : "text-accent-glow"}`}>{t.event}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full border border-bg-border text-txt-muted">{t.type}</span>
                    {t.highlight && <span className="text-xs px-2 py-0.5 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold font-bold">⭐ Keynote</span>}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-txt-primary mb-3">{t.title}</h3>
                  {t.with && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {t.with.map(w => (
                        <span key={w} className="text-xs px-2.5 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-glow">{w}</span>
                      ))}
                    </div>
                  )}
                  <p className={`text-sm text-txt-muted leading-relaxed mb-3 ${!expanded[i] && !t.highlight ? "line-clamp-2" : ""}`}>{t.detail}</p>
                  {!t.highlight && (
                    <button onClick={() => setExpanded(e => ({ ...e, [i]: !e[i] }))} className="text-xs text-accent-glow hover:text-white font-semibold transition-colors mb-3 block">
                      {expanded[i] ? "Show less ↑" : "Read more ↓"}
                    </button>
                  )}
                  {t.url && <a href={t.url} target="_blank" rel="noreferrer" className="text-sm text-accent-glow hover:text-white font-semibold transition-colors">Watch / View →</a>}
                  {t.embedUrl && (
                    <div className="mt-5 rounded-xl overflow-hidden aspect-video bg-bg-base">
                      <iframe src={t.embedUrl} title={t.title} className="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
