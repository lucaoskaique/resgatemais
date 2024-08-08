import DonateImageCarousel from "./carousel/imageCarousel"
import DonateItemCard from "./donateItemCard"

export type DonateSectionProps = {
  title?: string
  subtitle?: string
  content?: string
}
export const DonateSection = ({
  title,
  subtitle,
  content
}: DonateSectionProps) => {
  return (
    <section className="flex flex-col gap-[100px] pb-[75px] pl-[173px] pt-[106px]">
      <h1 className="w-[456px] text-[40px] font-bold leading-none text-[#D63E44]">
        {title}
      </h1>
      <div className="grid w-full grid-cols-[235px_minmax(300px,829px)]">
        <div className="w-[235px]">
          <h2 className="w-[217px] text-[24px] font-bold leading-[27.4px] text-[#E83D44]">
            {subtitle}
          </h2>
          <p className="my-[30px] w-[217px]">{content}</p>
          <ul className="flex flex-col gap-[30px]">
            <li>
              <DonateItemCard />
            </li>
            <li>
              <DonateItemCard />
            </li>
            <li>
              <DonateItemCard />
            </li>
          </ul>
        </div>
        <DonateImageCarousel />
      </div>
    </section>
  )
}
export default DonateSection
