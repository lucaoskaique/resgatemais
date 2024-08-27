export type MilestoneCardProps = {
  title: string
  content: string
  subcontent?: string
}

export const MilestoneCard = ({
  title,
  content,
  subcontent
}: MilestoneCardProps) => {
  return (
    <div className="flex w-[236px] gap-[20px]">
      <span className="h-[30px] w-[4px] bg-black" />
      <div>
        <p className="text-sm font-medium leading-4 text-secondary">{title}</p>
        <p className="text-lg font-bold leading-5 text-highlight">{content}</p>
        <p className="text-[10px] font-bold leading-3 text-highlight">
          {subcontent}
        </p>
      </div>
    </div>
  )
}
export default MilestoneCard
