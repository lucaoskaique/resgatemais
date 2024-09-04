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
    <section className="py-10 text-left dark:bg-background-secondary dark:text-secondary sm:py-container lg:py-16">
      <div className="px-10 sm:container">
        <h1 className="text-start text-lg font-bold text-highlight">{title}</h1>
        <div className="mt-4 flex flex-col items-start leading-loose lg:mt-10">
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
