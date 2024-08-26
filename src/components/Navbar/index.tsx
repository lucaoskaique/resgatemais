import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import ThemeToggle from "@/components/ThemeToggler"

import Button from "../Button"

type NavbarProps = {
  bgColor?: "light" | "dark"
}

export type NavLinksProps = {
  label: string
  href: string
}

export default function Navbar({ bgColor = "dark" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  const bgColorClasses = {
    light: "bg-[#D9D9D9]",
    dark: "bg-[#323232]"
  }

  useEffect(() => {
    const header = document.getElementById("header")
    if (!header) return

    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      header.classList.toggle("bg-transparent", !scrolled)
      header.classList.toggle(bgColorClasses[bgColor], scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const title = "Organização Audiovisual da Sociedade Civil"
  const logo = {
    desktop: "/logo-white-noText.png",
    mobile: "/icon-red.png"
  }
  const navLinks: NavLinksProps[] = [
    {
      label: "Sobre",
      href: "#sobre-nos"
    },
    {
      label: "Ações",
      href: "#"
    },
    {
      label: "Projetos",
      href: "#"
    },
    {
      label: "DOAR",
      href: "/donate"
    }
  ]

  return (
    <header
      className="container fixed inset-x-0 z-50 flex items-center justify-between bg-transparent px-10 py-3 text-sm text-[#F8FAFC] transition-colors duration-500 md:text-lg"
      id="header"
      data-testid="header">
      <div className="flex items-center gap-3">
        <Link href="/">
          {/* Mobile Logo */}
          <Image
            data-testid="mobile-logo"
            className="w-10 sm:hidden"
            src={logo.mobile}
            width={100}
            height={100}
            alt=""
          />
          {/* Desktop Logo */}
          <Image
            data-testid="large-screen-light-logo"
            className="hidden w-full sm:block"
            src={logo.desktop}
            width={120}
            height={120}
            alt=""
          />
        </Link>
        <h1 className="hidden w-1/2 text-wrap font-bold md:block lg:w-max">
          {title}
        </h1>
      </div>

      <div className="md:hidden">
        <Button size="medium" href="/donate">
          DOAR
        </Button>
      </div>

      <nav className="flex items-center gap-6">
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((nav, i) => {
            if (nav.href === "/donate") {
              return (
                <Button size="medium" href={nav.href} key={i}>
                  {nav.label}
                </Button>
              )
            } else {
              return (
                <Button
                  size="medium"
                  background="transparent"
                  href={nav.href}
                  key={i}>
                  {nav.label}
                </Button>
              )
            }
          })}
        </ul>
        <span className="hidden md:block">
          <ThemeToggle />
        </span>
        <span className="lg:hidden">
          <div className="relative">
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
            <div
              className={`fixed inset-0 z-20 ${isOpen ? "block" : "hidden"}`}>
              <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50" : "opacity-0"}`}
              />
              <nav
                ref={dropdownRef}
                className={`fixed left-0 top-0 z-20 max-h-96 w-full animate-drawerDown bg-background`}
                role="navigation">
                <button
                  onClick={handleButtonClick}
                  className="absolute right-4 top-4 text-3xl font-bold text-black dark:text-white"
                  aria-label="Close Menu">
                  &times;
                </button>
                <ul className="flex h-full flex-col items-center justify-center space-y-6 py-4">
                  {navLinks.map((nav, i) => {
                    if (nav.href === "/donate") {
                      return (
                        <Button
                          className="hidden md:block"
                          size="medium"
                          href={nav.href}
                          key={i}>
                          {nav.label}
                        </Button>
                      )
                    } else {
                      return (
                        <Button
                          textColor="primary"
                          size="medium"
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
            </div>
          </div>
        </span>
      </nav>
    </header>
  )
}
