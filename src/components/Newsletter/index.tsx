import { sectionAboutData } from "@/mock"

import Button from "../Button"
import QrCodeCard from "../QrCodeCard"
import { ResponsiveLogo } from "../ResponsiveBrand"

export type NewsletterProps = {
  bgUrl: string
}

export default function Newsletter({ bgUrl }: NewsletterProps) {
  return (
    <div className="custom-bg w-full">
      <div className="container flex flex-col items-center justify-between py-container max-md:gap-12 lg:flex-row">
        <div className="flex h-full flex-col items-start justify-center gap-4 md:gap-8">
          <h2 className="text-center text-paragraph text-white sm:text-h2">
            <span className="text-h3 font-bold">Cadastrar email</span> para
            receber mais infos
          </h2>
          <div className="flex w-[340px]">
            <input
              className="w-full rounded-sm bg-white py-1 pl-2 text-base text-black outline-none sm:text-paragraph"
              type="email"
              placeholder="exemplo@email.com"
              name="email-cadastro"
              id="email-cadastro"
            />
            <Button
              as={"button"}
              size="small"
              type="submit"
              className="relative right-[51.86px] rounded-none">
              Enviar
            </Button>
          </div>
          <div className="flex flex-row items-center justify-between gap-5">
            <ResponsiveLogo className="w-48" />
            <h3 className="text-center text-white">
              Organização Audiovisual
              <br className="md:hidden" /> da Sociedade Civil
            </h3>
          </div>
        </div>
        <QrCodeCard
          label={sectionAboutData.label}
          url={sectionAboutData.QrCode}
        />
      </div>
      <style jsx>{`
        .custom-bg {
          background: url(${bgUrl}) center/cover no-repeat;
        }
      `}</style>
    </div>
  )
}
