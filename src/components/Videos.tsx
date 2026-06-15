"use client";

import { ThemeProvider, BaseStyles, Box, Heading, Text, Link } from "@primer/react";

const videos = [
  {
    title: "Modernize Java Apps with AI",
    url: "https://www.youtube.com/watch?v=9gmp_ADmRuE",
    embedUrl: "https://www.youtube.com/embed/9gmp_ADmRuE",
  },
  {
    title: "Modernize Java Apps in Days with GitHub Copilot",
    url: "https://www.youtube.com/watch?v=r3iTEqujO1s",
    embedUrl: "https://www.youtube.com/embed/r3iTEqujO1s",
  },
  {
    title: "Build with Copilot CLI",
    url: "https://www.youtube.com/watch?v=c2QeGuWPnSw",
    embedUrl: "https://www.youtube.com/embed/c2QeGuWPnSw",
  },
  {
    title: "Building the Agentic Future Together (JDConf 2026 Keynote)",
    url: "https://www.youtube.com/live/cJ1odDNflEA",
    embedUrl: "https://www.youtube.com/embed/cJ1odDNflEA",
  },
];

function VideoCard({ video }: { video: (typeof videos)[0] }) {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "border.default",
        borderRadius: 2,
        overflow: "hidden",
        bg: "canvas.subtle",
      }}
    >
      <Box
        as="div"
        sx={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          bg: "canvas.default",
        }}
      >
        <Box
          as="iframe"
          src={video.embedUrl}
          title={video.title}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </Box>
      <Box sx={{ p: 3 }}>
        <Link href={video.url} target="_blank" sx={{ fontSize: 1, fontWeight: "semibold", color: "fg.default" }}>
          {video.title}
        </Link>
      </Box>
    </Box>
  );
}

export function Videos() {
  return (
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box>
          <Heading
            as="h2"
            sx={{
              fontSize: 3,
              fontWeight: "semibold",
              color: "fg.default",
              mb: 3,
              pb: 2,
              borderBottom: "1px solid",
              borderColor: "border.default",
            }}
          >
            🎥 Videos
          </Heading>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: ["1fr", "1fr 1fr"],
              gap: 3,
            }}
          >
            {videos.map((v) => (
              <VideoCard key={v.url} video={v} />
            ))}
          </Box>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}
