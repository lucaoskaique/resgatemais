import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import { heroData } from "@/mock"

const Contact = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between">
      <Navbar />
      <div className="relative flex flex-col items-center">
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

        <div className="absolute left-1/2 top-10 mt-20 flex -translate-x-1/2 transform flex-col items-center gap-4 rounded-lg bg-highlight p-5">
          <h1 className="text-h3 font-bold">Seja um voluntário!</h1>
          <ContactForm />
        </div>
      </div>

      <footer className="bg-highlight">
        <Footer />
      </footer>
    </div>
  )
}

export default Contact
