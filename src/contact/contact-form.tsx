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
      </label>

      <div className="my-4 h-0.25 w-full bg-primary-main" />

      <form.Field name="phoneNumbers" mode="array">
        {phoneNumberField => (
          <div>
            <ContactFieldLabel
              className="mb-2"
              icon={<PhoneIcon className="text-primary-main" />}
              text="Phone numbers"
            />
            {phoneNumberField.state.value?.map((_, i) => (
              <div className="py-2 md:flex md:justify-between md:gap-2" key={i}>
                <form.Field name={`phoneNumbers[${i}].value`}>
                  {field => (
                    <input
                      className={cn(styles.input, "max-sm:mb-2 max-sm:w-full")}
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={e => field.handleChange(e.target.value)}
                    />
                  )}
                </form.Field>
                <form.Field name={`phoneNumbers[${i}].label`}>
                  {field => (
                    <input
                      className={styles.input}
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={e => field.handleChange(e.target.value)}
                    />
                  )}
                </form.Field>
                <button className="max-sm:ml-2" type="button">
                  <RemoveCircledIcon className="text-secondary-main" />
                </button>
              </div>
            ))}
          </div>
        )}
      </form.Field>

      <button className="mt-6 flex text-primary-main">
        <AddCircleOutlineIcon className="mr-1.5 text-primary-main" />
        Add number
      </button>

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
