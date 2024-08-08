import { StaticImageData } from "next/image"

import image3 from "@/assets/images/carousel-humaita.png"
import image2 from "@/assets/images/carousel-lami.png"
import image1 from "@/assets/images/carousel-vila-farrapos.png"

export type contentTemplateProps = {
  label: string
  image: StaticImageData
}

export const contentTemplate: contentTemplateProps[] = [
  {
    label: "Vila Farrapos",
    image: image1
  },
  {
    label: "Lami",
    image: image2
  },
  {
    label: "Humaita",
    image: image3
  }
]
