"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import ThemeToggle from "@/components/theme-toggle/theme-toggle"

export function HeaderResponsive() {
  useEffect(() => {
    const header = document.getElementById("header-responsive")
    if (!header) return

    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      header.classList.toggle("bg-transparent", !scrolled)
      header.classList.toggle("dark:bg-[#323232]", scrolled)
      header.classList.toggle("bg-white", scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className="fixed top-0 flex w-full items-center justify-between bg-transparent px-10 py-6 text-xs font-bold text-black dark:text-white lg:hidden"
      id="header-responsive">
      <div className="flex items-center justify-center lg:hidden">
        <Link href="#">
          <Image
            className="w-full max-w-[6.5rem]"
            src="/a+vermelho.svg"
            width={100}
            height={100}
            alt="Logo"
          />
        </Link>
      </div>
      <Link
        href="#"
        className="rounded-[0.313rem] bg-red-500 px-4 py-3 text-white"
        data-testid="doar-link">
        Doar
      </Link>
      <div className="flex items-center gap-1">
        <ThemeToggle />
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center justify-center gap-1 p-4 lg:hidden"
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
            <Link href="#" className="block px-4 py-2" data-testid="sobre-link">
              Sobre
            </Link>
          </li>
          <li className="py-2">
            <Link href="#" className="block px-4 py-2" data-testid="acoes-link">
              Ações
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
