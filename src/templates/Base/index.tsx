import { ReactNode } from "react"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export type BaseTemplateProps = {
  children: ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <div>
    <div>
      <Navbar />
    </div>

    <div>{children}</div>

    <footer>
      <div>
        <Footer />
      </div>
    </footer>
  </div>
)

export default Base
