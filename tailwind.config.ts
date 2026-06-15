import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base:     "#050A14",
          surface:  "#0C1626",
          elevated: "#132035",
          border:   "#1E3054",
        },
        accent: {
          blue:   "#2F80ED",
          glow:   "#5BA4F5",
          purple: "#8B5CF6",
          gold:   "#D4A017",
        },
        txt: {
          primary: "#E8EDF3",
          muted:   "#7B9DB8",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "gradient-shift": "gradientShift 12s ease infinite",
        "fade-up":        "fadeUp 0.6s ease forwards",
        "pulse-glow":     "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 12px 2px rgba(212,160,23,0.4)" },
          "50%":      { boxShadow: "0 0 24px 6px rgba(212,160,23,0.7)" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};

export default config;
