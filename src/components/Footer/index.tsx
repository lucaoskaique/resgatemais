import { Lexend_Zetta, Yaldevi } from "next/font/google"

const yaldevi = Yaldevi({ subsets: ["latin"] })
const lexend_zetta = Lexend_Zetta({ subsets: ["latin"] })

export interface FooterProps {
  textFooter?: string
  title?: string
  phone?: string
  email?: string
  instagram?: string
}

const Footer = ({
  textFooter,
  title,
  phone,
  email,
  instagram
}: FooterProps) => {
  return (
    <div className="flex h-[367px] w-full flex-col items-center justify-around bg-red-500 text-white md:flex-row">
      <p
        className={` ${yaldevi.className} max-w-[264px] text-sm font-bold md:max-w-[383px] md:text-lg`}>
        {textFooter}
      </p>

      <div className="flex min-w-[211px] flex-col">
        <h2
          className={`${lexend_zetta.className} mb-[33px] text-[18px] font-bold leading-[18px]`}>
          {title}
        </h2>
        <ul className={`${yaldevi.className} text-sm`}>
          <li className="leading-[16.24px]">E-mail: {email}</li>
          <li className="leading-[16.24px]">Instagram: {instagram}</li>
          <li className="leading-[16.24px]">Telefone: {phone}</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
