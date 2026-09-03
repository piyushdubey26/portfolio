import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050507",
        surface: {
          50: "#16161c",
          100: "#121217",
          200: "#0d0d12",
          300: "#08080c",
          DEFAULT: "#050507",
        },
        brand: {
          light: "#f8fafc",
          muted: "#94a3b8",
          dark: "#475569",
          accent: "#38bdf8",
          silver: "#cbd5e1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-subtle": "glowSubtle 6s ease-in-out infinite alternate",
        "float-gentle": "floatGentle 6s ease-in-out infinite",
      },
      keyframes: {
        glowSubtle: {
          "0%": { opacity: "0.4", transform: "scale(0.98)" },
          "100%": { opacity: "0.8", transform: "scale(1.02)" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
