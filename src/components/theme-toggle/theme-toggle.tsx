"use client"

import Switch from "@mui/material/Switch"
import { useTheme } from "next-themes"
import { useEffect } from "react"
import * as React from "react"

const label = { inputProps: { "aria-label": "Switch demo" } }

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

  return (
    <button onClick={handleTheme}>
      <Switch {...label} />
    </button>
  )
}
