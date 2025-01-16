import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
          "text-blur-in": "text-blur-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both"
      },
      keyframes: {
          "text-blur-in": {
              "0%": {
                  filter: "blur(.01) opacity(0%)"
              },
              to: {
                  filter: "blur(12px) opacity(100%)"
              }
          }
      }
    },
  },
  plugins: [],
} satisfies Config;
