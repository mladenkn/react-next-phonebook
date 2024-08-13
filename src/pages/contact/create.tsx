import ContactForm from "~/contact/contact-form"
import FixedToolbar from "~/toolbar"

export default function ContactCreatePage() {
  return (
    <div className="mx-auto max-w-3xl">
      <FixedToolbar />
      <ContactForm
        initialInput={{ email: "", fullName: "", phoneNumbers: [] }}
        onSubmit={() => {}}
      />
    </div>
  )
}
