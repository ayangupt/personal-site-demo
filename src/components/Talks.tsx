"use client";

import {
  ThemeProvider,
  BaseStyles,
  Box,
  Heading,
  Text,
  Link,
  Label,
} from "@primer/react";

const talks = [
  {
    event: "JDConf 2026",
    title: "Building the Agentic Future Together",
    type: "Opening Keynote",
    detail:
      "Delivered the opening keynote demo alongside Bruno Borges (Microsoft) and Rod Johnson (Creator of Spring). Showcased live how agentic AI workflows transform Java app modernization — demonstrating GitHub Copilot agent capabilities on stage to kick off the conference. Covered real-world migration patterns, the rise of AI-first developer tooling, and what the agentic future looks like for the Java ecosystem.",
    url: "https://www.youtube.com/live/cJ1odDNflEA?si=2qX2gB3bRfljusj9&t=449",
    embedUrl: "https://www.youtube.com/embed/cJ1odDNflEA?start=449",
    highlight: true,
  },
  {
    event: "DevNexus 2026",
    title: "Modernize Your Apps in Days with AI Agents in GitHub Copilot",
    type: "Session Lead",
    detail:
      "Led a full pre-day workshop and main conference session on modernizing Java applications using AI agents in GitHub Copilot. Designed all lab content from scratch as primary technical lead. The workshop drew ~70 attendees — nearly 3× the expected capacity of 25 — reflecting strong developer appetite for AI-driven modernization.",
    url: "https://devnexus.com/events/modernize-your-apps-in-days-with-ai-agents",
  },
  {
    event: "MCAPS Tech Connect 2026",
    title: "Modernize Your Apps in Days / AI-Driven App Modernization",
    type: "Session Lead + SME Speaker",
    detail:
      "Presented to ~600 Microsoft field teams and stakeholders across two sessions at the internal technical conference. Equipped go-to-market teams with practical modernization narratives, live demos, and talking points for customer conversations.",
  },
  {
    event: "JavaOne 2026",
    title: "Agentic-first Modernization & Migration with GitHub Copilot",
    type: "Booth Talks",
    detail:
      "Ran interactive booth talks at JavaOne 2026 on Agentic-first Modernization and Migration with GitHub Copilot. Engaged hundreds of Java developers exploring AI-assisted development and showed practical migration workflows live.",
  },
];

function TalkCard({ talk }: { talk: (typeof talks)[0] }) {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: talk.highlight ? "attention.muted" : "border.default",
        borderRadius: 2,
        p: 3,
        bg: talk.highlight ? "attention.subtle" : "canvas.subtle",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1, flexWrap: "wrap" }}>
        <Text sx={{ fontSize: 0, fontWeight: "bold", color: "fg.muted", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {talk.event}
        </Text>
        <Label
          variant={talk.highlight ? "attention" : "secondary"}
          sx={{ fontSize: 0 }}
        >
          {talk.type}
        </Label>
      </Box>
      <Heading as="h3" sx={{ fontSize: 2, fontWeight: "semibold", color: "fg.default", mb: 2 }}>
        {talk.title}
      </Heading>
      {talk.detail && (
        <Text as="p" sx={{ fontSize: 1, color: "fg.muted", lineHeight: 1.6, mb: 2 }}>
          {talk.detail}
        </Text>
      )}
      {talk.url && !talk.embedUrl && (
        <Link href={talk.url} target="_blank" sx={{ fontSize: 1 }}>
          View session →
        </Link>
      )}
      {talk.embedUrl && (
        <Box sx={{ mt: 2 }}>
          <Box
            as="div"
            sx={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              borderRadius: 2,
              bg: "canvas.default",
            }}
          >
            <Box
              as="iframe"
              src={talk.embedUrl}
              title={talk.title}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: 2,
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export function Talks() {
  return (
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box>
          <Heading as="h2" sx={{ fontSize: 3, fontWeight: "semibold", color: "fg.default", mb: 3, pb: 2, borderBottom: "1px solid", borderColor: "border.default" }}>
            🎤 Conference Talks
          </Heading>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {talks.map((t) => (
              <TalkCard key={t.event} talk={t} />
            ))}
          </Box>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}
