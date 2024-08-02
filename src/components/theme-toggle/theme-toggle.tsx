"use client"

import Switch from "@mui/material/Switch"
import { useTheme } from "next-themes"
import * as React from "react"

const label = { inputProps: { "aria-label": "Switch demo" } }

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button onClick={handleTheme}>
      <Switch {...label} />
    </button>
  )
}
