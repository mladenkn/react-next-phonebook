import { Contact as _Contact } from "../models"
import { FormikErrors, Formik, Field, ErrorMessage, FieldArray } from "formik"
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
    onChange(values, errors.isValid)
    return errors
  }

  return (
    <Formik initialValues={initialInput} validate={handleValidate} onSubmit={() => {}}>
      {({ values }) => (
        <div>
          <label>
            <ContactFieldLabel
              icon={<PersonOutlinedIcon className="text-primary-main" />}
              text="full name"
              className="mb-2"
            />
            <Field type="text" name="fullName" className={cn(styles.input, "w-full sm:w-1/2")} />
            <ErrorMessage component="div" name="fullName" className={styles.errorMessage} />
          </label>

          <div className="my-4 h-0.25 w-full bg-primary-main" />

          <label>
            <ContactFieldLabel
              icon={<EmailIcon className="text-primary-main" />}
              text="email"
              className="mb-2"
            />
            <Field type="email" name="email" className={cn(styles.input, "w-full sm:w-1/2")} />
            <ErrorMessage component="div" name="email" className={styles.errorMessage} />
          </label>

          <div className="my-4 h-0.25 w-full bg-primary-main" />

          <FieldArray
            name="phoneNumbers"
            render={arr => (
              <div>
                <ContactFieldLabel
                  className="mb-2"
                  icon={<PhoneIcon className="text-primary-main" />}
                  text="phoneNumbers"
                />
                {values.phoneNumbers.map((_, index) => (
                  <div className="py-2 md:flex md:justify-between md:gap-2" key={index}>
                    <Field
                      name={`phoneNumbers[${index}].value`}
                      className={cn(styles.input, "max-sm:mb-2 max-sm:w-full")}
                    />
                    <Field name={`phoneNumbers.${index}.label`} className={styles.input} />
                    <button className="max-sm:ml-2" onClick={() => arr.remove(index)}>
                      <RemoveCircledIcon className="text-secondary-main" />
                    </button>
                  </div>
                ))}
                <button
                  className="mt-6 flex text-primary-main"
                  onClick={() => arr.push({ value: "", label: "" })}
                >
                  <AddCircleOutlineIcon className="mr-1.5 text-primary-main" />
                  Add number
                </button>
              </div>
            )}
          />
        </div>
      )}
    </Formik>
  )
}

export function contactFormValidate(values: Contact) {
  let errors: FormikErrors<Contact> = {}

  if (values.email && (!values.email.includes("@") || !values.email.includes(".")))
    errors.email = "Email not valid."

  if (!values.fullName) errors.fullName = "Name is required."

  const errorCount = Object.keys(values).length

  return { errors, errorCount, isValid: errorCount === 0 }
}
