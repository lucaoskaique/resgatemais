import { useCountUp } from "use-count-up"

export type MilestoneCardProps = {
  title: string
  content: string
  data?: number
  subcontent?: string
}

export const MilestoneCard = ({
  title,
  data,
  content,
  subcontent
}: MilestoneCardProps) => {
  const { value } = useCountUp({
    isCounting: true,
    end: data,
    duration: 5,
    easing: "easeOutCubic",
    thousandsSeparator: ".",
    onComplete: () => {
      return { shouldRepeat: true, delay: 3 }
    }
  })

  return (
    <div className="flex">
      <span className="mr-5 h-1/3 w-1 bg-black" />
      <div className="lg:text-nowrap">
        <p className="text-h3 leading-none text-secondary">{title}</p>
        <p className="text-h2 font-bold text-highlight">
          {data && <span>{value}</span>} {content}
        </p>
        <p className="text-xl font-bold leading-3 text-highlight">
          {subcontent}
        </p>
      </div>
    </div>
  )
}
export default MilestoneCard
