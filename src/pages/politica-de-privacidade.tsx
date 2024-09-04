import { NextPage } from "next"

import Base from "@/templates/Base"

const PrivacyPolicy: NextPage = () => {
  return (
    <Base>
      <div className="container mx-auto py-8">
        <h1 className="mb-6 text-3xl font-bold">Política de Privacidade</h1>
        <p className="mb-4">
          Esta Política de Privacidade descreve como a Resgate+ coleta, usa e
          compartilha suas informações pessoais em conformidade com a Lei Geral
          de Proteção de Dados (LGPD) do Brasil.
        </p>
      </div>
    </Base>
  )
}

export default PrivacyPolicy
