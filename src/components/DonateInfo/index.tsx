import { Copy, CopyCheck } from "lucide-react"
import { useState } from "react"

import Button from "../Button"

export type InfoProps = {
  title: string
  info: string
  pixKey: string
}

export default function DonateInfo({ title, info, pixKey }: InfoProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <section className="py-container text-left dark:bg-background-secondary dark:text-secondary">
      <div className="px-10 sm:container">
        <h1 className="text-start text-h3 font-bold leading-none text-highlight">
          {title}
        </h1>
        <div className="mt-4 flex flex-col items-start leading-loose lg:mt-10">
          <h2>{info}</h2>
          <div className="flex gap-[5px]">
            {pixKey && (
              <button onClick={handleCopy}>
                <p className="text-start font-bold">
                  Via PIX:
                  <span className="ml-3 cursor-pointer font-medium">
                    {pixKey}
                  </span>
                </p>
              </button>
            )}
            <div className="flex items-center gap-1">
              <Button as="button" size="small" onClick={handleCopy}>
                {copied ? (
                  <div className="animate-spin">
                    <CopyCheck />
                  </div>
                ) : (
                  <Copy />
                )}
              </Button>
              <p className="text-xs">Click here to copy</p>
            </div>
          </div>

          <p className="font-bold">Transferência bancária:</p>
          <p className="font-bold">
            CNPJ:
            <span className="ml-3 font-medium">09.607.915/0001-34</span>
          </p>
          <p className="font-bold">
            Agência:
            <span className="ml-3 font-medium">9229</span>
          </p>
          <p className="font-bold">
            Conta Corrente:
            <span className="ml-3 font-medium">08500-7</span>
          </p>
        </div>
      </div>
    </section>
  )
}
