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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        '4xs': '320px',
        '3xs': '360px',
        '2xs': '375px',
        "xs": '414px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
};
export default config;
