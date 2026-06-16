import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ayan Gupta",
};

export default function AboutPage() {
  return (
    <main className="pt-14">
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-16">
            <Image
              src="https://github.com/ayangupt.png"
              alt="Ayan Gupta"
              width={220}
              height={220}
              className="rounded-2xl flex-shrink-0"
            />
            <div>
              <h1 className="font-display text-3xl md:text-4xl text-txt-primary italic mb-6">
                About me
              </h1>
              <div className="space-y-4 text-txt-muted leading-relaxed">
                <p>
                  I&apos;m an AI Developer Advocate at Microsoft and GitHub. My day-to-day
                  is helping developers build and modernize applications with tools like
                  GitHub Copilot — through hands-on workshops, conference talks, and
                  open-source contributions.
                </p>
                <p>
                  I speak regularly at conferences like JavaOne, DevNexus, JDConf, and
                  Microsoft Build. I was named to the Forbes 30 Under 30 list in Seattle,
                  and have been featured in GeekWire and KOMO News for work at the
                  intersection of technology and community impact.
                </p>
                <p>
                  Outside of work, I contribute to open-source projects like LangChain4j
                  and Spring AI. I spend a lot of time mentoring students, advising early-stage
                  founders, and generally trying to make developer tools less painful.
                </p>
              </div>
            </div>
          </div>

          {/* A few things */}
          <div className="border-t border-bg-border pt-12">
            <h2 className="font-display text-xl text-txt-primary italic mb-8">
              A few things about me
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 text-sm text-txt-muted">
              <div>
                <span className="block text-txt-primary mb-1">Based in</span>
                Seattle, WA
              </div>
              <div>
                <span className="block text-txt-primary mb-1">Current role</span>
                AI Developer Advocate @ GitHub
              </div>
              <div>
                <span className="block text-txt-primary mb-1">Focus areas</span>
                AI/ML tooling, Java modernization, developer experience
              </div>
              <div>
                <span className="block text-txt-primary mb-1">Education</span>
                University of Washington
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="border-t border-bg-border pt-12 mt-12">
            <h2 className="font-display text-xl text-txt-primary italic mb-6">
              Elsewhere
            </h2>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="https://github.com/ayangupt" target="_blank" rel="noreferrer" className="text-txt-muted hover:text-accent-warm transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ayangupt" target="_blank" rel="noreferrer" className="text-txt-muted hover:text-accent-warm transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
