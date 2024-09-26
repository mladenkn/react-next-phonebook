import { useRouter } from "next/router"
import ContactForm, { ContactFormEntries } from "~/contact/contact-form"
import FixedToolbar from "~/toolbar"
import { contactDetailsUrl, homePageUrl } from "~/urls"
import { api } from "~/utils/api"

type FormEntriesValid = ContactFormEntries & {
  fullName: string
}

export default function ContactCreatePage() {
  const router = useRouter()

  const { mutate } = api.contact.create.useMutation({
    onSuccess(contact) {
      router.push(contactDetailsUrl(contact.id))
    },
  })

  function handleSubmit(input: ContactFormEntries) {
    mutate(input as FormEntriesValid)
  }

  return (
    <div className="mx-auto max-w-3xl">
      <FixedToolbar />
      <ContactForm
        initialInput={{ email: "", fullName: "", phoneNumbers: [] }}
        onSubmit={handleSubmit}
        goBackUrl={homePageUrl}
      />
    </div>
  )
}
