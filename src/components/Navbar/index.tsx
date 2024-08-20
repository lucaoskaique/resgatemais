import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

import ThemeToggle from "@/components/ThemeToggler"

import Button from "../Button"
import { BurgerMenu } from "../ui/BurgerMenu"

type NavbarProps = {
  bgColor?: "light" | "dark"
}

export type NavLinksProps = {
  label: string
  href: string
}

export default function Navbar({ bgColor = "dark" }: NavbarProps) {
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
      href: "#"
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
      className="fixed top-0 z-50 flex w-full items-center justify-between bg-transparent px-10 py-3 text-sm text-[#F8FAFC] transition-colors duration-500 md:text-lg"
      id="header"
      data-testid="header">
      <div className="flex items-center gap-3">
        <Link href="/">
          {/* Mobile Logo */}
          <Image
            data-testid="mobile-logo"
            className="w-full max-w-[6.5rem] sm:hidden"
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
        <ThemeToggle />
        <span className="lg:hidden">
          <BurgerMenu navList={navLinks} />
        </span>
      </nav>
    </header>
  )
}
