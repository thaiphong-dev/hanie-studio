import type { Config } from "tailwindcss";

const config: Config = {
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
        base_color: "#684a4e",
        active_main: "#e48f99",
        active_hover: "#cc3244",
        session_header: "#dddedf",
        card_header: "#452c2f",
        bg_dark: "#28181a",
      },
    },
  },
  plugins: [],
};
export default config;
