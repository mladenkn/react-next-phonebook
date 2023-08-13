import { Contact, PhoneNumber } from "../models"
import { faker } from "@faker-js/faker"
import { generateArray } from "../../utils"

const generatePhoneNumber = (): PhoneNumber => ({
  value: faker.number.int(),
  label: faker.helpers.arrayElement(["Home", "Work", "Cell", "Husband"]),
})

let contactId = 1
export const generateContact = (): Contact => ({
  id: contactId++,
  fullName: faker.name.firstName() + " " + faker.name.lastName(),
  avatar: faker.helpers.arrayElement([faker.internet.avatar(), undefined]),
  email: faker.internet.email(),
  numbers: generateArray(generatePhoneNumber, 1, 4),
  isFavorite: faker.datatype.boolean(),
})
