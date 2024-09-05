import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { heroData } from "@/mock"

const Contact = () => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <Navbar />
      <div className="custom-bg flex flex-col items-center">
        <div className="container mt-32 max-w-[700px] py-container max-[600px]:mt-36">
          <div className="flex flex-col items-center gap-4 rounded-lg bg-highlight p-5">
            <h1 className="text-h3 font-bold">Seja um voluntário!</h1>
            <ContactForm />
          </div>
        </div>
        <style jsx>{`
          .custom-bg {
            background: url(${heroData.bgUrl}) center/cover no-repeat;
          }
        `}</style>
      </div>

      <footer className="bg-highlight">
        <Footer />
      </footer>
    </div>
  )
}

export default Contact
