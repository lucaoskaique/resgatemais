import Image from "next/image"

import Button from "../Button"

type QRCodeCardProps = {
  url: string
  label: string
  buttonUrl?: string
}

const QrCodeCard = ({ url, label }: QRCodeCardProps) => {
  return (
    <div className="flex flex-col items-center gap-5 lg:justify-self-end">
      <Image src={url} alt={"QrCode"} width={180} height={180} />
      <Button
        className="w-60 text-center tracking-widest"
        fullWidth
        href="/donate">
        {label}
      </Button>
    </div>
  )
}

export default QrCodeCard
