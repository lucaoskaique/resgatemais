import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import ThemeToggle from "@/components/ThemeToggler"

import { Banner } from "../Banner"
import Button from "../Button"
import { ResponsiveIcon } from "../ResponsiveBrand"

export type NavLinksProps = {
  label: string
  href: string
}

export const navLinks: NavLinksProps[] = [
  { label: "Sobre", href: "#sobre-nos" },
  { label: "Ações", href: "#" },
  { label: "Projetos", href: "#" },
  { label: "DOAR", href: "/donate" }
]

export const AnimatedBanner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
    <Banner />
  </motion.div>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const bgColorClasses = isScrolled
    ? "bg-background text-primary"
    : "bg-transparent text-primary"

  return (
    <div className="relative">
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            id="banner"
            className="fixed left-0 right-0 top-0 z-50">
            <AnimatedBanner />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        id="header"
        className={`fixed inset-x-0 z-40 transition-all duration-300 ${bgColorClasses} ${isScrolled ? "top-0 py-2" : "top-12 py-3"}`}
        data-testid="header">
        <div className="container flex items-center justify-between py-3 text-sm md:text-lg">
          <div className="flex items-center gap-3">
            <Link href="/">
              <ResponsiveIcon className="w-12" />
              {/* <ResponsiveLogo className="hidden h-6 w-24 md:block lg:h-8 lg:w-32" /> */}
            </Link>
            <h1 className="hidden md:block">
              Organização Audiovisual
              <br className="xl:hidden" /> da Sociedade Civil
            </h1>
          </div>

          <Button className="md:hidden" href="/donate">
            DOAR
          </Button>

          <nav className="flex items-center gap-6">
            <ul className="hidden items-center gap-6 lg:flex">
              {navLinks.map((nav, i) => (
                <li key={i}>
                  {nav.href === "/donate" ? (
                    <Button href={nav.href}>{nav.label}</Button>
                  ) : (
                    <Button
                      size="medium"
                      background="transparent"
                      href={nav.href}>
                      {nav.label}
                    </Button>
                  )}
                </li>
              ))}
            </ul>
            <span className="hidden md:block">
              <ThemeToggle />
            </span>
            <span className="relative lg:hidden">
              <button
                onClick={handleButtonClick}
                className="flex flex-col items-center justify-center gap-1 rounded-lg p-3"
                aria-label="Toggle Menu">
                <span
                  className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45 transform" : ""}`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isOpen ? "-translate-y-1 -rotate-45 transform" : ""}`}
                />
              </button>
              <div
                className={`fixed inset-0 z-20 ${isOpen ? "block" : "hidden"}`}>
                <div
                  className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                    isOpen ? "opacity-50" : "opacity-0"
                  }`}
                />
                <nav
                  ref={dropdownRef}
                  className="fixed left-0 top-0 z-20 max-h-96 w-full animate-drawerDown bg-background"
                  role="navigation">
                  <button
                    onClick={handleButtonClick}
                    className="absolute right-4 top-4 text-3xl font-bold text-black dark:text-white"
                    aria-label="Close Menu">
                    &times;
                  </button>
                  <ul className="flex h-full flex-col items-center justify-center space-y-6 py-4">
                    {navLinks.map((nav, i) => (
                      <li key={i}>
                        <Button
                          textColor="primary"
                          size="medium"
                          background={
                            nav.href === "/donate" ? "red" : "transparent"
                          }
                          href={nav.href}
                          className={
                            nav.href === "/donate" ? "hidden md:block" : ""
                          }>
                          {nav.label}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </span>
          </nav>
        </div>
      </motion.header>
    </div>
  )
}
