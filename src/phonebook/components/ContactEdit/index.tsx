import { Contact } from "../../models"
import { useState } from "react"
import style from "./style"
import { DeleteAction, GoBackAction } from "../actions"
import { WithStyles, withStyles } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import ContactForm from "./ContactForm"
import { ContactPageBaseStylesXs, ContactPageBaseStylesMd } from "../ContactPageBase.style"
import { useGoBack } from "../../logic/GoBackContext"
import { SwapableAvatar } from "../SwapableAvatar"
import { cn } from "../../../utils"

type Props = {
  contact?: Contact
  onSave: (c: Contact) => void
  onDelete?: () => void
} & WithStyles<typeof style>

const ContactEditPage = ({ contact, classes, onSave, onDelete }: Props) => {
  const backAction = <GoBackAction rootClass={classes.backAction} />

  const onlyXs = useMediaQuery("(max-width:599px)")
  const deleteAction = contact ? (
    <DeleteAction
      onConfirm={onDelete!}
      withHoverEffect
      withText={!onlyXs}
      rootClass={classes.deleteAction}
    />
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
  const goBack = useGoBack()
  const buttonClass = cn("w-36 rounded-2xl text-white h-8")

  const buttons = (
    <div className="mx-0.5 mb-4 mt-2 flex justify-between">
      <button className={cn(buttonClass, "bg-secondary-main")} onClick={goBack}>
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
      <div className={classes.shallowRoot}>
        <div className={cn(ContactPageBaseStylesXs.root, classes.root)}>
          <div className={ContactPageBaseStylesXs.toolbar}>
            {backAction}
            {deleteAction}
          </div>
          <div className={ContactPageBaseStylesXs.body}>
            <div className={cn(ContactPageBaseStylesXs.heading, classes.heading)}>{avatar}</div>
            <div className={classes.formAndButtons}>
              {form}
              {buttons}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={ContactPageBaseStylesMd.root}>
      {avatar}
      <div className={cn(ContactPageBaseStylesMd.right, classes.right_)}>
        <div className={ContactPageBaseStylesMd.heading}>
          {backAction}
          {deleteAction}
        </div>
        <div className={classes.formAndButtons}>
          {form}
          {buttons}
        </div>
      </div>
    </div>
  )
}

export default withStyles(style)(ContactEditPage)
