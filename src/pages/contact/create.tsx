import { getRandomAvatarStyle } from "~/contact/contact-data-generators";
import ContactEditBase from "~/contact/contact-edit";

export default function ContactCreatePage() {
  return <ContactEditBase contact={{
    email: "",
    fullName: "",
    numbers: [],
    isFavorite: false,
    avatarStyle: getRandomAvatarStyle()
  }} onSave={() => {}} onDelete={() => {}} />
}
