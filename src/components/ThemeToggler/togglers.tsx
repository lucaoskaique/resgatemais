import { Moon, Sun } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react"
import Switch from "react-switch"

type ToggleProps = {
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

export function HamburgerToggle({ setTheme }: ToggleProps) {
  const [open, setOpen] = useState(false)

  function handleHamburgerState() {
    setOpen(open ? false : true)
  }

  return (
    <div className="relative">
      <button
        onClick={handleHamburgerState}
        className="flex size-10 items-center justify-center rounded-md border border-primary/20 hover:bg-primary/10">
        <Sun className="block size-5 dark:hidden" />
        <Moon className="hidden size-5 dark:block" />
      </button>
      {open && (
        <div className="absolute right-0 mt-1 flex min-w-24 flex-col gap-px rounded-md border border-primary/20 p-1">
          <button
            onClick={() => setTheme("light")}
            className="flex flex-nowrap items-center gap-2 rounded-md px-2 py-2 hover:bg-primary/10">
            <Sun className="size-5" />
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="flex flex-nowrap items-center gap-2 rounded-md px-2 py-2 hover:bg-primary/10">
            <Moon className="size-5" />
            Dark
          </button>
        </div>
      )}
    </div>
  )
}
