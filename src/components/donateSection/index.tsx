import Carousel from "@/components/Carousel"
import MilestoneCard, { MilestoneCardProps } from "@/components/MilestoneCard"

export type DonateSectionProps = {
  title?: string
  subtitle?: string
  description?: string
  milestones?: MilestoneCardProps[]
}

export const DonateSection = ({
  title,
  subtitle,
  description,
  milestones
}: DonateSectionProps) => {
  return (
    <section className="flex flex-col gap-[100px] pb-[75px] pl-[173px] pt-[106px]">
      <h1 className="w-[456px] text-[40px] font-bold leading-none text-highlight">
        {title}
      </h1>
      <div className="grid w-full grid-cols-[235px_minmax(300px,829px)]">
        <div className="w-[235px]">
          <h2 className="w-[217px] text-[24px] font-bold leading-[27.4px] text-highlight">
            {subtitle}
          </h2>
          <p className="my-[30px] w-[217px]">{description}</p>
          <ul className="flex flex-col gap-[30px]">
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
        <Carousel mediaType={"image"} />
      </div>
    </section>
  )
}
export default DonateSection
