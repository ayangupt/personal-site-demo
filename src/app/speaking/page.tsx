import type { Metadata } from "next";
import { talks } from "@/lib/talks";
import TalkCard from "@/components/TalkCard";

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
              <TalkCard key={i} talk={talk} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
