import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos — Ayan Gupta",
};

const videos = [
  {
    title: "Build with Copilot CLI",
    context: "Walkthrough",
    embedUrl: "https://www.youtube.com/embed/c2QeGuWPnSw",
    url: "https://www.youtube.com/watch?v=c2QeGuWPnSw",
    featured: true,
  },
  {
    title: "Building the Agentic Future Together",
    context: "JDConf 2026 · Opening Keynote",
    embedUrl: "https://www.youtube.com/embed/cJ1odDNflEA?start=449",
    url: "https://www.youtube.com/live/cJ1odDNflEA?t=449",
  },
  {
    title: "Modernize Java Apps with AI",
    context: "Demo",
    embedUrl: "https://www.youtube.com/embed/9gmp_ADmRuE",
    url: "https://www.youtube.com/watch?v=9gmp_ADmRuE",
  },
  {
    title: "Modernize Java Apps in Days with GitHub Copilot",
    context: "Tutorial",
    embedUrl: "https://www.youtube.com/embed/r3iTEqujO1s",
    url: "https://www.youtube.com/watch?v=r3iTEqujO1s",
  },
];

export default function VideosPage() {
  const featured = videos.find(v => v.featured)!;
  const rest = videos.filter(v => !v.featured);

  return (
    <main className="pt-14">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl text-txt-primary italic mb-4">
            Videos
          </h1>
          <p className="text-txt-muted mb-16">
            Talks, demos, and walkthroughs.
          </p>

          {/* Featured */}
          <div className="mb-12">
            <div className="aspect-video rounded-lg overflow-hidden bg-bg-surface mb-4">
              <iframe
                src={featured.embedUrl}
                title={featured.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <h2 className="text-lg text-txt-primary mb-1">{featured.title}</h2>
            <p className="text-sm text-txt-muted">{featured.context}</p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {rest.map(v => (
              <div key={v.url}>
                <div className="aspect-video rounded-lg overflow-hidden bg-bg-surface mb-3">
                  <iframe
                    src={v.embedUrl}
                    title={v.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm text-txt-primary mb-0.5">{v.title}</h3>
                <p className="text-xs text-txt-muted">{v.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
