import Carousel, { MediaProps } from "@/components/Carousel"
import MilestoneCard, { MilestoneCardProps } from "@/components/MilestoneCard"

export type DonateSectionProps = {
  title: string
  subtitle: string
  description: string
  milestones: MilestoneCardProps[]
  media: MediaProps[]
  mediaAutoplay: boolean
}

export const DonateSection = ({
  title,
  subtitle,
  description,
  milestones,
  media,
  mediaAutoplay
}: DonateSectionProps) => {
  return (
    <section className="container grid grid-rows-[min-content_1fr] gap-7 py-7 lg:gap-20">
      <h1 className="text-3xl font-bold text-highlight lg:text-4xl">{title}</h1>
      <div className="grid grid-rows-[repeat(2,min-content)] gap-10 lg:grid-cols-[355px_1fr] lg:grid-rows-1">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-highlight">{subtitle}</h2>
          <p className="mb-6 w-3/4">{description}</p>
          <ul className="flex flex-row justify-between gap-2 lg:flex-col lg:gap-8">
            {milestones?.map((item, i) => (
              <MilestoneCard
                key={i}
                title={item.title}
                content={item.content}
                subcontent={item.subcontent}
              />
            ))}
          </ul>
        </div>
        <Carousel
          mediaType={"image"}
          contentList={media}
          autoplay={mediaAutoplay}
        />
      </div>
    </section>
  )
}
export default DonateSection
