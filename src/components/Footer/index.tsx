const Footer = () => {
  const textFooter =
    "Procuramos organizações parceiras, dispostas a contribuir com todas as etapas de reconstrução do Rio Grande do Sul para somar junto com a Resgate+ no desenvolvimento dos nossos projetos."
  const title = "FALE CONOSCO"
  const email = "resgatemais@gmail.com"
  const instagram = "@resgate.mais"
  const phone = "(51) 99114-7322"

  return (
    <div className="container flex w-full flex-col items-center justify-between px-5 py-20 text-white md:flex-row">
      <p className="max-w-[264px] text-sm font-bold md:max-w-[383px] md:text-lg">
        {textFooter}
      </p>

      <div className="flex min-w-[211px] flex-col">
        <h2 className="mb-[33px] text-[18px] font-bold leading-[18px]">
          {title}
        </h2>
        <ul className="text-sm">
          <li className="leading-[16.24px]">E-mail: {email}</li>
          <li className="leading-[16.24px]">Instagram: {instagram}</li>
          <li className="leading-[16.24px]">Telefone: {phone}</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
