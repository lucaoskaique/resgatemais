import Image from "next/image"

export interface RegisterEmailProps {
  title?: string
  textLogo?: string
}

const RegisterEmail = ({ title, textLogo }: RegisterEmailProps) => {
  return (
    <div className="flex h-[373px] w-full flex-col items-center justify-center bg-register-email bg-cover bg-no-repeat">
      <div className="flex flex-col items-center">
        <h2
          className={`mb-[25px] text-center text-[16px] font-bold text-white sm:text-[20px] md:text-[32px]`}>
          {title || "Cadastrar email para receber mais infos"}
        </h2>
        <input
          className="h-[32px] w-10/12 rounded-[10px] bg-white pl-[10px] text-black sm:h-[40px] sm:text-xl md:h-[47px] md:w-[447px] md:text-2xl"
          type="email"
          name="email-cadastro"
          id="email-cadastro"
        />
        <div className="flex flex-row items-center gap-[15px] sm:gap-[30px]">
          <Image
            className="ml-[3px] mt-[32px]"
            src="./logo-white-red.png"
            alt="Logo Resgaste Mais"
            width={100}
            height={100}
          />

          {textLogo && (
            <h3
              className={`mt-[30px] w-[180px] text-[14px] font-bold leading-[20.88px] text-white sm:w-[230px] sm:text-[18px]`}>
              {textLogo}
            </h3>
          )}
        </div>
      </div>
    </div>
  )
}

export default RegisterEmail
