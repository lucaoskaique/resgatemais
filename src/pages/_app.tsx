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
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Organização Audiovisual da Sociedade Civil."
        />
        <meta name="language" content="pt-BR" />

        <meta
          property="og:title"
          content="Organização Audiovisual da Sociedade Civil"
        />
        <meta
          property="og:description"
          content="Organização Audiovisual da Sociedade Civil."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Organização Audiovisual da Sociedade Civil"
        />
        <meta
          name="twitter:description"
          content="Organização Audiovisual da Sociedade Civil."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        />

        <link rel="canonical" href="https://yourwebsite.com" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Organização Audiovisual da Sociedade Civil",
              "url": "https://yourwebsite.com",
              "logo": "https://yourwebsite.com/logo.png",
              "description": "Organização Audiovisual da Sociedade Civil."
            }
          `}
        </script>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
