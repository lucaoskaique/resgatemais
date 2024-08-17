import { ReactNode } from "react"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export type BaseTemplateProps = {
  children: ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <div className="flex h-screen flex-col justify-between">
    <div className="h-24 bg-gray-200">
      <Navbar />
    </div>

    <div className="flex-1">{children}</div>

    <footer className="h-24 bg-red-200">
      <Footer />
    </footer>
  </div>
)

export default Base
