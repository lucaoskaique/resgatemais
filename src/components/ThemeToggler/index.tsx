"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { HamburgerToggle, SwitchToggle } from "./togglers"

export type SwitchProps = {
  switcher?: boolean
}

export default function ThemeToggle({ switcher }: SwitchProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  /* Impede que o Switch seja renderizado com "theme" = undefined,
  pois o valor é definido só após o client ser montado */
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // substituir por um SkeletonComponent
    return null
  }

  if (switcher) {
    return <SwitchToggle theme={theme} setTheme={setTheme} />
  } else {
    return <HamburgerToggle theme={theme} setTheme={setTheme} />
  }
}
