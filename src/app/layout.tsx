import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ayan Gupta",
  description:
    "AI Developer Advocate at GitHub. Speaker, builder, and open-source contributor.",
  openGraph: {
    title: "Ayan Gupta",
    description: "AI Developer Advocate at GitHub",
    images: [{ url: "https://github.com/ayangupt.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="font-sans bg-bg-base text-txt-primary">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
