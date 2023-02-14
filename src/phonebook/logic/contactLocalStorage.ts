import { Contact } from "../models"

export const getContacts = () => {
  const contactListJsonOrNothing = localStorage.getItem("contacts")
  return !contactListJsonOrNothing
    ? undefined
    : (JSON.parse(contactListJsonOrNothing) as Contact[])
}

export const persistContacts = (contactList: Contact[]) =>
  localStorage.setItem("contacts", JSON.stringify(contactList))
