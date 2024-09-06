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
    threshold: 0.2
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="sobre-nos"
      className="grid grid-rows-[repeat(2,min-content)]">
      <div className="container grid grid-rows-[repeat(2,min-content)] justify-items-center gap-y-10 py-container pb-container lg:min-h-[50vh] lg:grid-cols-[3fr_1fr] lg:grid-rows-1 lg:items-center">
        <SectionHeader title={title} content={content} />
        <div className="flex h-full items-end justify-end gap-5 lg:justify-self-end">
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
    <div className="flex w-full flex-col gap-4 lg:gap-6">
      {content.map((paragraph, i) => (
        <p
          key={i}
          className="max-w-[700px] text-paragraph leading-tight first:font-bold odd:text-black dark:odd:text-white max-lg:even:self-end max-lg:even:text-end">
          {paragraph}
        </p>
      ))}
    </div>
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
    <div className="flex flex-col max-xl:gap-8 xl:flex-row xl:justify-between">
      {cards.map((card, i) => (
        <article
          className="flex min-w-[300px] flex-col gap-1 text-pretty max-lg:w-full max-md:px-4 lg:gap-2 xl:w-min xl:max-w-[400px]"
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
