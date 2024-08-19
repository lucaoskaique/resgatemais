export type DonateCardProps = {
  title?: string
  content?: string
  subcontent?: string
}
export const DonateItemCard = ({
  title,
  content,
  subcontent
}: DonateCardProps) => {
  return (
    <div className="flex w-[236px] gap-[20px]">
      <span className="h-[30px] w-[4px] bg-black" />
      <div>
        <p className="text-[14px] font-medium leading-[16px]">{title}</p>
        <p className="text-[18px] font-bold leading-[20.7px] text-highlight">
          {content}
        </p>
        <p className="text-[10px] font-bold leading-[11.5px] text-highlight">
          {subcontent}
        </p>
      </div>
    </div>
  )
}
export default DonateItemCard
