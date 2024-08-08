export type DonateItemCardProps = {
  title?: string
  content?: string
  subcontent?: string
}
export const DonateItemCard = ({
  title,
  content,
  subcontent
}: DonateItemCardProps) => {
  return (
    <div className="flex w-[236px] gap-[20px]">
      <span className="h-[30px] w-[4px] bg-black" />
      <div>
        <p className="text-[14px] font-medium leading-[16px]">{title}</p>
        <p className="text-[18px] font-bold leading-[20.7px] text-[#E83D44]">
          {content}
        </p>
        <p className="text-[10px] font-bold leading-[11.5px] text-[#E83D44]">
          {subcontent}
        </p>
      </div>
    </div>
  )
}
export default DonateItemCard
