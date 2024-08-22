import Image, { StaticImageData } from "next/image"

import Button from "../Button"

export type SectionAboutProps = {
  title: string
  content: string[]
  label: string
  QrCode: string | StaticImageData
}

export default function SectionAbout({
  title,
  content,
  label,
  QrCode
}: SectionAboutProps) {
  return (
    <section className="grid min-h-screen grid-rows-2">
      <div className="grid grid-rows-[repeat(2,min-content)] justify-items-center gap-y-10 px-8 pb-32 pt-8 lg:h-screen lg:grid-cols-2 lg:grid-rows-1 lg:items-start lg:px-32 lg:pt-24">
        <div className="flex flex-col gap-2">
          <a
            href="#sobre-nos"
            className="mb-2 text-xl font-bold text-highlight">
            {title}
          </a>
          {content.map((paragraph, i) => (
            <p className="text-center leading-tight" key={i}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-col items-center gap-5 lg:justify-self-end">
          <Image src={QrCode} alt={"QrCode"} />
          <Button
            className="w-60 text-center tracking-widest"
            fullWidth
            href="/donate">
            {label}
          </Button>
        </div>
      </div>
      <div className="bg-highlight px-8 pb-8 pt-48 lg:h-screen lg:px-32 lg:pb-24">
        {/* Sessão de cards + imagem // Livia */}
      </div>
    </section>
  )
}
