import { Hero } from "@/components/Hero";
import { Talks } from "@/components/Talks";
import { Videos } from "@/components/Videos";
import { Box } from "@primer/react";

export default function Home() {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        px: [3, 4],
        py: 5,
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Hero />
      <Talks />
      <Videos />
    </Box>
  );
}
