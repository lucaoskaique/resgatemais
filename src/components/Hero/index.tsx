import { useRouter } from "next/router"

import { cn } from "@/lib/utils"

import QrCodeCard from "../QrCodeCard"
import { ResponsiveLogo } from "../ResponsiveBrand"

export type DonatePageProps = {
  title: string
  paragraph1?: string
  paragraph2?: string
  donateCall: string
  qrCodeUrl: string
}

type HomeProps = {
  logo: string
  title: string
}

export type HeroProps = {
  bgUrl: string
  home: HomeProps
  donatePage: DonatePageProps
}

export default function Hero({ bgUrl, home, donatePage }: HeroProps) {
  const router = useRouter()
  const donatePageRoute = router.asPath === "/donate"

  return (
    <section
      className={cn(
        donatePageRoute ? "min-h-screen" : "h-screen",
        "w-full overflow-hidden"
      )}
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
      <div className="container h-full py-container">
        <div
          className={cn(
            "grid h-full",
            donatePageRoute
              ? "grid-rows-[min-content_1fr] content-around items-center gap-10 px-10 pt-4 max-lg:justify-items-center md:pt-8 lg:grid-cols-[min-content_1fr] lg:grid-rows-1"
              : "grid-rows-1 items-center"
          )}>
          {donatePageRoute && (
            <>
              <div className="text-start lg:px-0">
                <h1 className="text-h2 font-bold text-highlight max-lg:text-center lg:text-nowrap">
                  {donatePage?.title}
                </h1>
                <p className="mt-10 w-full text-justify text-paragraph font-bold text-primary">
                  {donatePage?.paragraph1}
                  <span className="mt-4 block font-medium">
                    {donatePage?.paragraph2}
                  </span>
                </p>
              </div>

              <aside className="lg:justify-self-end">
                <p className="mb-4 text-center text-base font-bold text-white">
                  {donatePage?.donateCall}
                </p>
                {donatePage?.qrCodeUrl && (
                  <QrCodeCard url={donatePage.qrCodeUrl} label="" />
                )}
              </aside>
            </>
          )}

          {!donatePageRoute && (
            <div className="max-w-[480px] pl-4 text-start">
              {home?.logo && <ResponsiveLogo className="" />}
              <h1 className="pt-8 text-h2 font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                {home?.title}
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
