import DonateInfo from "@/components/DonateInfo"
import { infoTemplate as Infotemp } from "@/components/DonateInfo/template"
import Hero from "@/components/Hero"
import { heroTemplate as Herotemp } from "@/components/Hero/stories"

import Base from "../Base"

const Donate = () => {
  return (
    <Base>
      <Hero
        bgUrl={Herotemp.bgHero.src}
        donatePage={{
          title: Herotemp.donatePage.title,
          paragraph1: Herotemp.donatePage.paragraph1,
          paragraph2: Herotemp.donatePage.paragraph2,
          donateCall: Herotemp.donatePage.donateCall,
          qrCode: Herotemp.donatePage.qrCode
        }}
      />
      <DonateInfo
        title={Infotemp.title}
        info={Infotemp.info}
        pixKey={Infotemp.pixKey}
        bankInfo={Infotemp.bankInfo}
      />
    </Base>
  )
}

export default Donate
