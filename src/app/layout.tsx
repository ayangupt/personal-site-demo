import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayan Gupta — AI Developer Advocate",
  description:
    "Ayan Gupta is an AI Developer Advocate at Microsoft and GitHub, Forbes 30 Under 30, and conference speaker focused on AI, developer tools, and modern application development.",
  openGraph: {
    title: "Ayan Gupta",
    description: "AI Developer Advocate @ GitHub · Forbes 30U30 · Conference Speaker",
    images: [{ url: "https://github.com/ayangupt.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans bg-bg-base text-txt-primary">{children}</body>
    </html>
  );
}
