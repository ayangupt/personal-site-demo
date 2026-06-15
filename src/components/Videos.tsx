"use client";

const videos = [
  { title: "Building the Agentic Future Together", subtitle: "JDConf 2026 Opening Keynote", url: "https://www.youtube.com/live/cJ1odDNflEA?t=449", embedUrl: "https://www.youtube.com/embed/cJ1odDNflEA?start=449", featured: true },
  { title: "Modernize Java Apps with AI", url: "https://www.youtube.com/watch?v=9gmp_ADmRuE", embedUrl: "https://www.youtube.com/embed/9gmp_ADmRuE", featured: false },
  { title: "Modernize Java Apps in Days with GitHub Copilot", url: "https://www.youtube.com/watch?v=r3iTEqujO1s", embedUrl: "https://www.youtube.com/embed/r3iTEqujO1s", featured: false },
  { title: "Build with Copilot CLI", url: "https://www.youtube.com/watch?v=c2QeGuWPnSw", embedUrl: "https://www.youtube.com/embed/c2QeGuWPnSw", featured: false },
];

export function Videos() {
  const featured = videos.find(v => v.featured)!;
  const rest = videos.filter(v => !v.featured);
  return (
    <section id="videos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="h-px w-8 bg-accent-blue" />
          <span className="text-xs text-accent-glow font-bold tracking-widest uppercase">Videos</span>
        </div>
        <h2 className="font-display text-3xl font-bold text-txt-primary mb-12">Watch it in action.</h2>
        <div className="mb-6 rounded-2xl overflow-hidden border border-accent-gold/20 bg-bg-surface shadow-xl shadow-accent-gold/5">
          <div className="aspect-video">
            <iframe src={featured.embedUrl} title={featured.title} className="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
          </div>
          <div className="px-5 py-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-txt-primary">{featured.title}</p>
              {featured.subtitle && <p className="text-sm text-accent-gold mt-0.5">⭐ {featured.subtitle}</p>}
            </div>
            <a href={featured.url} target="_blank" rel="noreferrer" className="text-sm text-accent-glow font-semibold hover:text-white transition-colors whitespace-nowrap ml-4">YouTube →</a>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {rest.map(v => (
            <div key={v.url} className="group rounded-2xl overflow-hidden border border-bg-border bg-bg-surface hover:border-accent-blue/30 transition-colors">
              <div className="aspect-video">
                <iframe src={v.embedUrl} title={v.title} className="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
              </div>
              <div className="px-4 py-3">
                <a href={v.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-txt-primary group-hover:text-accent-glow transition-colors leading-snug">{v.title}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
