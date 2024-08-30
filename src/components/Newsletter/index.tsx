import { ResponsiveLogo } from "../ResponsiveBrand"

export type NewsletterProps = {
  bgUrl: string
}

export default function Newsletter({ bgUrl }: NewsletterProps) {
  return (
    <div className="custom-bg h-[373px] w-full">
      <div className="container flex h-full flex-col items-center justify-center gap-4 md:gap-8">
        <h2 className="text-center text-h3 font-bold text-white sm:text-h2">
          Cadastrar email para receber mais infos
        </h2>
        <input
          className="w-4/5 max-w-lg rounded-xl bg-white py-1 pl-3 text-base text-black sm:w-2/3 sm:text-paragraph"
          type="email"
          placeholder="exemplo@email.com"
          name="email-cadastro"
          id="email-cadastro"
        />
        <div className="flex flex-row items-center justify-between gap-5">
          <ResponsiveLogo className="w-48" />
          <h3 className="text-center font-bold text-white">
            Organização Audiovisual
            <br className="md:hidden" /> da Sociedade Civil
          </h3>
        </div>
      </div>
      <style jsx>{`
        .custom-bg {
          background: url(${bgUrl}) center/cover no-repeat;
        }
      `}</style>
    </div>
  )
}
