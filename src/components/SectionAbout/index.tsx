import Image from "next/image"

import Button from "../Button"

export type SectionAboutProps = {
  title?: string
  content?: string[]
  label?: string
  QrCode?: string
  image?: string
  cards?: {
    title: string
    content: string
  }[]
}

export default function SectionAbout({
  title,
  content,
  label,
  QrCode,
  image,
  cards
}: SectionAboutProps) {
  return (
    <section
      id="sobre-nos"
      className="relative grid grid-rows-2 lg:min-h-screen">
      <div className="grid grid-rows-[repeat(2,min-content)] justify-items-center gap-y-10 px-8 pb-24 pt-4 sm:pb-28 md:pb-32 lg:min-h-[50vh] lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:px-32 lg:pb-40">
        <div className="flex flex-col gap-2 lg:gap-3">
          <h1 className="mb-2 text-xl font-bold text-highlight lg:text-2xl">
            {title}
          </h1>
          {content?.map((paragraph, i) => (
            <p
              className="text-center leading-tight lg:text-start lg:text-lg"
              key={i}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-col items-center gap-5 lg:justify-self-end">
          <Image src={QrCode ?? ""} alt={"QrCode"} width={180} height={180} />
          <Button
            className="w-60 text-center tracking-widest"
            fullWidth
            href="/donate">
            {label}
          </Button>
        </div>
      </div>
      {/* <Image className="absolute -top-12 lg:-top-24 mx-auto left-1/2 -translate-x-1/2 max-h-[260px]" src={image ?? ""} alt={""} width={980} height={260} /> */}
      <Image
        className="absolute left-1/2 top-1/2 max-h-[260px] -translate-x-1/2 -translate-y-1/2"
        src={image ?? ""}
        alt={""}
        width={980}
        height={260}
      />
      <div className="bg-highlight px-8 pt-24 text-white sm:pt-28 md:pt-32 lg:px-32 lg:pt-40">
        <div className="flex h-full flex-row flex-wrap justify-around gap-6 lg:justify-between lg:gap-0">
          {cards?.map((card, i) => (
            <article
              className="flex max-w-[250px] flex-col gap-1 text-pretty lg:gap-2"
              key={i}>
              <h2 className="text-lg font-bold lg:text-xl">{card.title}</h2>
              <p className="text-sm lg:text-base">{card.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
