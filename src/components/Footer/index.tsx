import Link from "next/link"

import Button from "../Button"
import { navLinks } from "../Navbar"
// import QrCodeCard from "../QrCodeCard"
import { ResponsiveIcon, ResponsiveLogo } from "../ResponsiveBrand"

const Footer = () => {
  const social = [
    { plataform: "Instagram", info: "@resgate.mais" },
    { plataform: "E-mail", info: "resgatemais@gmail.com" },
    { plataform: "Telefone", info: "(51) 99114-7322" }
  ]
  // const qrCodeUrl = "/images/qr-code.png"
  const title = "FALE CONOSCO"

  return (
    <div>
      <div className="flex flex-col items-start justify-between gap-8 px-10 py-10 text-white sm:container sm:w-full sm:flex-row sm:py-24">
        <Link href="/" className="flex justify-start sm:hidden">
          <ResponsiveLogo className="hidden w-48 sm:block" highlight="black" />
          <ResponsiveIcon className="w-16 sm:hidden" highlight="white" />
        </Link>
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
        {/* <div className="hidden md:block">
        <QrCodeCard url={qrCodeUrl} />
      </div> */}

        <div className="flex flex-col gap-5 self-start">
          <Link href="/" className="hidden justify-start sm:flex">
            <ResponsiveLogo
              className="hidden w-48 sm:block"
              highlight="black"
            />
            <ResponsiveIcon className="w-16 sm:hidden" highlight="white" />
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
      </div>
      <div className="mt-8 w-full text-center">
        <p className="px-1 py-1 text-sm text-gray-300">
          Desenvolvido por Comunidade DOS • © 2024
        </p>
      </div>
    </div>
  )
}

export default Footer
