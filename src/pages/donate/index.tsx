import DonatePageFooter, { FooterProps } from "./(components)/DonateInfo"
import DonatePageHero, { HeroProps } from "./(components)/Hero"

export type DonatePageProps = {
  heroProps: HeroProps
  footerProps: FooterProps
}

export default function DonatePage({
  heroProps,
  footerProps
}: DonatePageProps) {
  return (
    <main className="flex h-screen w-screen flex-col">
      <section className="flex w-full flex-1 justify-center">
        {/* Header */}
        <DonatePageHero {...heroProps} />
      </section>
      <DonatePageFooter {...footerProps} />
    </main>
  )
}
