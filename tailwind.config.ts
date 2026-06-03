import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "ui-serif", "serif"]
      },
      colors: {
        cotton: {
          50: "#f8faf5",
          100: "#eef3e7",
          200: "#dce8d1",
          300: "#c4d7b3",
          500: "#6f8f55",
          700: "#435f32",
          900: "#21331a"
        },
        soil: {
          500: "#8a5a36",
          700: "#5d3a22"
        },
        skydata: {
          500: "#2f7da1",
          700: "#195571"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(33, 51, 26, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
