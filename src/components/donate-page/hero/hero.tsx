import Image, { StaticImageData } from "next/image"
// import QrCode from "@/assets/images/qr-code.png"

export type DonateHeroProps = {
  backgroundImageUrl?: string
  title?: string
  paragraph1?: string
  paragraph2?: string
  donateCall?: string
  qrCode?: StaticImageData
}

export default function DonatePageHero({
  backgroundImageUrl,
  title,
  paragraph1,
  paragraph2,
  donateCall,
  qrCode
}: DonateHeroProps) {
  return (
    <div
      className={`custom-background grid w-full grid-cols-2 items-center py-20`}>
      <article className="ml-20 max-w-[480px]">
        <h1 className="text-lg font-bold text-highlight">{title}</h1>
        <p className="mt-10 text-white">
          {paragraph1}
          <span className="mt-4 block">{paragraph2}</span>
        </p>
      </article>
      {qrCode && (
        <aside className="justify-self-end pr-[120px]">
          <p className="mb-4 text-center text-xs font-bold text-white">
            {donateCall}
          </p>
          <Image
            className="size-[180px]"
            src={qrCode}
            alt=""
            width={180}
            height={180}
          />
        </aside>
      )}
      <style jsx>{`
        .custom-background {
          background: url(${backgroundImageUrl}) center/cover no-repeat;
        }
      `}</style>
    </div>
  )
}
