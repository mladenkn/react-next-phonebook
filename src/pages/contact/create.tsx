import { getRandomAvatarStyle } from "~/contact/contact-data-generators"
import ContactEdit from "~/contact/contact-edit"

export default function ContactCreatePage() {
  return (
    <ContactEdit
      contact={{
        email: "",
        fullName: "",
        phoneNumbers: [],
        isFavorite: false,
        avatarStyle: getRandomAvatarStyle(),
      }}
    />
  )
}
