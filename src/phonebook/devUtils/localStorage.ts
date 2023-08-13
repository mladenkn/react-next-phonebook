import { generateArray } from "../../utils"
import { generateContact } from "../devUtils/dataGenerators"

export function seedDataIfNeeded() {
  const hasAnyContacts = Object.keys(localStorage).some(key => key.startsWith("contact-"))
  if (!hasAnyContacts) {
    const generatedContacts = generateArray(generateContact, 25, 50)
    for (const contact of generatedContacts)
      localStorage[`contact-${contact.id}`] = JSON.stringify(contact)
  }
}

export function wipeLocalStorageAppData() {
  const allContactsKeys = Object.keys(localStorage).filter(key => key.startsWith("contact-"))
  for (const key of allContactsKeys) {
    localStorage.removeItem(key)
  }
}
