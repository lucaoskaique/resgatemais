import Image from "next/image"

import QrCodeCard from "../QrCodeCard"

export type SectionAboutProps = {
  title: string
  content: string[]
  label: string
  QrCode: string
  image: string
  cards: {
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
      <div className="container grid grid-rows-[repeat(2,min-content)] justify-items-center gap-y-10 pb-24 pt-4 sm:pb-28 md:pb-32 lg:min-h-[50vh] lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:pb-40">
        <SectionHeader title={title} content={content} />
        <div className="flex flex-col items-center gap-5 lg:justify-self-end">
          <QrCodeCard label={label} url={QrCode} buttonUrl="/donate" />
        </div>
      </div>
      <Image
        className="absolute left-1/2 top-1/2 max-h-[260px] -translate-x-1/2 -translate-y-1/2"
        src={image ?? ""}
        alt={""}
        width={980}
        height={260}
      />
      <div className="bg-highlight">
        <CardsSection cards={cards} />
      </div>
    </section>
  )
}

const CardsSection = ({
  cards = []
}: {
  cards: {
    title: string
    content: string
  }[]
}) => (
  <div className="container pt-24 text-white sm:pt-28 md:pt-32 lg:pt-40">
    <div className="flex h-full flex-row flex-wrap justify-around gap-6 lg:justify-between lg:gap-0">
      {cards.map((card, i) => (
        <article
          className="flex max-w-[250px] flex-col gap-1 text-pretty lg:gap-2"
          key={i}>
          <h2 className="text-lg font-bold lg:text-xl">{card.title}</h2>
          <p className="text-sm lg:text-base">{card.content}</p>
        </article>
      ))}
    </div>
  </div>
)

const SectionHeader = ({
  title = "",
  content = []
}: {
  title: string
  content: string[]
}) => (
  <div className="flex flex-col gap-2 lg:gap-3">
    {title && (
      <h1 className="mb-2 text-xl font-bold text-highlight lg:text-2xl">
        {title}
      </h1>
    )}
    {content.map((paragraph, i) => (
      <p className="text-center leading-tight lg:text-start lg:text-lg" key={i}>
        {paragraph}
      </p>
    ))}
  </div>
)
