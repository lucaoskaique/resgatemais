import { ChevronRight } from "lucide-react"
import Link from "next/link"

import { ResponsivePlusSign } from "../ResponsiveBrand"

export function Banner() {
  return (
    <div className="relative top-0 border-b border-white/10 bg-background py-3 shadow-md md:py-0">
      <div className="container flex items-center justify-center md:h-12">
        <Link
          href="/contact"
          target="_blank"
          className="group inline-flex items-center justify-center gap-3 text-center text-sm leading-loose">
          <ResponsivePlusSign className="size-5 transition-transform duration-300 ease-out group-hover:rotate-90 md:size-4" />
          <span>
            Nosso trabalho só é possível com a sua ajuda!{" "}
            <span className="font-bold text-black underline dark:text-white max-[600px]:block">
              Seja um voluntário, clique aqui!
            </span>
          </span>{" "}
          <ChevronRight className="size-5 text-black transition-all duration-300 ease-out group-hover:translate-x-1 dark:text-white md:size-4" />
        </Link>
      </div>
    </div>
  )
}
