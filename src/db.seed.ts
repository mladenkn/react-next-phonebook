import { generateContact } from "~/contact/contact-data-generators"
import { generateArray } from "~/utils"
import drizzleConnect from "./drizzle/drizzle.instance"
import { Contact, PhoneNumber } from "./contact/contact-schema"

async function run(){
  const db = drizzleConnect()

  const contacts = generateArray(generateContact, 25, 50)
  const contactsMapped = contacts.map(c => {
    const { numbers, id, ...ommited } = c
    return ommited
  })
  await db.insert(Contact).values(contactsMapped)

  const phoneNumbers = contacts.flatMap(c => c.numbers.map(n => ({ value: n.value, label: n.label, contactId: c.id })))
  await db.insert(PhoneNumber).values(phoneNumbers)
}

run().then(() => process.exit(0))
