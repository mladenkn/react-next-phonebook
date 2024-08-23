import { Contact } from "../models"
import { faker } from "@faker-js/faker"
import { generateArray } from "../utils"

const generatePhoneNumber = () => ({
  value: faker.phone.number(),
  label: faker.helpers.arrayElement(["Home", "Work", "Cell"]),
})

const avatarStyles = [
  { backgroundColor: "green", color: "white" },
  { backgroundColor: "yellow", color: "black" },
  { backgroundColor: "red", color: "white" },
  { backgroundColor: "blue", color: "white" },
  { backgroundColor: "orange", color: "black" },
]

export function getRandomAvatarStyle() {
  return faker.helpers.arrayElement(avatarStyles)
}

export const generateContact = (): Omit<Contact, "id"> => ({
  fullName: faker.person.firstName() + " " + faker.person.lastName(),
  avatarStyle: getRandomAvatarStyle(),
  avatarUrl: faker.datatype.boolean() ? faker.image.avatar() : null,
  email: faker.internet.email(),
  phoneNumbers: generateArray(generatePhoneNumber, 1, 4),
  isFavorite: faker.datatype.boolean(),
})
