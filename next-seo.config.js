/* eslint-disable import/no-anonymous-default-export */
export default {
  titleTemplate: "%s | Resgate+",
  defaultTitle: "Organização Audiovisual da Sociedade Civil | Resgate+",
  description:
    "Organização Audiovisual da Sociedade Civil dedicada a projetos audiovisuais e culturais.",
  canonical: "https://resgatemais.vercel.app",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://resgatemais.vercel.app",
    siteName: "Resgate+",
    title: "Organização Audiovisual da Sociedade Civil",
    description:
      "Organização Audiovisual da Sociedade Civil dedicada a projetos audiovisuais e culturais.",
    images: [
      {
        url: "https://resgatemais.vercel.app/android-chrome-192x192.png",
        width: 1200,
        height: 630,
        alt: "Resgate+ | Organização Audiovisual da Sociedade Civil",
        type: "image/jpeg"
      },
      {
        url: "https://resgatemais.vercel.app/android-chrome-192x192.png",
        width: 340,
        height: 80,
        alt: "Resgate+ Logo",
        type: "image/png"
      }
    ]
  },
  twitter: {
    handle: "@resgate_mais",
    site: "@resgate_mais",
    cardType: "summary_large_image"
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
    {
      name: "theme-color",
      content: "#ffffff"
    }
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico"
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180"
    },
    {
      rel: "manifest",
      href: "/manifest.json"
    },
    {
      rel: "privacy-policy",
      href: "/politica-de-privacidade"
    }
  ]
}
