import { Contact as _Contact } from "../models"
import { ContactFieldLabel } from "../various"
import { cn } from "~/utils/ui-utils"
import {
  PersonOutlinedIcon,
  EmailIcon,
  PhoneIcon,
  RemoveCircledIcon,
  AddCircleOutlineIcon,
} from "~/assets/icons"
import { useForm } from "@tanstack/react-form"

const styles = {
  input: "p-2 border-2 border-solid border-secondary-light text-secondary-main outline-none",
  errorMessage: "ml-2 mt-0.5 text-red-500",
}

type Contact = Omit<_Contact, "id">

type Props = {
  initialInput: Contact
}

export default function ContactForm({ initialInput }: Props) {
  function handleValidate(values: Contact) {
    const errors = contactFormValidate(values)
    return errors
  }

  const form = useForm({
    defaultValues: initialInput,
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value)
    },
  })

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      <label>
        <ContactFieldLabel
          icon={<PersonOutlinedIcon className="text-primary-main" />}
          text="full name"
          className="mb-2"
        />

        <form.Field
          name="fullName"
          children={field => (
            <input
              className={cn(styles.input, "w-full sm:w-1/2")}
              type="text"
              name={field.name}
              onBlur={field.handleBlur}
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
            />
          )}
        />
        {/* <ErrorMessage component="div" name="fullName" className={styles.errorMessage} /> */}
      </label>

      <div className="my-4 h-0.25 w-full bg-primary-main" />

      <label>
        <ContactFieldLabel
          icon={<EmailIcon className="text-primary-main" />}
          text="email"
          className="mb-2"
        />
        <form.Field
          name="email"
          children={field => (
            <input
              className={cn(styles.input, "w-full sm:w-1/2")}
              type="text"
              name={field.name}
              onBlur={field.handleBlur}
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
            />
          )}
        />
        {/* <ErrorMessage component="div" name="email" className={styles.errorMessage} /> */}
      </label>

      <div className="my-4 h-0.25 w-full bg-primary-main" />
    </form>
  )
}

export function contactFormValidate(values: Contact) {
  let errors: any = {}

  if (values.email && (!values.email.includes("@") || !values.email.includes(".")))
    errors.email = "Email not valid."

  if (!values.fullName) errors.fullName = "Name is required."

  const errorCount = Object.keys(values).length

  return { errors, errorCount, isValid: errorCount === 0 }
}
