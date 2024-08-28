export type InfoProps = {
  title: string
  info: string
  pixKey: string
  bankInfo: string
}

export default function DonateInfo({
  title,
  info,
  pixKey,
  bankInfo
}: InfoProps) {
  return (
    <section className="py-8 text-center dark:bg-background-secondary dark:text-secondary lg:py-16 lg:text-left">
      <div className="container">
        <h1 className="text-lg font-bold text-highlight">{title}</h1>
        <div className="mt-4 leading-loose lg:mt-10">
          <h2>{info}</h2>
          {pixKey && (
            <p className="font-bold">
              Via PIX:<span className="ml-3 font-medium">{pixKey}</span>
            </p>
          )}
          {bankInfo && (
            <p className="font-bold">
              Transferência bancária:
              <span className="ml-3 font-medium">{bankInfo}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
