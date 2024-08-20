import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        alteHaas: ['"Alte Haas Grotesk"']
      },
      colors: {
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        background: "rgb(var(--background))",
        "background-secondary": "rgb(var(--background-secondary))",
        highlight: "rgb(var(--highlight))",
        "light-gray": "rgb(var(--light-gray))",
        "dark-gray": "rgb(var(--dark-gray))"
      },
      boxShadow: {
        button: "0px 0px 0px 1px rgba(0, 0, 0, 0.2) inset"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "register-email": "url(../../public/bg-footer.png)",
        hero: "url(/bg-hero.png)"
      },
      backgroundColor: {
        "color-red": "#D63E44"
      }
    }
  },
  plugins: []
}
export default config
