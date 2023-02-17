import { useState, useEffect } from "react"
import { Contact } from "../models"
import { AsyncOperationStatus } from "../../utils"
import { useContactServiceContext } from "./contactsRepository"
import { homePageUrl } from "../urls"

export const useContactDetailsOps = (
  contactId: number,
  goBack: () => void,
  navigate: (url: string) => void
) => {
  const [fetchStatus, setFetchStatus] =
    useState<AsyncOperationStatus>("NEVER_INITIATED")
  const [contact, setContact] = useState<Contact | undefined>(undefined)

  const contactService = useContactServiceContext()

  useEffect(() => {
    setFetchStatus("PROCESSING")
    contactService.getById(contactId).then((c) => {
      setContact(c)
      setFetchStatus("COMPLETED")
    })
  }, [setFetchStatus, contactService, contactId, setContact])

  const favorite = () =>
    contactService.toggleFavorite(contactId).then(setContact)

  const save = (updatedContact: Contact) =>
    contactService.save(updatedContact).then(goBack)

  const delete_ = () =>
    contactService.delete(contactId).then(() => navigate(homePageUrl))

  return {
    fetchStatus,
    contact,
    favorite,
    save,
    delete: delete_,
  }
}
