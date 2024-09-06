import Autoplay from "embla-carousel-autoplay"

import Carousel from "@/components/Carousel"
import MilestoneCard, { MilestoneCardProps } from "@/components/MilestoneCard"

export type DonateSectionProps = {
  title: string
  subtitle: string
  description: string
  milestones: MilestoneCardProps[]
  media: {
    src: string
    label?: string
  }[]
}

export const DonateSection = ({
  title,
  subtitle,
  description,
  milestones,
  media
}: DonateSectionProps) => {
  // const inverseMedia = media.slice(0).reverse()

  return (
    <section className="bg-background-secondary py-container text-secondary">
      <div className="container">
        <div className="flex flex-col gap-10 pb-container lg:flex-row lg:gap-20">
          <div className="self-start">
            <h1 className="mb-10 text-h1 font-bold leading-tight text-highlight">
              {title}
            </h1>
            <h2 className="text-h2 text-highlight">{subtitle}</h2>
            <p className="mt-4 w-full text-paragraph">{description}</p>
          </div>
          <div className="self-start lg:self-end">
            <div className="flex flex-col items-end justify-end">
              <ul className="flex flex-col gap-4 lg:gap-8">
                {milestones?.map((item, i) => (
                  <MilestoneCard
                    key={i}
                    title={item.title}
                    content={item.content}
                    data={item.data}
                    subcontent={item.subcontent}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between gap-5 lg:mt-10">
          <div className="max-w-[800px]">
            <Carousel plugins={[Autoplay()]} slides={media} direction={"ltr"} />
          </div>
          <div className="hidden max-w-[800px] lg:block">
            <Carousel plugins={[Autoplay()]} slides={media} direction={"rtl"} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default DonateSection
