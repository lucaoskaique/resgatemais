import DonateInfo from "@/components/DonateInfo"
import { donateInfoData } from "@/mock"

import Base from "../Base"

const Donate = () => {
  return (
    <Base>
      <DonateInfo
        title={donateInfoData.title}
        info={donateInfoData.info}
        pixKey={donateInfoData.pixKey}
        bankInfo={donateInfoData.bankInfo}
      />
    </Base>
  )
}

export default Donate
