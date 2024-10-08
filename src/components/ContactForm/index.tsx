import {
  GoogleFormProvider,
  useCheckboxInput,
  useGoogleForm,
  // useLongAnswerInput,
  useRadioInput,
  useShortAnswerInput
} from "react-google-forms-hooks"
import Swal from "sweetalert2"

import { TextInput } from "@/components/ui/TextInput"
import { cn } from "@/lib/utils"

import form from "../../GoogleForm.json"
import Button from "../Button"

// import { TextAreaInput } from "../ui/TextAreaInput"
type InputProps = {
  id: string
  className?: string
}

const ShortAnswerInput = ({ id }: InputProps) => {
  const { register, label } = useShortAnswerInput(id)
  return <TextInput label={label} {...register()} />
}

const CheckboxInput = ({ id, className }: InputProps) => {
  const { options, label } = useCheckboxInput(id)
  return (
    <div className="flex flex-col gap-3">
      <label className="text-paragraph font-bold">{label}</label>
      <div className={cn("flex flex-wrap items-center gap-3", className)}>
        {options.map((option) => (
          <div key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              {...option.registerOption()}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

const RadioInput = ({ id, className }: InputProps) => {
  const { options, label } = useRadioInput(id)
  return (
    <div>
      <label className="text-paragraph font-bold">{label}</label>
      <div className={cn("flex flex-wrap items-center gap-3", className)}>
        {options.map((option) => (
          <div key={option.id}>
            <input type="radio" id={option.id} {...option.registerOption()} />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

// const LongAnswerInput = ({ id }: InputProps) => {
//   const { register, label } = useLongAnswerInput(id)
//   return <TextAreaInput label={label} {...register()} />
// }

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
        <form
          className="flex flex-col gap-2"
          id="ContactForm"
          onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="mb-6 flex flex-col gap-2">
            <ShortAnswerInput id="1716903264" />
            <ShortAnswerInput id="182861281" />
            <ShortAnswerInput id="1373922681" />
            <ShortAnswerInput id="725381455" />
            <ShortAnswerInput id="1031332134" />
          </div>
          <CheckboxInput id="776661885" />
          <CheckboxInput
            className="grid justify-between md:grid-cols-[repeat(2,max-content)]"
            id="798225254"
          />
          <div className="flex justify-between max-md:flex-col md:items-center">
            <CheckboxInput id="2031111894" />
            <RadioInput id="1618202966" />
          </div>
          <Button
            className="self-center rounded-sm bg-background md:w-1/4"
            as={"button"}
            type="submit">
            Enviar
          </Button>
        </form>
      </GoogleFormProvider>
    </div>
  )
}

export default ContactForm
