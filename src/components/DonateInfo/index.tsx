import { useState } from "react"
import { FaCheck, FaCopy } from "react-icons/fa"

import Button from "../Button"

export type InfoProps = {
  title: string
  info: string
  pixKey: string
}

export default function DonateInfo({ title, info, pixKey }: InfoProps) {
  const [showCopyButton, setShowCopyButton] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleTextClick = () => {
    setShowCopyButton(true)
    setTimeout(() => setShowCopyButton(false), 6000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      setShowCopyButton(false)
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
              <button onClick={handleTextClick}>
                <p className="font-bold">
                  Via PIX:
                  <span className="ml-3 cursor-pointer font-medium">
                    {pixKey}
                  </span>
                </p>
              </button>
            )}
            {showCopyButton && (
              <Button as={"button"} size="medium" onClick={handleCopy}>
                {copied ? <FaCheck /> : <FaCopy />}
              </Button>
            )}
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
