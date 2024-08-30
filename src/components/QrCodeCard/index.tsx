import Image from "next/image"

import Button from "../Button"

export type QRCodeCardProps = {
  url: string
  label?: string
  btnTextColor?: "primary" | "secondary" | "white" | "black" | "red"
  btnBgColor?: "white" | "black" | "red" | "transparent" | "secondary"
}

export default function QrCodeCard({
  url,
  label,
  btnBgColor = "red",
  btnTextColor = "white"
}: QRCodeCardProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image src={url} alt="QrCode" quality={100} width={180} height={180} />
      {label && (
        <Button
          className="w-60 text-center tracking-widest"
          textColor={btnTextColor}
          background={btnBgColor}
          size="xlarge"
          href="/donate">
          {label}
        </Button>
      )}
    </div>
  )
}
