export type DonateFooterProps = {
  title?: string
  info?: string
  pixKey?: string
  bankInfo?: string
}

export default function DonatePageFooter({
  title,
  info,
  pixKey,
  bankInfo
}: DonateFooterProps) {
  return (
    <footer className="py-[120px] pl-20 dark:bg-background-secondary dark:text-secondary">
      <h1 className="text-lg font-bold text-highlight">{title}</h1>
      <div className="mt-10 leading-loose">
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
