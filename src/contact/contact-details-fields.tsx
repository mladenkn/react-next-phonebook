import { EmailIcon, PhoneIcon } from "~/assets/icons"
import { ContactFieldLabel } from "../various"

type Contact = {
  email: string
  phoneNumbers: {
    label: string
    value: string
  }[]
}

const ContactDetailsFields = ({ contact }: { contact: Contact }) => (
  <div>
    <div className="py-5">
      <ContactFieldLabel icon={<EmailIcon className="text-primary-main" />} text="email" />
      <p className="ml-10 mt-3">{contact.email}</p>
    </div>
    <div className="py-5">
      <ContactFieldLabel icon={<PhoneIcon className="text-primary-main" />} text="number" />
      <ul className="ml-10 mt-4 flex flex-col gap-4">
        {contact.phoneNumbers.map(({ label, value }) => (
          <li key={value} className="flex gap-2">
            <p className="w-24 uppercase">{label}</p>
            <p className="underline">{value}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default ContactDetailsFields
