import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/ayangupt" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayangupt" },
];

export function Footer() {
  return (
    <footer className="border-t border-bg-border py-12 px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-txt-muted">
        <p>© {new Date().getFullYear()} Ayan Gupta</p>
        <div className="flex items-center gap-6">
          {socials.map(s => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-txt-primary transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
