import { Contact } from "../models"
import { ContactDeleteAction } from "./contact-delete"
import ContactForm from "./contact-form"
import FixedToolbar from "~/toolbar"
import { useRouter } from "next/router"
import { homePageUrl } from "~/urls"

type Props = {
  contact: Contact
}

export default function ContactEdit({ contact }: Props) {
  const router = useRouter()
  return (
    <div className="mx-auto max-w-3xl">
      <FixedToolbar />
      <ContactForm
        initialInput={contact}
        toolbarRight={
          <ContactDeleteAction
            contactId={contact.id}
            onComplete={() => router.push(homePageUrl)}
            withHoverEffect
            withText
          />
        }
      />
    </div>
  )
}
