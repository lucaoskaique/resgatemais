"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

import { Navbar } from "../Navbar"

export function Header() {
  useEffect(() => {
    const header = document.getElementById("header")
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

  return (
    <>
      <header
        className="fixed top-0 hidden w-full items-center justify-between px-10 py-6 text-xs font-bold text-black dark:text-white lg:flex"
        id="header"
        data-testid="header">
        <div className="flex items-center gap-6">
          <div className="hidden dark:block">
            <Link href="#">
              <Image
                className="w-full max-w-[6.5rem]"
                src="/logo-oficial-02.svg"
                width={100}
                height={100}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="block dark:hidden">
            <Link href="#">
              <Image
                className="w-full max-w-[6.5rem]"
                src="/logo-oficial_Prancheta-1.svg"
                width={100}
                height={100}
                alt="Logo"
              />
            </Link>
          </div>
          <h1>Organização Audiovisual da Sociedade Civil</h1>
        </div>
        <Navbar />
      </header>
    </>
  )
}
