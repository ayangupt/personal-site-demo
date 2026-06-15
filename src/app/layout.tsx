import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "Ayan Gupta — Cloud Advocate at Microsoft",
  description:
    "Ayan Gupta is a Cloud Advocate at Microsoft, Forbes 30 Under 30, and conference speaker focused on AI, developer tools, and modern application development.",
  openGraph: {
    title: "Ayan Gupta",
    description: "Cloud Advocate at Microsoft · Forbes 30U30 · Conference Speaker",
    images: [{ url: "https://github.com/ayangupt.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-color-mode="dark" data-dark-theme="dark">
      <body style={{ margin: 0, background: "#0d1117" }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
