import { ReactNode } from "react"

import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import { heroData } from "@/mock"

export type BaseTemplateProps = {
  children: ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <div className="relative flex min-h-screen w-full flex-col justify-between">
    <div>
      <Navbar />
      <Hero
        bgUrl={heroData.bgUrl}
        home={{
          logo: heroData.home?.logo,
          title: heroData.home?.title
        }}
        donatePage={{
          title: heroData.donatePage?.title,
          paragraph1: heroData.donatePage?.paragraph1,
          paragraph2: heroData.donatePage?.paragraph2,
          donateCall: heroData.donatePage?.donateCall,
          qrCodeUrl: heroData.donatePage?.qrCodeUrl
        }}
      />
    </div>

    <main>{children}</main>

    <footer className="bg-highlight">
      <Footer />
    </footer>
  </div>
)

export default Base
