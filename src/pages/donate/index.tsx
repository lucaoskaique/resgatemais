import Footer from "@/components/donate-page/footer"
import Hero from "@/components/donate-page/hero"

export default function DonatePage() {
  return (
    <main className="flex h-screen w-screen flex-col">
      <section className="flex w-full flex-1 justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
        {/* Header */}
        <Hero />
      </section>
      <Footer />
    </main>
  )
}
