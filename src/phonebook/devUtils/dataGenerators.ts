import { Contact, PhoneNumber } from "../models"
import { faker } from "@faker-js/faker"
import { generateArray } from "../../utils"

const generatePhoneNumber = (): PhoneNumber => ({
  value: faker.number.int(),
  label: faker.helpers.arrayElement(["Home", "Work", "Cell", "Husband"]),
})

const avatarStyles = [
  { background: "green", color: "white" },
  { background: "yellow", color: "black" },
  { background: "red", color: "white" },
  { background: "blue", color: "white" },
  { background: "orange", color: "black" },
]

let contactId = 1
export const generateContact = (): Contact => ({
  id: contactId++,
  fullName: faker.person.firstName() + " " + faker.person.lastName(),
  avatar: faker.datatype.boolean() ? faker.helpers.arrayElement(avatarStyles) : undefined,
  avatarUrl: faker.datatype.boolean() ? faker.internet.avatar() : undefined,
  email: faker.internet.email(),
  numbers: generateArray(generatePhoneNumber, 1, 4),
  isFavorite: faker.datatype.boolean(),
})
