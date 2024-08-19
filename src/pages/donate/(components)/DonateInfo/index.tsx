export type FooterProps = {
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
}: FooterProps) {
  return (
    <footer className="py-12 text-center dark:bg-background-secondary dark:text-secondary lg:py-[120px] lg:pl-20 lg:text-left">
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
    </footer>
  )
}
