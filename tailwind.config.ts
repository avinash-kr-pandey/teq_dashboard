import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Optional: if using app directory
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite", // slower
        "spin-slower": "spin 10s linear infinite", // even slower
        "spin-fast": "spin 1s linear infinite", // faster
      },
      colors: {
        purpleGlow: "#6633EE",
        darkBg: "#0B0C2A",
      },
    },
  },
  plugins: [],
};

export default config;
