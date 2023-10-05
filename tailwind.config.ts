import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(5px)" },
          "50%": { transform: "translateY(40px)" },
        },
      },
      animation: {
        wave: "wave 4s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
export default config;
