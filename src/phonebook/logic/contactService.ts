import { Contact } from "../models"
import { updateMatches, containsOnlyDigits } from "../../utils"
import { createContext } from "../../utils/react"
import { useState } from "react"


export const useContactRepositoryLocalStorage = (contactList_: Contact[]) => {
  const [contactList, setContactList] = useState(contactList_)

  const getNextElementId = () => {
    const elementWithHighestId = contactList.sort((c) => c.id)[
      contactList.length - 1
    ]
    return elementWithHighestId.id + 1
  }

  return {
    getAll: async () => contactList,
    getById: async (id: number) => contactList.find((c) => c.id === id)!,

    search: async (keyword: string) => {
      const all = contactList.filter(contact => anyPropContains(contact, keyword))
      const favorites = all.filter(c => c.isFavorite)
      return { all, favorites }
    },

    save: async (contact: Contact) => {
      if (contact.id) {
        const [udpatedList, updatedItems] = updateMatches(
          contactList,
          (c) => c.id === contact.id,
          () => contact
        )
        setContactList(udpatedList)
        return updatedItems[0]
      } else {
        const contactWithId = { ...contact, id: getNextElementId() }
        setContactList([...contactList, contactWithId])
        return contactWithId
      }
    },

    delete: async (id: number) => {
      setContactList(contactList.filter((c) => c.id !== id))
    },

    toggleFavorite: async (id: number) => {
      const [allItems, updatedItems] = updateMatches(
        contactList,
        (c) => c.id === id,
        (c) => ({ ...c, isFavorite: !c.isFavorite })
      )
      setContactList(allItems)
      return updatedItems[0]
    }
  }
}

export const [ContactServiceContextProvider, useContactServiceContext] = createContext<ReturnType<typeof useContactRepositoryLocalStorage>>()

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
