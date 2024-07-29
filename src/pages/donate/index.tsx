import Image from "next/image"

import QrCode from "@/image/qr-code.png"

export default function DonatePage() {
  return (
    <main className="flex h-screen w-screen flex-col">
      <section className="flex w-full flex-1 justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
        {/* Header */}
        <div className="grid w-full grid-cols-2 items-center">
          <article className="ml-20 max-w-[480px]">
            <h1 className="text-lg font-bold text-red-600">
              AJUDE A MANTER NOSSA OPERAÇÃO ATIVA
            </h1>
            <p className="mt-10 text-white">
              A tragédia climática que assola o Rio Grande do Sul deixou
              submersas 471 cidades, desalojou 644 mil pessoas e já afetou em
              média 3,1 milhões de pessoas.
              <span className="mt-4 block">
                Observando a urgência da ajuda, a Resgate + se juntou com a
                Sitawi, que possui mais de 16 anos de atuação em finanças para
                causas socioambientais, responsável pela gestão financeira do
                Fundo Filantrópico Resgate +. Dessa forma, nós focamos na linha
                de frente enquanto a Sitawi lida com a operacionalização do
                Fundo e garante a transparência das doações arrecadadas.
              </span>
            </p>
          </article>
          <aside className="justify-self-end pr-[120px]">
            <p className="mb-4 text-center text-xs font-bold text-white">
              DOE PELO QR CODE
            </p>
            <Image
              className="size-[180px]"
              src={QrCode}
              alt=""
              width={180}
              height={180}
            />
          </aside>
        </div>
      </section>
      <footer className="bg-neutral-700 py-[120px] pl-20">
        <h1 className="text-lg font-bold text-red-600">COMO DOAR</h1>{" "}
        {/* mudar cor para vermelho */}
        <div className="mt-10 leading-loose text-white">
          <h2>O Fundo Filantrópico Resgate+ aceita doações:</h2>
          <p>
            <span className="font-bold">Via PIX:</span> resgatemais@sitawi.net
          </p>
          <p>
            <span className="font-bold">Transferência bancária:</span> [dados
            bancários da sitawi]
          </p>
        </div>
      </footer>
    </main>
  )
}
