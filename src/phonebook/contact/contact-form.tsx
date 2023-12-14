import { WithStyles, withStyles, IconButton, Button } from "@material-ui/core"
import { Contact } from "../models"
import style from "./contact-form-style"
import { FormikErrors, Formik, Field, ErrorMessage, FieldArray } from "formik"
import { Emptiness } from "../various"
import { ContactFieldLabel } from "../various"
import { AddCircleOutline } from "@material-ui/icons"
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined"
import { cn } from "../../utils"

/*
    Notes:
      You may notice that the following form is somewhat unusual to Formik. 
      Formik is missing onChange handler so I'm using validate to detect changes.
      Why is that necessary? I need change handler because I want the form field and submit button to be separated,
    submit button is in the parent component. 
      Why do I want the submit button to be separated? Because I don't want the tradional form, I think that this approach
    makes form the more reusable. Besides the form submit button (which is called Save button), form also contains a Cancel
    button. So, if this form should contain Save button, then it also needs to contain a Cancel button, but that doesn't make
    sense. Because the Cancel button is coupled to the page component, therefore the Save button should be to.
      But even if there weren't for the Cancel button, I still believe that the form submit button should be separated from
    the form component itself.
*/

const styles = {
  input: "p-2 border-2 border-solid border-secondary-light text-secondary-main outline-none",
  errorMessage: "ml-2 mt-0.5 text-red-500",
}

type Props = {
  initialInput: Contact
  onChange: (c: Contact, isValid: boolean) => void
} & WithStyles<typeof style>

const ContactForm = ({ classes, initialInput, onChange }: Props) => {
  const validate = (values: Contact) => {
    let errors: FormikErrors<Contact> = {}

    if (values.email && (!values.email.includes("@") || !values.email.includes(".")))
      errors.email = "Email not valid."

    if (!values.fullName) errors.fullName = "Name is required."

    onChange(values, Object.entries(errors).length === 0)

    return errors
  }

  return (
    <Formik initialValues={initialInput} validate={validate} onSubmit={() => {}}>
      {({ values }) => (
        <div>
          <label>
            <ContactFieldLabel Icon={PersonOutlinedIcon} text="full name" className="mb-2" />
            <Field type="text" name="fullName" className={cn(styles.input, "w-full sm:w-1/2")} />
            <ErrorMessage component="div" name="fullName" className={styles.errorMessage} />
          </label>

          <div className="my-4 h-0.25 w-full bg-primary-main" />

          <label>
            <ContactFieldLabel Icon={EmailIcon} text="email" className="mb-2" />
            <Field type="email" name="email" className={cn(styles.input, "w-full sm:w-1/2")} />
            <ErrorMessage component="div" name="email" className={styles.errorMessage} />
          </label>

          <div className="my-4 h-0.25 w-full bg-primary-main" />

          <FieldArray
            name="numbers"
            render={arr => (
              <div>
                <ContactFieldLabel Icon={PhoneIcon} text="numbers" className="mb-2" />
                {values.numbers.map((_, index) => (
                  <div className="py-2 sm:flex sm:justify-between" key={index}>
                    <Field
                      type="number"
                      name={`numbers[${index}].value`}
                      className={cn(styles.input, "max-sm-mb-2 max-sm:w-full")}
                    />
                    <Field name={`numbers.${index}.label`} className={styles.input} />
                    <IconButton
                      className="flex items-center justify-center"
                      onClick={() => arr.remove(index)}
                    >
                      <span className="inline-block h-7 w-7 rounded-full border-2 border-solid border-secondary-light text-center text-sm text-secondary-main">
                        x
                      </span>
                    </IconButton>
                  </div>
                ))}
                <Button
                  className="mt-8 text-primary-main"
                  onClick={() => arr.push({ value: "", label: "" })}
                >
                  <AddCircleOutline color="primary" />
                  <Emptiness width={5} />
                  Add number
                </Button>
              </div>
            )}
          />
        </div>
      )}
    </Formik>
  )
}

export default withStyles(style)(ContactForm)
