import { ReactNode } from "react"

import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import { Herotemp } from "@/pages/api/(templates)/template"

export type BaseTemplateProps = {
  children: ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <div className="relative flex min-h-screen w-full flex-col justify-between">
    <div>
      <Navbar />
      <Hero
        bgUrl={Herotemp.bgHero.src}
        home={{
          logo: Herotemp.home.logo,
          title: Herotemp.home.title
        }}
      />

      <main className="container mx-auto min-h-screen px-4">{children}</main>

      <footer className="bg-highlight">
        <Footer />
      </footer>
    </div>
  </div>
)

export default Base
