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
    <section className="bg-background-secondary py-container">
      <div className="container">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
          <div className="flex-1">
            <h1 className="text-h1 font-bold leading-tight text-highlight">
              {title}
            </h1>
            <h2 className="text-h2 text-highlight">{subtitle}</h2>
            <p className="mb-6 w-full text-paragraph text-secondary">
              {description}
            </p>
          </div>
          <div className="flex-1">
            <div className="grid grid-rows-[repeat(2,min-content)] gap-10 lg:grid-rows-1">
              <div className="flex flex-col gap-4">
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
        </div>
        <div className="flex w-full justify-center">
          <div className="max-w-[800px]">
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
