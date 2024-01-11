import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  daisyui: {
    themes: [
      {
        myLightTheme: {
          primary: "#FF7828",
          secondary: "#285A55",
          accent: "#74CCCC",
          neutral: "#102322",
          "base-100": "#FFFFFF",
          info: "#599EFF",
          success: "#0CCE29",
          warning: "#FFD53D",
          error: "#DA2121",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "cyberpunk",
      "halloween",
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
