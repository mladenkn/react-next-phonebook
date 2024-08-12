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

  return (
    <div>
      <label>
        <ContactFieldLabel
          icon={<PersonOutlinedIcon className="text-primary-main" />}
          text="full name"
          className="mb-2"
        />
        <input
          type="text"
          name="fullName"
          className={cn(styles.input, "w-full sm:w-1/2")}
          defaultValue={initialInput.fullName}
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
        <input
          type="email"
          name="email"
          className={cn(styles.input, "w-full sm:w-1/2")}
          defaultValue={initialInput.email}
        />
        {/* <ErrorMessage component="div" name="email" className={styles.errorMessage} /> */}
      </label>

      <div className="my-4 h-0.25 w-full bg-primary-main" />
    </div>
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
