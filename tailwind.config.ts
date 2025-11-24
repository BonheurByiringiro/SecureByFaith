import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyber: {
          blue: "#00d4ff",
          purple: "#b000ff",
          pink: "#ff006e",
          green: "#00ff88",
        },
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { "box-shadow": "0 0 20px rgba(0, 212, 255, 0.5)" },
          to: { "box-shadow": "0 0 30px rgba(0, 212, 255, 0.8), 0 0 40px rgba(176, 0, 255, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
