import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        emd: {
          "vert-fonce": "#1A6B3A",
          "vert-moyen": "#2E8B57",
          "vert-clair": "#52B788",
          or: "#D4A017",
          "or-clair": "#F4C842",
          terre: "#8B4513",
          creme: "#FDF8F0",
          blanc: "#FFFFFF",
          "gris-texte": "#374151",
          "gris-leger": "#F3F4F6",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
        quote: ["var(--font-lora)", "serif"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(26, 107, 58, 0.08)",
        "soft-lg": "0 12px 40px rgba(26, 107, 58, 0.16)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "bounce-chevron": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        blink: "blink 1.6s ease-in-out infinite",
        "bounce-chevron": "bounce-chevron 1.8s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
