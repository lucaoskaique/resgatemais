import { Meta, StoryObj } from "@storybook/react"

import qrCode from "@/assets/images/qr-code.png"

import SectionAbout, { SectionAboutProps } from "."

export const template: SectionAboutProps = {
  title: "QUEM SOMOS",
  content: [
    "A Resgate+ é uma organização sem fins lucrativos de produtores audiovisuais, pesquisadores interdisciplinares e ativistas criada no contexto das enchentes de maio de 2024 no Rio Grande do Sul.",
    "Atuamos no resgate de pessoas ilhadas, no amparo a abrigos e comunidades afetadas, na documentação visual do desastre e na investigação de suas causas e consequências.",
    "Através da produção de registros visuais, dos testemunhos dos sujeitos e da documentação da realidade vivida na tragédia ambiental, buscamos garantir justiça ao passado, amparo ao presente e despertar a esperança de um futuro digno e justo."
  ],
  label: "DOE AGORA",
  QrCode: qrCode
}

export default {
  title: "ResgateMais/Sections/About",
  component: SectionAbout,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    title: template.title,
    content: template.content,
    label: template.label,
    QrCode: qrCode
  }
} as Meta<SectionAboutProps>

export const Default: StoryObj<SectionAboutProps> = {}
