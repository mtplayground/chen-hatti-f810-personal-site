import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        academic: {
          bg: "#ffffff",
          "bg-subtle": "#f8fafc",
          "bg-muted": "#f1f5f9",
          surface: "#ffffff",
          "surface-muted": "#f8fafc",
          text: "#111827",
          muted: "#64748b",
          border: "#e8eef6",
          accent: "#2563eb",
          "accent-hover": "#1d4ed8",
          "accent-soft": "#dbeafe",
          "accent-subtle": "#eff6ff",
          "dark-bg": "#0f172a",
          "dark-bg-subtle": "#111827",
          "dark-surface": "#1e293b",
          "dark-surface-muted": "#172033",
          "dark-text": "#f8fafc",
          "dark-muted": "#cbd5e1",
          "dark-border": "#2b394d",
          "dark-accent": "#60a5fa",
          "dark-accent-hover": "#93c5fd",
          "dark-accent-soft": "#1e3a8a"
        }
      },
      borderColor: {
        card: "#e8eef6",
        "card-dark": "#2b394d"
      },
      borderRadius: {
        card: "0.375rem"
      },
      boxShadow: {
        card: "0 1px 1px rgb(15 23 42 / 0.035)",
        "card-hover": "0 4px 12px rgb(15 23 42 / 0.06)"
      },
      spacing: {
        "site-x": "1.5rem",
        "site-x-lg": "2rem",
        section: "1.25rem",
        "section-sm": "1rem",
        card: "1rem",
        "card-lg": "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
