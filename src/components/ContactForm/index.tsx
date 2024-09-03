import {
  GoogleFormProvider,
  useCheckboxInput,
  useGoogleForm,
  useLongAnswerInput,
  useRadioInput,
  useShortAnswerInput
} from "react-google-forms-hooks"

import Button from "@/components/Button"
import { TextInput } from "@/components/ui/TextInput"

import form from "../../GoogleForm.json"
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
          <input type="radio" id={option.id} {...option.registerOption()} />
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
    alert("Form submitted successfully!")
  }

  return (
    <div>
      <GoogleFormProvider {...methods}>
        <form id="ContactForm" onSubmit={methods.handleSubmit(onSubmit)}>
          <ShortAnswerInput id="1954405946" />
          <CheckboxInput id="1931622500" />
          <LongAnswerInput id="1505362106" />
          <RadioInput id="1589187329" />
          <Button type="submit" className="mt-2">
            Submit
          </Button>
        </form>
      </GoogleFormProvider>
    </div>
  )
}

export default ContactForm
