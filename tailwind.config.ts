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
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        background: "hsl(var(--background))",
        "background-secondary": "hsl(var(--background-secondary))",
        highlight: "hsl(var(--highlight))"
      },
      boxShadow: {
        button: "0px 0px 0px 1px rgba(0, 0, 0, 0.2) inset"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: []
}
export default config
