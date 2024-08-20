import DonatePageFooter, {
  DonateFooterProps
} from "@/components/donatePage/footer/footer"
import DonatePageHero, {
  DonateHeroProps
} from "@/components/donatePage/hero/hero"

export type DonatePageProps = {
  heroProps?: DonateHeroProps
  footerProps?: DonateFooterProps
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
