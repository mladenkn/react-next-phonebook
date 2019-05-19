import { Contact, PhoneNumber } from "../models";
import faker from 'faker';
import { generateArray } from "../../utils";

const generatePhoneNumber = (): PhoneNumber => ({
    value: faker.random.number(),
    label: faker.random.arrayElement(['Home', 'Work', 'Cell', 'Husband'])
})

let contactId = 1
export const generateContact = (): Contact => ({
    id: contactId++,
    fullName: faker.name.firstName() + ' ' + faker.name.lastName(),
    avatar: faker.internet.avatar(),
    email: faker.internet.email(),
    numbers: generateArray(generatePhoneNumber, 1, 4),
    isFavorite: faker.random.boolean()
})