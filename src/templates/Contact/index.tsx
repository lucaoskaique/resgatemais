import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import { heroData } from "@/mock"

const Contact = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between">
      <div>
        <Navbar />
        <div className="relative">
          <Hero
            bgUrl={heroData.bgUrl}
            home={{
              logo: "",
              title: ""
            }}
            donatePage={{
              title: "",
              paragraph1: "",
              paragraph2: "",
              donateCall: "",
              qrCodeUrl: ""
            }}
          />

          <div className="trans absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg bg-slate-500/50 p-5">
            <h1 className="text-2xl font-bold">Contato</h1>
            <ContactForm />
          </div>
        </div>

        <footer className="bg-highlight">
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default Contact
