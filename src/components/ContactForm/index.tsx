import {
  GoogleFormProvider,
  useCheckboxInput,
  useGoogleForm,
  useLongAnswerInput,
  useRadioInput,
  useShortAnswerInput
} from "react-google-forms-hooks"
import Swal from "sweetalert2"

import { TextInput } from "@/components/ui/TextInput"

import form from "../../GoogleForm.json"
import Button from "../Button"
import { TextAreaInput } from "../ui/TextAreaInput"

const ShortAnswerInput = ({ id }: { id: string }) => {
  const { register, label } = useShortAnswerInput(id)
  return <TextInput label={label} {...register()} />
}

const CheckboxInput = ({ id }: { id: string }) => {
  const { options, label } = useCheckboxInput(id)
  return (
    <div>
      <label>{label}</label>
      {options.map((option) => (
        <div key={option.id}>
          <input type="checkbox" id={option.id} {...option.registerOption()} />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  )
}

const RadioInput = ({ id }: { id: string }) => {
  const { options, label } = useRadioInput(id)
  return (
    <div>
      <label>{label}</label>
      {options.map((option) => (
        <div key={option.id}>
          <input
            required
            type="radio"
            id={option.id}
            {...option.registerOption()}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  )
}

const LongAnswerInput = ({ id }: { id: string }) => {
  const { register, label } = useLongAnswerInput(id)
  return <TextAreaInput label={label} {...register()} />
}

const ContactForm = () => {
  const methods = useGoogleForm({ form: form as any })

  const onSubmit = async (data: any) => {
    await methods.submitToGoogleForms(data)
    Swal.fire({
      title: "Sucesso",
      text: "Formulário enviado com sucesso!",
      icon: "success",
      background: "#323232",
      color: "#E6E6E6",
      confirmButtonColor: "#D63E44"
    })
  }

  return (
    <div>
      <GoogleFormProvider {...methods}>
        <form id="ContactForm" onSubmit={methods.handleSubmit(onSubmit)}>
          <ShortAnswerInput id="1954405946" />
          <CheckboxInput id="1931622500" />
          <LongAnswerInput id="1505362106" />
          <RadioInput id="1589187329" />
          <Button as={"button"} type="submit">
            Submit
          </Button>
        </form>
      </GoogleFormProvider>
    </div>
  )
}

export default ContactForm
