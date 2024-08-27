import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        // padding: {
        //   DEFAULT: "0.5rem",
        //   lg: "1rem"
        // },
        screens: {
          sm: "100%", // Full width for small screens (mobile)
          md: "100%", // Full width for medium screens (tablet)
          lg: "1024px", // 1024px width for large screens (desktop)
          xl: "1280px", // 1280px width for extra-large screens (desktop)
          "2xl": "1536px" // 1536px width for double extra-large screens (desktop)
        }
      },
      fontFamily: {
        alteHaas: [
          '"Alte Haas Grotesk"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
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
      },
      keyframes: {
        drawerAnimationDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },
        drawerAnimationUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" }
        }
      },
      animation: {
        drawerDown: "drawerAnimationDown 0.3s ease-in forwards",
        drawerUp: "drawerAnimationUp 0.3s ease-out forwards"
      },
      /* Sets the base font size using the clamp() function:
          - Minimum size: 1rem (16px)
          - Preferred size: 2vw (2% of the viewport width)
          - Maximum size: 1.2rem (19.2px)
      */
      fontSize: {
        base: "clamp(1rem, 2vw, 1.2rem)"
      }
    }
  },
  plugins: []
}
export default config
