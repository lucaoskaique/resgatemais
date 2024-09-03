import Link from "next/link"

import qrCode from "@/assets/images/qr-code.png"

import Button from "../Button"
import { navLinks } from "../Navbar"
import QrCodeCard from "../QrCodeCard"
import { ResponsiveIcon, ResponsiveLogo } from "../ResponsiveBrand"

const Footer = () => {
  const social = [
    { plataform: "Instagram", info: "@resgate.mais" },
    { plataform: "E-mail", info: "resgatemais@gmail.com" },
    { plataform: "Telefone", info: "(51) 99114-7322" }
  ]
  const qrCodeUrl = qrCode.src
  const title = "FALE CONOSCO"

  return (
    <div className="container flex w-max flex-col items-center justify-between gap-8 py-container text-white sm:w-full sm:flex-row">
      <div className="flex flex-col gap-5 max-sm:w-full">
        <Link href="/" className="flex justify-center">
          <ResponsiveLogo className="hidden w-48 sm:block" highlight="black" />
          <ResponsiveIcon className="w-16 sm:hidden" highlight="black" />
        </Link>
        <ul className="flex flex-col items-center sm:flex-row sm:gap-3">
          {navLinks.map((nav, i) => (
            <li key={i}>
              {nav.href === "/donate" ? (
                <Button size="large" background="secondary" href={nav.href}>
                  {nav.label}
                </Button>
              ) : (
                <Button
                  className="hidden px-0 sm:block"
                  size="medium"
                  background="transparent"
                  href={nav.href}>
                  {nav.label}
                </Button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block">
        <QrCodeCard url={qrCodeUrl} />
      </div>
      <div className="flex flex-col gap-2 sm:gap-6">
        <h2 className="text-paragraph font-bold leading-[18px]">{title}</h2>
        <ul className="flex flex-col gap-1">
          {social.map((social, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-nowrap font-bold">
              {social.plataform}:
              <span className="font-medium">{social.info}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
