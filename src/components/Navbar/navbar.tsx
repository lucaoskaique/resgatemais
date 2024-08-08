"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { SwitchTheme } from "../switch-theme/switch-theme"

interface Links {
  dark?: string
  light?: string
  small?: string
}

export interface NavbarProps {
  title?: string
  logos?: Links
  textLinks?: string[]
}

export function Navbar({ title, logos, textLinks = [] }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const header = document.getElementById("header")
    if (!header) return

    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      header.classList.toggle("bg-transparent", !scrolled)
      header.classList.toggle("bg-background", scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 flex w-full items-center justify-between px-10 py-6 text-xs font-bold"
      id="header"
      data-testid="header">
      <Link className="block lg:hidden" href="#">
        <Image
          data-testid="small-screen-logo"
          className="w-full max-w-[6.5rem]"
          src={logos?.small ? logos.small : "/logo-white-red.png"}
          width={100}
          height={100}
          alt=""
        />
      </Link>
      <Link
        className="block rounded-[0.313rem] bg-color-red px-4 py-3 lg:hidden"
        data-testid="doar-link-small"
        href="#">
        {textLinks[2] ? textLinks[2] : "doar"}
      </Link>
      <div className="hidden lg:flex lg:items-center lg:gap-6">
        <Link
          className="flex h-7 w-[6.5rem] items-center overflow-y-hidden dark:hidden"
          href="#">
          <Image
            data-testid="large-screen-light-logo"
            className="w-full"
            src={logos?.light ? logos.light : "/logo-black-red.png"}
            width={120}
            height={120}
            alt=""
          />
        </Link>
        <Link
          className="hidden h-7 w-[6.5rem] items-center overflow-y-hidden dark:flex"
          href="#">
          <Image
            data-testid="large-screen-dark-logo"
            className="w-full"
            src={logos?.dark ? logos.dark : "/logo-white-red.png"}
            width={120}
            height={120}
            alt=""
          />
        </Link>
        <h1>{title}</h1>
      </div>

      <nav>
        <ul className="hidden lg:flex lg:items-center lg:gap-9">
          <li className="py-3">
            <Link href="#" data-testid="sobre-link-large">
              {textLinks[0] ? textLinks[0] : "sobre"}
            </Link>
          </li>
          <li className="py-3">
            <Link href="#" data-testid="acoes-link-large">
              {textLinks[1] ? textLinks[1] : "acoes"}
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
              {textLinks[2] ? textLinks[2] : "doar"}
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4 lg:hidden">
          <SwitchTheme />
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center justify-center gap-1 rounded-lg p-4"
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
              <Link
                href="#"
                className="block px-4 py-2"
                data-testid="sobre-link-small">
                {textLinks[0] ? textLinks[0] : "sobre"}
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="#"
                className="block px-4 py-2"
                data-testid="acoes-link-small">
                {textLinks[1] ? textLinks[1] : "acoes"}
              </Link>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  )
}