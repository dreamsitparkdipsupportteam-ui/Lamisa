import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#713BFF",
          blue: "#397BFF",
          coral: "#FF6B75",
          lavender: "#E9DEFF",
          canvas: "#FAF8FF",
          ink: "#201A32",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(113, 59, 255, 0.18)",
        glow: "0 30px 80px -20px rgba(113, 59, 255, 0.45)",
      },
      backgroundImage: {
        "brand-deep": "linear-gradient(135deg, #5A2DE0 0%, #3F5FE8 100%)",
        "brand-soft": "linear-gradient(135deg, #E9DEFF 0%, #DCE8FF 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
