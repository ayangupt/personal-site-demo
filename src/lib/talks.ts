export type Talk = {
  year: string;
  event: string;
  title: string;
  type: string;
  detail: string;
  url?: string;
};

export const talks: Talk[] = [
  {
    year: "2026",
    event: "JDConf",
    title: "Building the Agentic Future Together",
    type: "Opening Keynote",
    detail: "Delivered the opening keynote alongside Bruno Borges (Microsoft) and Rod Johnson (Creator of Spring). Live demo of agentic AI workflows transforming Java app modernization.",
    url: "https://www.youtube.com/live/cJ1odDNflEA?t=449",
  },
  {
    year: "2026",
    event: "DevNexus",
    title: "Modernize Your Apps in Days with AI Agents",
    type: "Workshop + Talk",
    detail: "Led a full pre-day workshop and main conference session. Designed all lab content from scratch. The workshop drew ~70 attendees — nearly 3× expected capacity.",
    url: "https://devnexus.com/events/modernize-your-apps-in-days-with-ai-agents",
  },
  {
    year: "2026",
    event: "MCAPS Tech Connect",
    title: "AI-Driven App Modernization",
    type: "Internal Conference",
    detail: "Presented to ~600 Microsoft field teams and stakeholders across two sessions. Practical modernization narratives and live demos for customer conversations.",
  },
  {
    year: "2026",
    event: "JavaOne",
    title: "Agentic-first Modernization with GitHub Copilot",
    type: "Booth Talks",
    detail: "Interactive booth talks engaging hundreds of Java developers exploring AI-assisted development and practical migration workflows.",
  },
];

export function getTalks(): Talk[] {
  return talks;
}
