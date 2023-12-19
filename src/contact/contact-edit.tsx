import { Contact as _Contact } from "../models"
import { useState } from "react"
import { DeleteAction, GoBackAction } from "../actions"
import ContactForm, { contactFormValidate } from "./contact-form"
import { SwapableAvatar } from "../swapable-avatar"
import { cn } from "../utils"
import { useRouter } from "next/router"
import Toolbar from "~/toolbar"

type Contact = Omit<_Contact, "id">

type Props = {
  contact: Contact
  onSave: (c: Contact) => void
  onDelete?: () => void
}

export default function ContactEditBase({ contact, onSave, onDelete }: Props) {
  const [editedContact, setEditedContact] = useState(contact)
  const [isEditedContactValid, setIsEditedContactValid] = useState(contactFormValidate(contact).isValid)

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

  return (
    <div className="mx-auto max-w-3xl">
      <Toolbar />
      <div className={cn("mt-16 px-3 text-tc-primary md:mt-24 md:flex sm-max:w-full")}>
        <div className="mr-4 sm-max:hidden">{avatar}</div>
        <div>
          <div className="mt-4 flex w-full items-center justify-between px-1 pb-2 pt-0">
            <GoBackAction />
            {contact ? <DeleteAction onConfirm={onDelete!} withHoverEffect /> : null}
          </div>
          <div className="h-0.25 w-full bg-secondary-main md:hidden" />
          <h1 className="flex items-center justify-center px-0 md:hidden md:pb-2 sm-max:py-4">
            {avatar}
          </h1>
          <div className="mb-2 h-0.25 w-full bg-primary-main" />
          <ContactForm initialInput={contact} onChange={formChange} />
          {buttons}
        </div>
      </div>
    </div>
  )
}
