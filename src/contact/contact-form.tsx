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
import { useRouter } from "next/router"
import { GoBackAction } from "../actions"
import SwapableAvatar from "../swapable-avatar"
import { ReactNode } from "react"

type Contact = Omit<_Contact, "id" | "avatarStyle">

type Props = {
  initialInput: Contact
  toolbarRight?: ReactNode
}

export default function ContactForm({ initialInput, toolbarRight }: Props) {
  const form = useForm({
    defaultValues: initialInput,
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value)
    },
  })

  const buttonClass = cn("w-36 rounded-2xl text-white h-8")

  const router = useRouter()

  const avatar = (
    <form.Field name="avatarUrl">
      {field => (
        <SwapableAvatar
          src={field.state.value}
          className="h-52 w-52"
          onChange={value => field.handleChange(value)}
        />
      )}
    </form.Field>
  )

  const formStore = form.useStore(s => s.values)
  console.log(49, formStore)

  const numbersField = form.useField({ name: "phoneNumbers" })

  return (
    <form
      className="mt-16 px-3 text-secondary-dark md:mt-20 md:flex sm-max:w-full"
      onSubmit={e => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      <div className="mr-4 sm-max:hidden">{avatar}</div>
      <div className="md:min-w-96">
        <div className="mt-4 flex w-full items-center justify-between px-1 pb-2 pt-0">
          <GoBackAction />
          {toolbarRight}
        </div>
        <div className="h-0.25 w-full bg-secondary-main md:hidden" />
        <h1 className="flex items-center justify-center px-0 md:hidden md:pb-2 sm-max:py-4">
          {avatar}
        </h1>
        <div className="mb-2 h-0.25 w-full bg-primary-main" />

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
            <div className="min-h-14">
              <ContactFieldLabel
                className="mb-2"
                icon={<PhoneIcon className="text-primary-main" />}
                text="Phone numbers"
              />
              {phoneNumberField.state.value?.map((_, index) => (
                <div className="py-2 md:flex md:justify-between md:gap-2" key={index}>
                  <form.Field name={`phoneNumbers[${index}].value`}>
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
                  <form.Field name={`phoneNumbers[${index}].label`}>
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
                  <button
                    className="max-sm:ml-2"
                    type="button"
                    onClick={() => numbersField.removeValue(index)}
                  >
                    <RemoveCircledIcon className="text-secondary-main" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </form.Field>

        <button
          className="mt-6 flex text-primary-main"
          onClick={() => numbersField.pushValue({ label: "", value: "" })}
        >
          <AddCircleOutlineIcon className="mr-1.5 text-primary-main" />
          Add number
        </button>

        <div className="my-4 h-0.25 w-full bg-primary-main" />

        <div className="mx-0.5 mb-4 mt-6 flex justify-between">
          <button className={cn(buttonClass, "bg-secondary-main")} onClick={() => router.back()}>
            Cancel
          </button>
          <button className={cn(buttonClass, "bg-primary-main")}>Save</button>
        </div>
      </div>
    </form>
  )
}

const styles = {
  input: "p-2 border-2 border-solid border-secondary-light text-secondary-main outline-none",
  errorMessage: "ml-2 mt-0.5 text-red-500",
}
