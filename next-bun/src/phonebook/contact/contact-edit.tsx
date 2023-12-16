import { Contact } from "../models"
import { useState } from "react"
import { DeleteAction, GoBackAction } from "../actions"
import ContactForm from "./contact-form"
import { contactPageBaseStylesXs, contactPageBaseStylesMd } from "./contact-details-base-style"
import { SwapableAvatar } from "../swapable-avatar"
import { cn, useWidth } from "../../utils"
import { useRouter } from 'next/router'

type Props = {
  className?: string
  contact?: Contact
  onSave: (c: Contact) => void
  onDelete?: () => void
}

const ContactEditPage = ({ className, contact, onSave, onDelete }: Props) => {
  const backAction = <GoBackAction />

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

  const form = <ContactForm initialInput={editedContact} onChange={formChange} />
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

  const width = useWidth()
  if (!width) return <></>

  const isXs = width < 600

  const deleteAction = contact ? (
    <DeleteAction onConfirm={onDelete!} withHoverEffect withText={!isXs} />
  ) : null

  const downSm = width < 960

  if (downSm) {
    return (
      <div className={cn("flex justify-center", className)}>
        <div className={cn(contactPageBaseStylesXs.root, "w-full max-w-lg")}>
          <div className={contactPageBaseStylesXs.toolbar}>
            {backAction}
            {deleteAction}
          </div>
          <div className={contactPageBaseStylesXs.body}>
            <div className={cn(contactPageBaseStylesXs.heading, "justify-center")}>{avatar}</div>
            <div className="mt-3">
              {form}
              {buttons}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={cn(contactPageBaseStylesMd.root, className)}>
      {avatar}
      <div className={cn(contactPageBaseStylesMd.right)}>
        <div className={cn(contactPageBaseStylesMd.heading, "justify-between")}>
          {backAction}
          {deleteAction}
        </div>
        <div className="ml-1 mt-1">
          {form}
          {buttons}
        </div>
      </div>
    </div>
  )
}

export default ContactEditPage
