import type { Talk } from "@/lib/talks";

export default function TalkCard({ talk }: { talk: Talk }) {
  return (
    <article className="group">
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
  );
}
