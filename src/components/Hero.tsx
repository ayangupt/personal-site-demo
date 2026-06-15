"use client";

import { ThemeProvider, BaseStyles, Box, Heading, Text, Avatar, Label } from "@primer/react";

export function Hero() {
  return (
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "row"],
            gap: 4,
            alignItems: ["center", "flex-start"],
            py: 4,
          }}
        >
          <Avatar
            src="https://github.com/ayangupt.png"
            size={96}
            alt="Ayan Gupta"
            sx={{ flexShrink: 0 }}
          />
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap", mb: 1 }}>
              <Heading as="h1" sx={{ fontSize: 5, fontWeight: "bold", color: "fg.default" }}>
                Ayan Gupta
              </Heading>
              <Label variant="attention" sx={{ fontSize: 0 }}>
                🏆 Forbes 30U30
              </Label>
            </Box>
            <Text as="p" sx={{ fontSize: 2, color: "accent.fg", fontWeight: "semibold", mb: 2 }}>
              Advocate, Tech Enthusiast, Educator
            </Text>
            <Text as="p" sx={{ fontSize: 1, color: "fg.muted", mb: 3 }}>
              Cloud Advocate at Microsoft
            </Text>
            <Text
              as="p"
              sx={{
                fontSize: 1,
                color: "fg.default",
                lineHeight: 1.7,
                maxWidth: 620,
              }}
            >
              I believe technology should be used to build for good. My work is centered around
              helping people use technology to create meaningful, real-world impact — whether
              that&apos;s enabling developers to move faster, supporting students and founders, or
              building solutions that solve problems in thoughtful ways. I&apos;m a Cloud Advocate
              at Microsoft, focused on AI, developer tools, and modern application development.
            </Text>
          </Box>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}
