import ContactForm from "@/components/ContactForm"

import Base from "../Base"

const Contact = () => {
  return (
    <Base>
      <div className="container my-10 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Contato</h1>
        <ContactForm />
      </div>
    </Base>
  )
}

export default Contact
