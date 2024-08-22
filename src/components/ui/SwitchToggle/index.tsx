import { Moon, Sun } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import Switch from "react-switch"

export type ToggleProps = {
  theme?: string
  setTheme: Dispatch<SetStateAction<string>>
}

export function SwitchToggle({ theme, setTheme }: ToggleProps) {
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Switch
      onChange={handleTheme}
      checked={theme === "light"}
      checkedIcon={false}
      checkedHandleIcon={
        <Sun className="size-full fill-[#FFD60A] p-[1px] text-[#FFD60A]" />
      }
      onColor="#FFC300"
      uncheckedIcon={false}
      uncheckedHandleIcon={<Moon className="size-full text-[#001D3D]" />}
      offColor="#001D3D"
      handleDiameter={22}
      height={28}
      width={50}
    />
  )
}
