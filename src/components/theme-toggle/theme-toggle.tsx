"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-mode",
      theme === "dark" ? "dark" : "light"
    )
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return <button onClick={handleTheme}>Toggle Theme</button>
}
