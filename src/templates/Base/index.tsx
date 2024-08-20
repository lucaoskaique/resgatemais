import { ReactNode } from "react"

import Footer from "@/components/Footer"
import Navbar from "@/components/NavBar"

export type BaseTemplateProps = {
  children: ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <div className="relative flex min-h-screen w-full flex-col justify-between">
    <div className="fixed top-0 z-50 flex h-20 w-full items-center">
      <Navbar />
    </div>

    <div className="flex-1">{children}</div>

    <footer className="bg-highlight">
      <Footer />
    </footer>
  </div>
)

export default Base
