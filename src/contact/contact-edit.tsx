import { Contact as _Contact } from "../models"
import ContactForm from "./contact-form"
import FixedToolbar from "~/toolbar"

type Contact = Omit<_Contact, "id"> & { id?: number }

type Props = {
  contact: Contact
}

export default function ContactEdit({ contact }: Props) {
  return (
    <div className="mx-auto max-w-3xl">
      <FixedToolbar />
      <ContactForm initialInput={contact} />
    </div>
  )
}
