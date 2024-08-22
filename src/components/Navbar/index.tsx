import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { SwitchTheme } from "../switchTheme/switch-theme"

export default function Navbar() {
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

  const title = "Organização Audiovisual da Sociedade Civil"
  const logos = {
    dark: "/logo-white-red.png",
    light: "/logo-black-red.png",
    small: "/icon-red.png"
  }
  const textLinks = ["sobre", "acoes", "doar"]

  return (
    <header
      className="fixed top-0 flex w-full items-center justify-between px-10 py-6 text-xs font-bold"
      id="header"
      data-testid="header">
      <Link className="block lg:hidden" href="#">
        <Image
          data-testid="small-screen-logo"
          className="w-full max-w-[6.5rem]"
          src={logos.small}
          width={100}
          height={100}
          alt=""
        />
      </Link>
      <Link
        className="block rounded-[0.313rem] bg-color-red px-4 py-3 lg:hidden"
        data-testid="doar-link-small"
        href="#">
        {textLinks[2]}
      </Link>
      <div className="hidden lg:flex lg:items-center lg:gap-6">
        <Link
          className="flex h-7 w-[6.5rem] items-center overflow-y-hidden dark:hidden"
          href="#">
          <Image
            data-testid="large-screen-light-logo"
            className="w-full"
            src={logos.light}
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
            src={logos.dark}
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
              {textLinks[0]}
            </Link>
          </li>
          <li className="py-3">
            <Link href="#" data-testid="acoes-link-large">
              {textLinks[1]}
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
              {textLinks[2]}
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
          className={`fixed left-0 top-0 z-20 h-full w-full bg-white text-black transition-transform duration-300 ease-in-out dark:bg-[#323232] dark:text-white ${isOpen ? "translate-y-0 transform" : "-translate-y-full transform"}`}
          role="navigation">
          <button
            onClick={toggleMenu}
            className="absolute right-4 top-4 text-3xl font-bold text-black dark:text-white"
            aria-label="Close Menu">
            &times;
          </button>
          <ul className="flex h-full flex-col items-center justify-center space-y-6 py-4">
            <li>
              <Link
                href="#"
                className="block px-4 py-2 text-lg"
                data-testid="sobre-link-small">
                {textLinks[0]}
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 text-lg"
                data-testid="acoes-link-small">
                {textLinks[1]}
              </Link>
            </li>
            <li>
              <Link
                className="block rounded-[0.313rem] bg-color-red px-4 py-3 text-lg"
                data-testid="doar-link-small"
                href="#">
                {textLinks[2]}
              </Link>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  )
}
