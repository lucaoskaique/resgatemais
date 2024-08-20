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
      className={`custom-background grid w-full grid-rows-2 justify-items-center gap-y-16 py-20 lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:justify-items-start`}>
      <article className="max-w-[480px] text-center lg:ml-20 lg:text-left">
        <h1 className="text-lg font-bold text-highlight">{title}</h1>
        <p className="mt-10 text-white">
          {paragraph1}
          <span className="block lg:mt-4">{paragraph2}</span>
        </p>
      </article>
      {qrCode && (
        <aside className="lg:justify-self-end lg:pr-[120px]">
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
