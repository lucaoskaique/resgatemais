import qrCode from "@/assets/images/qr-code.png"
import { DonatePageProps } from "@/components/Hero/index"

import { InfoProps } from "./DonateInfo"

const heroTemplate: DonatePageProps = {
  title: "AJUDE A MANTER NOSSA OPERAÇÃO ATIVA",
  paragraph1:
    "A tragédia climática que assola o Rio Grande do Sul deixou submersas 471 cidades, desalojou 644 mil pessoas e já afetou em média 3,1 milhões de pessoas.",
  paragraph2:
    "Observando a urgência da ajuda, a Resgate + se juntou com a Sitawi, que possui mais de 16 anos de atuação em finanças para causas socioambientais, responsável pela gestão financeira do Fundo Filantrópico Resgate +. Dessa forma, nós focamos na linha de frente enquanto a Sitawi lida com a operacionalização do Fundo e garante a transparência das doações arrecadadas.",
  donateCall: "DOE PELO QR CODE",
  qrCode: qrCode
}

const infoTemplate: InfoProps = {
  title: "COMO DOAR",
  info: "O Fundo Filantrópico Resgate+ aceita doações:",
  pixKey: "resgatemais@sitawi.net",
  bankInfo: "[dados bancários da sitawi]"
}

export { heroTemplate, infoTemplate }
