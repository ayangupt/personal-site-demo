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
          base:     "#fafaf9",
          surface:  "#f2f2f0",
          elevated: "#eaeae7",
          border:   "#e0e0dc",
        },
        accent: {
          warm:   "#9a7044",
          hover:  "#7d5a36",
        },
        txt: {
          primary: "#1c1c1a",
          muted:   "#6b6b66",
          dim:     "#9a9a94",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-newsreader)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
