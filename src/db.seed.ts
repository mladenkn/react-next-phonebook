import { generateContact } from "~/contact/contact-data-generators"
import { generateArray } from "~/utils"
import db from "./db/db.instance"
import { Contact, PhoneNumber } from "./contact/contact-schema"

async function run(){
  const contacts = generateArray(generateContact, 25, 50)
  const contactsMapped = contacts.map(c => {
    const { phoneNumbers: numbers, id, ...ommited } = c
    return ommited
  })
  await db.insert(Contact).values(contactsMapped)

  const phoneNumbers = contacts.flatMap(c => c.phoneNumbers.map(n => ({ value: n.value, label: n.label, contactId: c.id })))
  await db.insert(PhoneNumber).values(phoneNumbers)
}

run().then(() => process.exit(0))
