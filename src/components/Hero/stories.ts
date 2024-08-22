import { Meta, StoryObj } from "@storybook/react"

import qrCode from "@/assets/images/qr-code.png"
import bgHero from "@/stories/assets/bg-hero.png"

import Hero, { HeroProps } from "."

export const heroTemplate = {
  bgHero: bgHero,
  home: {
    logo: "/icon-red.png",
    title: "Organização Audiovisual da Sociedade Civil"
  },
  donatePage: {
    title: "AJUDE A MANTER NOSSA OPERAÇÃO ATIVA",
    paragraph1:
      "A tragédia climática que assola o Rio Grande do Sul deixou submersas 471 cidades, desalojou 644 mil pessoas e já afetou em média 3,1 milhões de pessoas.",
    paragraph2:
      "Observando a urgência da ajuda, a Resgate + se juntou com a Sitawi, que possui mais de 16 anos de atuação em finanças para causas socioambientais, responsável pela gestão financeira do Fundo Filantrópico Resgate +. Dessa forma, nós focamos na linha de frente enquanto a Sitawi lida com a operacionalização do Fundo e garante a transparência das doações arrecadadas.",
    donateCall: "DOE PELO QR CODE",
    qrCode: qrCode
  }
}

export default {
  title: "ResgateMais/Sections/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    bgHero: heroTemplate.bgHero,
    home: {
      logo: heroTemplate.home.logo,
      title: heroTemplate.home.title
    },
    donatePage: {
      title: heroTemplate.donatePage.title,
      paragraph1: heroTemplate.donatePage.paragraph1,
      paragraph2: heroTemplate.donatePage.paragraph2,
      donateCall: heroTemplate.donatePage.donateCall,
      qrCode: heroTemplate.donatePage.qrCode
    }
  },
  tags: ["autodocs"]
} as Meta<HeroProps>

export const Home: StoryObj<HeroProps> = {}
