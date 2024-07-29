"use client"

import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return <button onClick={handleTheme}>Toggle Theme</button>
}
