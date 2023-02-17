import { Contact } from "../models"
import { updateMatches, containsOnlyDigits } from "../../utils"
import { createContext } from "../../utils/react"
import { useState } from "react"


export const useContactRepositoryLocalStorage = (contactList_: Contact[]) => {
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
