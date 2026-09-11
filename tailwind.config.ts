// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Kerala-inspired palette ──────────────────────
        gold: {
          300: "#e2c76b",
          400: "#c9a84c",
          500: "#a8883a",
          600: "#8a6d2e",
        },
        parchment: {
          DEFAULT: "#f0e6d3",
          50:      "#faf7f2",
          100:     "#f0e6d3",
        },
        jade: {
          300: "#6ee7b7",
          400: "#34d399",
          900: "#064e3b",
        },
        // ── Deep indigo-black base ───────────────────────
        abyss: {
          900: "#0d0d1a",
          800: "#111827",
          700: "#1a1a2e",
        },
      },

      fontFamily: {
        sans:    ["var(--font-inter)",    "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia",   "serif"],
      },

      backgroundImage: {
        "radial-gold":
          "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(201,168,76,0.07), transparent)",
      },

      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },

      animation: {
        "fade-up":   "fadeUp 0.4s ease-out forwards",
        "fade-in":   "fadeIn 0.3s ease-out forwards",
        "slide-in":  "slideIn 0.35s ease-out forwards",
      },

      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%":   { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },

      // Phase 5: used by React Three Fiber canvas sizing
      height: {
        "screen-90": "90vh",
        "screen-75": "75vh",
      },
    },
  },
  plugins: [],
};

export default config;