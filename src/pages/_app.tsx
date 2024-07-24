import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { ThemeProvider } from "@/contexts/theme-provider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
