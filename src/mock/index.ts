import aboutImage from "@/assets/images/about-image.png"
import image3 from "@/assets/images/carousel-humaita.png"
import image2 from "@/assets/images/carousel-lami.png"
import image1 from "@/assets/images/carousel-vila-farrapos.png"
import qrCode from "@/assets/images/qr-code.png"
import { InfoProps } from "@/components/DonateInfo"
import { HeroProps } from "@/components/Hero"
import { NewsletterProps } from "@/components/Newsletter"
import { SectionAboutProps } from "@/components/SectionAbout"
import { DonateSectionProps } from "@/components/SectionDonate"
import bgImage from "@/stories/assets/bg-footer.png"
import bgHero from "@/stories/assets/bg-hero.png"

export const heroData: HeroProps = {
  bgUrl: bgHero.src,
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

export const infoData: InfoProps = {
  title: "COMO DOAR",
  info: "O Fundo Filantrópico Resgate+ aceita doações:",
  pixKey: "resgatemais@sitawi.net",
  bankInfo: "[dados bancários da sitawi]"
}

export const newsletterData: NewsletterProps = {
  background: bgImage,
  title: "Cadastrar email para receber mais infos",
  placeholder: "exemplo@email.com",
  logo: "/logo-white-noText.png",
  textLogo: "Organização Audiovisual da Sociedade Civil"
}

export const sectionAboutData: SectionAboutProps = {
  title: "QUEM SOMOS",
  content: [
    "A Resgate+ é uma organização sem fins lucrativos de produtores audiovisuais, pesquisadores interdisciplinares e ativistas criada no contexto das enchentes de maio de 2024 no Rio Grande do Sul.",
    "Atuamos no resgate de pessoas ilhadas, no amparo a abrigos e comunidades afetadas, na documentação visual do desastre e na investigação de suas causas e consequências.",
    "Através da produção de registros visuais, dos testemunhos dos sujeitos e da documentação da realidade vivida na tragédia ambiental, buscamos garantir justiça ao passado, amparo ao presente e despertar a esperança de um futuro digno e justo."
  ],
  label: "DOE AGORA",
  QrCode: qrCode.src,
  image: aboutImage.src,
  cards: [
    {
      title: "MISSÃO",
      content:
        "Utilizar o audiovisual, a música, a literatura e o cinema como ferramenta para documentar a realidade vivida e auxiliar na reconstrução da vida daqueles que foram afetados pelas enchentes de maio de 2024 no Rio Grande do Sul."
    },
    {
      title: "VISÃO",
      content:
        "Restituir o direito à dignidade, moradia, bens, cultura e lazer aos gaúchos e gaúchas afetados pelo maior desastre climático da história do estado."
    },
    {
      title: "VALORES",
      content:
        "solidariedade, coletividade, responsabilidade, ética, transparência, comunicação e esperança."
    }
  ]
}

export const donateSectionData: DonateSectionProps = {
  title: "DOAÇÕES MOBILIZADAS",
  subtitle: "DESDE 06 DE MAIO",
  description:
    "Nossa rede de solidariedade, que já conta com a participação de mais de 50 pessoas, impactou a vida de pelo menos 14 mil gaúchos.",
  milestones: [
    {
      title: "Produzimos ao todo:",
      content: "11.300 MARMITAS"
    },
    {
      title: "Resgatamos aproximadamente:",
      content: "1.000 pessoas",
      subcontent: "de Porto Alegre e região metropolitana"
    },
    {
      title: "Movimentamos aproximadamente:",
      content: "+ de 18 toneladas em doações"
    }
  ],
  media: [
    {
      label: "Vila Farrapos",
      src: image1
    },
    {
      label: "Lami",
      src: image2
    },
    {
      label: "Humaita",
      src: image3
    }
  ],
  mediaAutoplay: false
}
