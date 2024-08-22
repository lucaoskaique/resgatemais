import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { DefaultSeo } from "next-seo"

import { ThemeProvider } from "@/contexts/theme-provider"

import SEO from "../../next-seo.config"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange>
      <Head>
        <title>Organização Audiovisual da Sociedade Civil</title>
        <link rel="short icon" href="/img/icon-512.png"></link>
        <link rel="apple touch icon" href="/img/icon-512.png"></link>
        <link rel="manifest" href="/manifest.json"></link>
        <meta
          name="description"
          content="Organização Audiovisual da Sociedade Civil."></meta>
        <DefaultSeo {...SEO} />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
