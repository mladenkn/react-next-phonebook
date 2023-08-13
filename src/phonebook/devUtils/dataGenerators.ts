import { Contact, PhoneNumber } from "../models"
import { faker } from "@faker-js/faker"
import { generateArray } from "../../utils"

const generatePhoneNumber = (): PhoneNumber => ({
  value: faker.number.int(),
  label: faker.helpers.arrayElement(["Home", "Work", "Cell", "Husband"]),
})

const avatarStyles = [
  { background: "green", color: "white" },
  { background: "yellow" },
  { background: "red", color: "white" },
  { background: "blue", color: "white" },
  { background: "orange" },
]

let contactId = 1
export const generateContact = (): Contact => ({
  id: contactId++,
  fullName: faker.name.firstName() + " " + faker.name.lastName(),
  avatar: faker.helpers.arrayElement([
    { background: faker.internet.avatar() },
    faker.helpers.arrayElement(avatarStyles),
  ]),
  email: faker.internet.email(),
  numbers: generateArray(generatePhoneNumber, 1, 4),
  isFavorite: faker.datatype.boolean(),
})
