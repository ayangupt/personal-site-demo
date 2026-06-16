"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { label: "About",    href: "/about" },
  { label: "Speaking", href: "/speaking" },
  { label: "Videos",   href: "/videos" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-base/80 backdrop-blur-sm border-b border-bg-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-display text-lg text-txt-primary italic whitespace-nowrap">
          Ayan Gupta
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-2 sm:px-3 py-1.5 rounded text-sm transition-colors ${
                pathname === l.href
                  ? "text-accent-warm"
                  : "text-txt-muted hover:text-txt-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
