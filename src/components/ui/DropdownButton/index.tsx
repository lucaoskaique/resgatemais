import { Moon, Sun } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { ToggleProps } from "../Switch"

export function DropdownToggle({ setTheme }: ToggleProps) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  function handleDropdownState() {
    setOpen(open ? false : true)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={handleDropdownState}
        className="flex size-10 items-center justify-center rounded-md border border-[#F8FAFC]/20 hover:bg-[#F8FAFC]/10">
        <Sun className="block size-5 dark:hidden" />
        <Moon className="hidden size-5 dark:block" />
      </button>
      {open && (
        <div className="absolute right-0 mt-1 flex min-w-24 flex-col gap-px rounded-md border border-[#F8FAFC]/20 bg-[#323232] p-1">
          <button
            onClick={() => setTheme("light")}
            className="flex flex-nowrap items-center gap-2 rounded-md px-2 py-2 hover:bg-[#F8FAFC]/10">
            <Sun className="size-5" />
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="flex flex-nowrap items-center gap-2 rounded-md px-2 py-2 hover:bg-[#F8FAFC]/10">
            <Moon className="size-5" />
            Dark
          </button>
        </div>
      )}
    </div>
  )
}
