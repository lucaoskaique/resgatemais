import Link from "next/link"

import qrCode from "@/assets/images/qr-code.png"

import Button from "../Button"
import { navLinks } from "../Navbar"
import QrCodeCard from "../QrCodeCard"
import { ResponsiveLogo } from "../ResponsiveBrand"

const Footer = () => {
  const qrCodeUrl = qrCode.src
  const title = "FALE CONOSCO"
  const email = "resgatemais@gmail.com"
  const instagram = "@resgate.mais"
  const phone = "(51) 99114-7322"

  return (
    <div className="container flex w-max flex-col items-center justify-between gap-8 py-container text-white md:w-full md:flex-row">
      <div className="flex flex-col gap-5 max-md:w-full">
        <Link href="/">
          <ResponsiveLogo className="w-48" highlight="black" />
        </Link>
        <ul className="flex flex-col items-center gap-3 md:flex-row">
          {navLinks.map((nav, i) => (
            <li key={i}>
              {nav.href === "/donate" ? (
                <Button size="large" background="secondary" href={nav.href}>
                  {nav.label}
                </Button>
              ) : (
                <Button
                  className="px-0"
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
      <div className="flex flex-col gap-2 md:gap-6">
        <h2 className="text-paragraph font-bold leading-[18px]">{title}</h2>
        <ul className="flex flex-col gap-1">
          <li className="font-bold text-white">
            E-mail: <span className="font-medium">{email}</span>
          </li>
          <li className="font-bold text-white">
            Instagram: <span className="font-medium">{instagram}</span>
          </li>
          <li className="font-bold text-white">
            Telefone: <span className="font-medium">{phone}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
