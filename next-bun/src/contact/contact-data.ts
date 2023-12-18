import { generateContact } from "~/contact/contact-data-generators"
import { generateArray } from "~/utils"

const contactsData = generateArray(generateContact, 25, 50)
export default contactsData