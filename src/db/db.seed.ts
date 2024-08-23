import { generateContact } from "~/contact/contact-data-generators"
import { generateArray } from "~/utils"
import db from "./db/db.instance"
import { createContact } from "./contact/contact-api"

async function run() {
  const contacts = generateArray(generateContact, 25, 50)
  await Promise.all(contacts.map(contact => createContact(db, contact)))
}

run().then(() => process.exit(0))
