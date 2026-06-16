import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking — Ayan Gupta",
};

const talks = [
  {
    year: "2026",
    event: "JDConf",
    title: "Building the Agentic Future Together",
    type: "Opening Keynote",
    detail: "Delivered the opening keynote alongside Bruno Borges (Microsoft) and Rod Johnson (Creator of Spring). Live demo of agentic AI workflows transforming Java app modernization.",
    url: "https://www.youtube.com/live/cJ1odDNflEA?t=449",
  },
  {
    year: "2026",
    event: "DevNexus",
    title: "Modernize Your Apps in Days with AI Agents",
    type: "Workshop + Talk",
    detail: "Led a full pre-day workshop and main conference session. Designed all lab content from scratch. The workshop drew ~70 attendees — nearly 3× expected capacity.",
    url: "https://devnexus.com/events/modernize-your-apps-in-days-with-ai-agents",
  },
  {
    year: "2026",
    event: "MCAPS Tech Connect",
    title: "AI-Driven App Modernization",
    type: "Internal Conference",
    detail: "Presented to ~600 Microsoft field teams and stakeholders across two sessions. Practical modernization narratives and live demos for customer conversations.",
  },
  {
    year: "2026",
    event: "JavaOne",
    title: "Agentic-first Modernization with GitHub Copilot",
    type: "Booth Talks",
    detail: "Interactive booth talks engaging hundreds of Java developers exploring AI-assisted development and practical migration workflows.",
  },
];

export default function SpeakingPage() {
  return (
    <main className="pt-14">
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl text-txt-primary italic mb-4">
            Speaking
          </h1>
          <p className="text-txt-muted mb-16 max-w-lg">
            I talk about AI developer tools, Java modernization, and the future of
            how we build software. Here are some recent appearances.
          </p>

          <div className="space-y-12">
            {talks.map((talk, i) => (
              <article key={i} className="group">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                  <span className="text-xs text-txt-dim font-mono">{talk.year}</span>
                  <span className="text-sm text-accent-warm">{talk.event}</span>
                  <span className="text-xs text-txt-dim">{talk.type}</span>
                </div>
                <h2 className="text-lg text-txt-primary mb-2 group-hover:text-accent-warm transition-colors">
                  {talk.url ? (
                    <a href={talk.url} target="_blank" rel="noreferrer">
                      {talk.title}
                    </a>
                  ) : (
                    talk.title
                  )}
                </h2>
                <p className="text-sm text-txt-muted leading-relaxed max-w-2xl">
                  {talk.detail}
                </p>
                {talk.url && (
                  <a
                    href={talk.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-sm text-txt-dim hover:text-accent-warm transition-colors"
                  >
                    Watch →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
