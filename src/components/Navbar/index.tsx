import Link from "next/link"
import { useState } from "react"

import { SwitchTheme } from "../switch-theme/switch-theme"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav>
      <ul className="hidden lg:flex lg:items-center lg:gap-9 ">
        <li className="py-3">
            <Link href="#" data-testid="sobre-link-large">
              Sobre
            </Link>
          </li>
          <li className="py-3">
            <Link href="#" data-testid="acoes-link-large">
              Ações
            </Link>
          </li>
          <li>
          <SwitchTheme />
        </li>
        <li className="py-3">
          <Link
            className="rounded-[0.313rem] bg-color-red px-4 py-3"
            data-testid="doar-link-large"
            href="#">
            Doar
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-4 lg:hidden">
          <SwitchTheme />
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center justify-center gap-1 p-4 rounded-lg"
            aria-label="Toggle Menu">
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 dark:bg-white ${isOpen ? "translate-y-2 rotate-45 transform" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-opacity duration-300 dark:bg-white ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 dark:bg-white ${isOpen ? "-translate-y-1 -rotate-45 transform" : ""}`}
            />
          </button>
        </div>
      <nav
        className={`absolute right-0 top-7 mt-12 w-48 bg-white text-black dark:bg-[#323232] dark:text-white lg:hidden ${isOpen ? "" : "hidden"}`}
        role="navigation">
        <ul className="flex flex-col items-center py-4">
          <li className="py-2">
            <Link href="#" className="block px-4 py-2" data-testid="sobre-link-small">
              Sobre
            </Link>
          </li>
          <li className="py-2">
            <Link href="#" className="block px-4 py-2" data-testid="acoes-link-small">
              Ações
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  )
}
