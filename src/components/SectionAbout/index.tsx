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
    <section id="sobre-nos" className="grid grid-rows-[repeat(2,min-content)]">
      <div className="container grid grid-rows-[repeat(2,min-content)] justify-items-center gap-y-10 pb-24 pt-container sm:pb-28 md:min-h-[50vh] md:grid-cols-2 md:grid-rows-1 md:items-center md:pb-32 lg:pb-40">
        <SectionHeader title={title} content={content} />
        <div className="flex flex-col items-center gap-5 lg:justify-self-end">
          <QrCodeCard label={label} url={QrCode} />
        </div>
      </div>
      <div className="relative flex h-full bg-highlight pb-container">
        <Image
          className="absolute left-1/2 top-0 max-h-[260px] -translate-x-1/2 -translate-y-1/2"
          src={image ?? ""}
          alt={""}
          width={980}
          height={260}
        />
        <CardsSection cards={cards} />
      </div>
    </section>
  )
}

const SectionHeader = ({
  title = "",
  content = []
}: {
  title: string
  content: string[]
}) => (
  <div className="flex w-full flex-col gap-4 lg:gap-5">
    {title && (
      <h1 className="mb-2 text-h1 font-bold text-highlight max-md:text-center">
        {title}
      </h1>
    )}
    {content.map((paragraph, i) =>
      i % 2 ? (
        <div className="flex w-full max-md:justify-end" key={i}>
          <p className="my-4 max-w-[450px] text-end text-paragraph leading-tight md:text-start">
            {paragraph}
          </p>
        </div>
      ) : (
        <div className="w-full" key={i}>
          <p className="max-w-[450px] text-start text-paragraph leading-tight">
            {paragraph}
          </p>
        </div>
      )
    )}
  </div>
)

const CardsSection = ({
  cards = []
}: {
  cards: {
    title: string
    content: string
  }[]
}) => (
  <div className="container pt-24 text-primary sm:pt-28 md:pt-32 lg:pt-40">
    <div className="flex flex-row flex-wrap justify-around gap-6 lg:justify-between lg:gap-0">
      {cards.map((card, i) => (
        <article
          className="flex w-full flex-col gap-1 text-pretty lg:max-w-[300px] lg:gap-2"
          key={i}>
          <h2 className="text-h2 font-bold tracking-widest text-white">
            <span className="mr-1">#</span>
            {card.title}
          </h2>
          <p className="text-paragraph leading-snug">{card.content}</p>
        </article>
      ))}
    </div>
  </div>
)
