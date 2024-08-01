import { Inter } from "next/font/google"

import { Header } from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`mb-96 flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Header />
      <h1 className="text-4xl font-bold">
        Organização Audiovisual da Sociedade Civil
      </h1>
    </main>
  )
}
