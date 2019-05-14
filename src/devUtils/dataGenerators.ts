import { Contact, PhoneNumberType, PhoneNumber } from "../models";
import faker from 'faker'

export const generateArray = <T> (getNext: () => T, minCount: number, maxCount: number) => {
    const r: T[] = []
    for (let i = 0; i < maxCount; i++) 
        r.push(getNext())
    return r
}

const generatePhoneNumber = (): PhoneNumber => ({
    value: faker.random.number(),
    type: faker.random.arrayElement(['Home', 'Work', 'Cell', 'Husband']) as PhoneNumberType
})

let contactId = 1
export const generateContact = (): Contact => ({
    id: contactId++,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.internet.avatar(),
    email: faker.internet.email(),
    numbers: generateArray(generatePhoneNumber, 1, 4),
    isFavorite: faker.random.boolean()
})