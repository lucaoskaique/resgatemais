import { useTheme } from "next-themes"
import Switch from "react-switch"

export function SwitchTheme() {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Switch
      onChange={handleToggle}
      checked={theme === "dark"}
      checkedIcon={false}
      uncheckedIcon={false}
    />
  )
}
