import Image from "next/image"

export type HeroProps = {
  title?: string
  logo?: string
  imageHeroUrl?: string
}

export default function Hero({ title, logo, imageHeroUrl }: HeroProps) {
  return (
    <div className="relative">
      <div className="custom-background h-screen w-full">
        <div className="absolute bottom-[50px] left-[50px] text-white md:bottom-[110px] md:left-[150px]">
          <Image
            src={logo || "/icon-red.png"}
            alt="A+Vermelho"
            width={73}
            height={73}
          />
          <h1 className="max-w-52 pt-8 text-2xl font-bold md:text-3xl lg:max-w-80 lg:text-4xl">
            {title || "Organização Audiovisual da Sociedade Civil"}
          </h1>
        </div>
        <style jsx>{`
          .custom-background {
            background: url(${imageHeroUrl}) center/cover no-repeat;
          }
        `}</style>
      </div>
    </div>
  )
}
