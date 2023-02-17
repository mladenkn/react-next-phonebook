import { Contact, ContactListItem } from "../models"
import { replaceMatches, updateMatches, containsOnlyDigits } from "../../utils"
import { createContext } from "../../utils/react"


// Classes and services may be discouraged in React but they are not a bad pattern :)
export class ContactService {
  nextElementId: number

  constructor(private contactList: Contact[]) {
    const elementWithHighestId = contactList.sort((c) => c.id)[
      contactList.length - 1
    ]
    this.nextElementId = elementWithHighestId.id + 1
  }

  async getAll() {
    return this.contactList
  }

  async getById(id: number) {
    return this.contactList.find((c) => c.id === id)!
  }

  async search(keyword: string) {
    const all = this.contactList.filter(contact => anyPropContains(contact, keyword))
    const favorites = all.filter((c) => c.isFavorite)
    return { all, favorites }
  }

  async save(contact: Contact) {
    if (contact.id) {
      this.contactList = replaceMatches(
        this.contactList,
        (c) => c.id === contact.id,
        contact
      )[0]
      return this.contactList
    } else {
      const contactWithId = { ...contact, id: this.nextElementId }
      this.nextElementId++
      this.contactList.push(contactWithId)
      return contactWithId
    }
  }

  async delete(id: number) {
    this.contactList = this.contactList.filter((c) => c.id !== id)
  }

  async toggleFavorite(id: number) {
    const [allItems, updatedItems] = updateMatches(
      this.contactList,
      (c) => c.id === id,
      (c) => ({ ...c, isFavorite: !c.isFavorite })
    )
    this.contactList = allItems
    return updatedItems[0]
  }
}

export const [ContactServiceContextProvider, useContactServiceContext] = createContext<ContactService>()

export const anyPropContains = (contact: Contact, keyword: string) => {
  const keywordLower = keyword.toLocaleLowerCase()
  if (contact.fullName.toLocaleLowerCase().includes(keywordLower)) return true
  if (contact.email.toLocaleLowerCase().includes(keywordLower)) return true
  if (containsOnlyDigits(keyword)) {
    const numMatch = contact.numbers.some((n) =>
      n.value.toString().includes(keyword)
    )
    if (numMatch) return true
  }
  return false
}
