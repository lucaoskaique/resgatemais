import Image from "next/image"
import Link from "next/link"

import Button from "../Button"
import { navLinks } from "../Navbar"

const Footer = () => {
  const title = "FALE CONOSCO"
  const email = "resgatemais@gmail.com"
  const instagram = "@resgate.mais"
  const phone = "(51) 99114-7322"

  return (
    <div className="container flex w-full items-center justify-between gap-8 py-container text-white">
      <div className="flex flex-col gap-3">
        <Link href="/">
          <Image
            data-testid="large-screen-light-logo"
            className=""
            src="/logo-white-black.png"
            width={120}
            height={120}
            alt=""
          />
        </Link>
        <ul className="flex flex-col gap-1">
          {navLinks.map((nav, i) => (
            <li key={i}>
              {nav.href === "/donate" ? (
                <Button size="medium" href={nav.href}>
                  {nav.label}
                </Button>
              ) : (
                <Button size="medium" background="transparent" href={nav.href}>
                  {nav.label}
                </Button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex min-w-[211px] flex-col gap-2 md:gap-6">
        <h2 className="text-[18px] font-bold leading-[18px]">{title}</h2>
        <ul className="text-sm">
          <li className="leading-[16.24px]">E-mail: {email}</li>
          <li className="leading-[16.24px]">Instagram: {instagram}</li>
          <li className="leading-[16.24px]">Telefone: {phone}</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
