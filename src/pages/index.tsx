import localFont from "next/font/local"

import { Header } from "@/components/Header"

const alteHassGrotesk = localFont({
  src: [
    {
      path: "../assets/fonts/AlteHaasGroteskRegular.ttf",
      weight: "400"
    },
    {
      path: "../assets/fonts/AlteHaasGroteskBold.ttf",
      weight: "700"
    }
  ],
  variable: "--font-alteHassGrotesk"
})

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${alteHassGrotesk.variable} font-sans`}>
      <h1 className="text-4xl font-bold">
        Organização Audiovisual da Sociedade Civil
      </h1>
    </main>
  )
}
