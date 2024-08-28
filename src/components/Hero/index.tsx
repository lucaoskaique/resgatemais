import Image, { StaticImageData } from "next/image"
import { useRouter } from "next/router"

import { cn } from "@/lib/utils"

export type DonatePageProps = {
  title?: string
  paragraph1?: string
  paragraph2?: string
  donateCall?: string
  qrCode?: string | StaticImageData
}

type HomeProps = {
  logo?: string
  title?: string
}

export type HeroProps = {
  bgUrl: string
  home?: HomeProps
  donatePage?: DonatePageProps
}

export default function Hero({ bgUrl, home, donatePage }: HeroProps) {
  const router = useRouter()
  const donatePageRoute = router.asPath === "/donate"

  return (
    <section
      className={cn(
        "relative h-screen w-full overflow-hidden",
        donatePageRoute ? "pb-16 pt-32" : "flex items-center"
      )}
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
      <div className="container h-full">
        <div
          className={cn(
            "grid h-full gap-y-16",
            donatePageRoute
              ? "grid-rows-[repeat(2,min-content)] items-center max-lg:justify-items-center lg:grid-cols-2 lg:grid-rows-1"
              : "grid-rows-1 items-center"
          )}>
          <div className="max-w-[480px] text-center lg:text-left">
            {donatePageRoute ? (
              <>
                <h1 className="text-lg font-bold text-highlight">
                  {donatePage?.title}
                </h1>
                <p className="mt-10 text-white">
                  {donatePage?.paragraph1}
                  <span className="block lg:mt-4">
                    {donatePage?.paragraph2}
                  </span>
                </p>
              </>
            ) : (
              <>
                {home?.logo && (
                  <Image src={home?.logo} alt="" width={73} height={73} />
                )}
                <h1 className="max-w-52 pt-8 text-start text-2xl font-bold text-white md:text-3xl lg:max-w-80 lg:text-4xl">
                  {home?.title}
                </h1>
              </>
            )}
          </div>
          {donatePageRoute && (
            <aside className="lg:justify-self-end">
              <p className="mb-4 text-center text-xs font-bold text-white">
                {donatePage?.donateCall}
              </p>
              {donatePage?.qrCode && (
                <Image
                  className="mx-auto size-[180px]"
                  src={donatePage?.qrCode}
                  alt="QR Code"
                  width={180}
                  height={180}
                />
              )}
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}
