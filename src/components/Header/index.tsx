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
          src="/icon-red.png"
          width={100}
          height={100}
          alt=""
        />
      </Link>
      <Link
        className="block rounded-[0.313rem] bg-color-red px-4 py-3 lg:hidden"
        data-testid="doar-link-small"
        href="#">
        Doar
      </Link>
      <div className="hidden lg:flex lg:items-center lg:gap-6">
        <Link
          className="flex h-7 w-[6.5rem] items-center overflow-y-hidden dark:hidden"
          href="#">
          <Image
            data-testid="large-screen-light-logo"
            className="w-full"
            src="/logo-black-red.png"
            width={120}
            height={120}
            alt="Logo Resgate Mais"
          />
        </Link>
        <Link
          className="hidden h-7 w-[6.5rem] items-center overflow-y-hidden dark:flex"
          href="#">
          <Image
            data-testid="large-screen-dark-logo"
            className="w-full"
            src="/logo-white-red.png"
            width={120}
            height={120}
            alt=""
          />
        </Link>
        <h1>Organização Audiovisual da Sociedade Civil</h1>
      </div>
      <Navbar />
    </header>
  )
}
