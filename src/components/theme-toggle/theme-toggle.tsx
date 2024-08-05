"use client"

import { useTheme } from "next-themes"
import * as React from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return <button onClick={handleTheme}>Toggle Theme</button>
}
