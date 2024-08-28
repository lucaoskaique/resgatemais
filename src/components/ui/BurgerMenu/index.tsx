import { useState } from "react"

import Button from "@/components/Button"
import { NavLinksProps } from "@/components/NavBar"

type BurgerMenuProps = {
  navList: NavLinksProps[]
}

export function BurgerMenu({ navList }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="relative">
      <button
        onClick={handleButtonClick}
        className="flex flex-col items-center justify-center gap-1 rounded-lg p-3"
        aria-label="Toggle Menu">
        <span
          className={`block h-0.5 w-6 bg-[#F8FAFC] transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45 transform" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#F8FAFC] transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#F8FAFC] transition-transform duration-300 ${isOpen ? "-translate-y-1 -rotate-45 transform" : ""}`}
        />
      </button>
      <nav
        className={`absolute right-0 top-10 mt-1 rounded-sm border border-[#F8FAFC]/20 bg-[#323232] px-10 text-white lg:hidden ${isOpen ? "" : "hidden"}`}
        role="navigation">
        <ul className="flex flex-col items-center gap-3 py-4">
          {navList.map((nav, i) => {
            if (nav.href !== "/donate") {
              return (
                <Button
                  size="small"
                  background="transparent"
                  href={nav.href}
                  key={i}>
                  {nav.label}
                </Button>
              )
            }
          })}
        </ul>
      </nav>
    </section>
  )
}
