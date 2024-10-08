import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useState } from "react"

import { cn } from "@/lib/utils"

import Button from "../Button"
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
  const [buttonText, setButtonText] = useState("Copiar código PIX")
  const handleCopyPix = () => {
    navigator.clipboard.writeText(
      "00020126440014BR.GOV.BCB.PIX0122resgatemais@sitawi.net5204000053039865802BR5906SITAWI6009SAO PAULO6226052252oMdqOKiSWZ4QWt2z8Fp26304FEE2"
    )
    setButtonText("PIX copiado!")
    setTimeout(() => {
      setButtonText("Copiar Código PIX")
    }, 5000)
  }
  return (
    <section
      className={cn(
        donatePageRoute ? "min-h-screen" : "h-screen",
        "relative w-full overflow-hidden"
      )}
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1
        }}></div>

      <div className="container relative z-10 mt-12 h-full py-container max-[600px]:mt-14">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "grid h-full",
            donatePageRoute
              ? "grid-rows-[min-content_1fr] content-around items-center gap-10 px-10 pt-4 max-xl:justify-items-center md:pt-8 xl:grid-cols-[1fr_min-content] xl:grid-rows-1"
              : "grid-rows-1 items-center"
          )}>
          {donatePageRoute && (
            <>
              <div className="text-start lg:w-min lg:px-0">
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

              <aside className="min-w-[200px] xl:justify-self-end">
                <p className="mb-4 text-center text-base font-bold text-white">
                  {donatePage?.donateCall}
                </p>
                {donatePage?.qrCodeUrl && (
                  <QrCodeCard url={donatePage.qrCodeUrl} label="" />
                )}
                <Button
                  as={"button"}
                  onClick={handleCopyPix}
                  className="mt-4 flex w-full flex-col items-center">
                  {buttonText}
                </Button>
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
        </motion.div>
      </div>
    </section>
  )
}
