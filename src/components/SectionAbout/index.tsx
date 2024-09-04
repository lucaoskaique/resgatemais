import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="sobre-nos"
      className="grid grid-rows-[repeat(2,min-content)]">
      <div className="container grid grid-rows-[repeat(3,min-content)] justify-items-center gap-y-10 py-container pb-container md:min-h-[50vh] md:grid-cols-[3fr_1fr] md:grid-rows-1 md:items-center">
        <SectionHeader title={title} content={content} />
        <div className="flex h-full flex-col items-end justify-end gap-5 lg:justify-self-end">
          <QrCodeCard label={label} url={QrCode} />
        </div>
      </div>
      {/* Improved Image Animation */}

      <Image
        className="w-full"
        src={image ?? ""}
        alt={"Section image"}
        width={980}
        height={260}
      />

      <div className="flex bg-highlight pb-container">
        <CardsSection cards={cards} />
      </div>
    </motion.section>
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
      <h1 className="mb-5 text-h1 font-bold text-highlight max-md:text-center">
        {title}
      </h1>
    )}
    {content.map((paragraph, i) =>
      i % 2 ? (
        <div className="flex w-full max-md:justify-end" key={i}>
          <p className="my-4 max-w-[700px] text-end text-paragraph leading-tight md:text-start">
            {paragraph}
          </p>
        </div>
      ) : (
        <div className="w-full" key={i}>
          <p className="max-w-[700px] text-start text-paragraph leading-tight text-white">
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
  <div className="container py-container text-primary">
    <div className="flex flex-row flex-wrap justify-around gap-6 lg:justify-between lg:gap-0">
      {cards.map((card, i) => (
        <article
          className="flex w-full flex-col gap-1 text-pretty lg:max-w-[450px] lg:gap-2"
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
