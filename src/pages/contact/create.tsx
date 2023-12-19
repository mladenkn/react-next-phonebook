import ContactEditBase from "~/contact/contact-edit";

export default function ContactCreatePage() {
  return <ContactEditBase contact={{
    email: "",
    fullName: "",
    numbers: [],
    isFavorite: false
  }} onSave={() => {}} onDelete={() => {}} />
}
