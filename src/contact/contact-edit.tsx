import { Contact } from "../models"
import { ContactDeleteAction } from "./contact-delete"
import ContactForm, { ContactFormEntries } from "./contact-form"
import FixedToolbar from "~/toolbar"
import { useRouter } from "next/router"
import { contactDetailsUrl, homePageUrl } from "~/urls"
import { api } from "~/utils/api"

type Props = {
  contact: Contact
}

export default function ContactEdit({ contact }: Props) {
  const router = useRouter()

  const { mutate } = api.contact.update.useMutation({
    onSuccess() {
      router.push(contactDetailsUrl(contact.id))
    },
  })
  async function onSubmit(entries: ContactFormEntries) {
    mutate({ id: contact.id, ...entries })
  }

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
        onSubmit={onSubmit}
      />
    </div>
  )
}
