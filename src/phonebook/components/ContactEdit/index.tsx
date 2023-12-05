import { Contact } from "../../models"
import { useState } from "react"
import style from "./style"
import { DeleteAction, GoBackAction } from "../actions"
import { WithStyles, withStyles, Button } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import ContactForm from "./ContactForm"
import { ContactPageBaseStylesXs, ContactPageBaseStylesMd } from "../ContactPageBase.style"
import { useGoBack } from "../../logic/GoBackContext"
import { SwapableAvatar } from "../SwapableAvatar"

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
      className={classes.avatar}
      onChange={(avatarUrl?: string) => setEditedContact({ ...editedContact, avatarUrl })}
    />
  )
  const form = <ContactForm initialInput={editedContact} onChange={formChange} />

  const goBack = useGoBack()

  const buttons = (
    <div className={classes.actions}>
      <Button variant="contained" color="secondary" onClick={goBack} className={classes.button}>
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSave(editedContact)}
        className={classes.button}
        autoFocus
        disabled={!isEditedContactValid}
      >
        Save
      </Button>
    </div>
  )

  const downSm = useMediaQuery("(max-width:959px)")

  if (downSm) {
    return (
      <div className={classes.shallowRoot}>
        <div className={ContactPageBaseStylesXs.root + " " + classes.root}>
          <div className={ContactPageBaseStylesXs.toolbar}>
            {backAction}
            {deleteAction}
          </div>
          <div className={ContactPageBaseStylesXs.body}>
            <div className={ContactPageBaseStylesXs.heading + " " + classes.heading}>{avatar}</div>
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
      <div className={ContactPageBaseStylesMd.left}>{avatar}</div>
      <div className={ContactPageBaseStylesMd.right + " " + classes.right_}>
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
