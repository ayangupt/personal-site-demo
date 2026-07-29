import type { Metadata } from "next";
import { talks } from "@/lib/talks";

export const metadata: Metadata = {
  title: "Speaking — Ayan Gupta",
};

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
