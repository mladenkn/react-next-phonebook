import { Contact } from "../models"
import { useState } from "react"
import { DeleteAction, GoBackAction } from "../actions"
import ContactForm from "./contact-form"
import { contactPageBaseStylesXs, contactPageBaseStylesMd } from "./contact-details-base-style"
import { SwapableAvatar } from "../swapable-avatar"
import { cn } from "../utils"
import { useRouter } from "next/router"
import Toolbar from "~/toolbar"

type Props = {
  contact?: Contact
  onSave: (c: Contact) => void
  onDelete?: () => void
}

const ContactEditPage = ({ contact, onSave, onDelete }: Props) => {
  const contact_ = contact || {
    id: 0,
    fullName: "",
    avatar: undefined,
    email: "",
    numbers: [],
    isFavorite: false,
  }

  const isEdit = contact ? true : false

  const [editedContact, setEditedContact] = useState(contact_)
  const [isEditedContactValid, setIsEditedContactValid] = useState(isEdit)

  const formChange = (input: Contact, isValid: boolean) => {
    setEditedContact({ ...input, avatar: editedContact.avatar })
    setIsEditedContactValid(isValid)
  }

  const avatar = (
    <SwapableAvatar
      src={editedContact.avatarUrl}
      className="h-52 w-52"
      onChange={(avatarUrl?: string) => setEditedContact({ ...editedContact, avatarUrl })}
    />
  )

  const buttonClass = cn("w-36 rounded-2xl text-white h-8")

  const router = useRouter()

  const buttons = (
    <div className="mx-0.5 mb-4 mt-6 flex justify-between">
      <button className={cn(buttonClass, "bg-secondary-main")} onClick={() => router.back()}>
        Cancel
      </button>
      <button
        onClick={() => onSave(editedContact)}
        className={cn(buttonClass, "bg-primary-main")}
        disabled={!isEditedContactValid}
      >
        Save
      </button>
    </div>
  )

  const deleteAction = contact ? (
    <DeleteAction onConfirm={onDelete!} withHoverEffect />
  ) : null

  return (
    <div className="max-w-3xl mx-auto">
      <Toolbar />
      <div className={cn("text-tc-primary md:flex mt-16 md:mt-24 sm-max:w-full px-3")}>
        <div className="sm-max:hidden mr-4">
          {avatar}
        </div>
        <div>
          <div className="mt-4 flex items-center px-1 pb-2 pt-0 justify-between w-full">
            <GoBackAction />
            {deleteAction}
          </div>
          <div className="h-0.25 bg-secondary-main w-full md:hidden" />
          <h1 className="flex items-center justify-center px-0 md:pb-2 md:hidden sm-max:py-4">
            {avatar}
          </h1>
          <div className="h-0.25 bg-primary-main w-full" />
          <ContactForm initialInput={editedContact} onChange={formChange} />
          {buttons}
        </div>
      </div>
    </div>
  )
}

export default ContactEditPage
