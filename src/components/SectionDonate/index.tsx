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
    <section className="grid grid-rows-[min-content_1fr] gap-7 bg-background-secondary py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-highlight lg:text-4xl">
              {title}
            </h1>
            <div className="grid grid-rows-[repeat(2,min-content)] gap-10 lg:grid-cols-[355px_1fr] lg:grid-rows-1">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-highlight">{subtitle}</h2>
                <p className="mb-6 w-full text-secondary lg:w-3/4">
                  {description}
                </p>
                <ul className="flex flex-row flex-wrap justify-between gap-4 lg:flex-col lg:gap-8">
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
            </div>
          </div>
          <div className="flex-1">
            <Carousel
              mediaType={"image"}
              contentList={media}
              autoplay={mediaAutoplay}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default DonateSection
