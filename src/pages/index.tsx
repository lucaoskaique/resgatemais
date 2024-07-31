import { Inter } from "next/font/google"

import Footer from "@/components/Footer"
import ThemeToggle from "@/components/theme-toggle/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1 className="text-4xl font-bold">
        Organização Audiovisual da Sociedade Civil
      </h1>
      <ThemeToggle />
      <Footer />
    </main>
  )
}
