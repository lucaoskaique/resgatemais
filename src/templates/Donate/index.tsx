import DonateInfo from "@/components/DonateInfo"
import { infoTemplate as Infotemp } from "@/components/DonateInfo/template"

import Base from "../Base"

const Donate = () => {
  return (
    <Base>
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
