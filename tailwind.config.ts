import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        foreground: "rgb(var(--foreground))",
        background: "rgb(var(--background))",
        highlight: "rgb(var(--highlight))",
        "light-gray": "rgb(var(--light-gray))",
        "dark-gray": "rgb(var(--dark-gray))"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      backgroundColor: {
        "color-red": "#D63E44"
      }
    }
  },
  plugins: []
}
export default config
