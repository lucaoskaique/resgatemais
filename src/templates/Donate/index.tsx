import Hero from "@/components/Hero"
import { Herotemp, Infotemp } from "@/pages/api/(templates)/template"
import DonateInfo from "@/pages/donate/(components)/DonateInfo"

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
