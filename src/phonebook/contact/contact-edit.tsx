import { Contact } from "../models"
import { useState } from "react"
import { DeleteAction, GoBackAction } from "../actions"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import ContactForm from "./contact-form"
import { ContactPageBaseStylesXs, ContactPageBaseStylesMd } from "./contact-details-base-style"
import { SwapableAvatar } from "../swapable-avatar"
import { cn } from "../../utils"
import { useNavigate } from "react-router-dom"

type Props = {
  className?: string
  contact?: Contact
  onSave: (c: Contact) => void
  onDelete?: () => void
}

const ContactEditPage = ({ className, contact, onSave, onDelete }: Props) => {
  const backAction = <GoBackAction />

  const onlyXs = useMediaQuery("(max-width:599px)")
  const deleteAction = contact ? (
    <DeleteAction onConfirm={onDelete!} withHoverEffect withText={!onlyXs} />
  ) : (
    ""
  )

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
  const navigate = useNavigate()
  const buttonClass = cn("w-36 rounded-2xl text-white h-8")

  const buttons = (
    <div className="mx-0.5 mb-4 mt-6 flex justify-between">
      <button className={cn(buttonClass, "bg-secondary-main")} onClick={() => navigate(-1)}>
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

  const downSm = useMediaQuery("(max-width:959px)")

  if (downSm) {
    return (
      <div className={cn("flex justify-center", className)}>
        <div className={cn(ContactPageBaseStylesXs.root, "w-full max-w-lg")}>
          <div className={ContactPageBaseStylesXs.toolbar}>
            {backAction}
            {deleteAction}
          </div>
          <div className={ContactPageBaseStylesXs.body}>
            <div className={cn(ContactPageBaseStylesXs.heading, "justify-center")}>{avatar}</div>
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
    <div className={cn(ContactPageBaseStylesMd.root, className)}>
      {avatar}
      <div className={cn(ContactPageBaseStylesMd.right)}>
        <div className={cn(ContactPageBaseStylesMd.heading, "justify-between")}>
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
