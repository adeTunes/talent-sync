import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        blue: {
          50: "#EFF8FF",
          100: "#D1E9FF",
          200: "#B2DDFF",
          dark: {
            400: "#528BFF",
          },
          700: "#175CD3",
        },
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        md: "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
