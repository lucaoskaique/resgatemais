import { ReactNode } from "react"

import Footer from "@/components/Footer"
import Navbar from "@/components/NavBar"

export type BaseTemplateProps = {
  children: ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <div className="container relative flex min-h-screen w-full flex-col justify-between">
    <Navbar />

    <div className="flex-1">{children}</div>

    <footer className="bg-highlight">
      <Footer />
    </footer>
  </div>
)

export default Base
