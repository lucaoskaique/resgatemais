import DonateInfo from "@/pages/donate/(components)/DonateInfo"
import DonatePageHero from "@/pages/donate/(components)/Hero"
import {
  heroTemplate,
  infoTemplate
} from "@/pages/donate/(components)/template"

import Base from "../Base"

const Donate = () => {
  return (
    <Base>
      <div className="grid h-screen grid-rows-[1fr_min-content]">
        <DonatePageHero {...heroTemplate} />
        <DonateInfo {...infoTemplate} />
      </div>
    </Base>
  )
}

export default Donate
