"use client";

const socials = [
  { label: "GitHub",   handle: "@ayangupt",  href: "https://github.com/ayangupt",                     icon: "GH" },
  { label: "LinkedIn", handle: "in/ayangupt", href: "https://www.linkedin.com/in/ayangupt",             icon: "LI" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-8 bg-accent-blue" />
            <span className="text-xs text-accent-glow font-bold tracking-widest uppercase">Contact</span>
            <span className="h-px w-8 bg-accent-blue" />
          </div>

          <h2 className="font-display text-3xl font-bold text-txt-primary mb-4">
            Building something interesting?
          </h2>
          <p className="text-txt-muted mb-10 text-lg">
            Let&apos;s talk.
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-4 flex-wrap">
            {socials.map(s => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-bg-border bg-bg-surface hover:border-accent-blue/40 hover:bg-bg-elevated transition-all group"
              >
                <span className="text-xs font-bold text-txt-muted group-hover:text-accent-glow transition-colors w-6 text-center">{s.icon}</span>
                <div className="text-left">
                  <div className="text-sm font-semibold text-txt-primary group-hover:text-accent-glow transition-colors">{s.label}</div>
                  <div className="text-xs text-txt-muted">{s.handle}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-bg-border text-sm text-txt-muted">
            © {new Date().getFullYear()} Ayan Gupta · Built with Next.js + Tailwind
          </div>
        </div>
      </div>
    </section>
  );
}
