import { Contact } from "../../models"
import React, { useState, useContext } from "react"
import style from "./style"
import { DeleteAction, GoBackAction } from "../actions"
import { WithStyles, withStyles, Button } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import ContactForm from "./ContactForm"
import {
  useContactPageBaseStylesXs,
  useContactPageBaseStylesMd,
} from "../ContactPageBase-style"
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

  const setAvatar = (avatarUrl?: string) =>
    setEditedContact({ ...editedContact, avatar: avatarUrl })

  const formChange = (input: Contact, isValid: boolean) => {
    setEditedContact({ ...input, avatar: editedContact.avatar })
    setIsEditedContactValid(isValid)
  }

  const avatar = (
    <SwapableAvatar
      src={editedContact.avatar}
      className={classes.avatar}
      onChange={setAvatar}
    />
  )
  const form = (
    <ContactForm initialInput={editedContact} onChange={formChange} />
  )

  const goBack = useGoBack()

  const buttons = (
    <div className={classes.actions}>
      <Button
        variant="contained"
        color="secondary"
        onClick={goBack}
        className={classes.button}
      >
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

  const xsBaseClasses = useContactPageBaseStylesXs()
  const mdBaseClasses = useContactPageBaseStylesMd()

  const downSm = useMediaQuery("(max-width:959px)")

  if (downSm) {
    return (
      <div className={classes.shallowRoot}>
        <div className={xsBaseClasses.root + " " + classes.root}>
          <div className={xsBaseClasses.toolbar}>
            {backAction}
            {deleteAction}
          </div>
          <div className={xsBaseClasses.body}>
            <div className={xsBaseClasses.heading + " " + classes.heading}>
              {avatar}
            </div>
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
    <div className={mdBaseClasses.root}>
      <div className={mdBaseClasses.left}>{avatar}</div>
      <div className={mdBaseClasses.right + " " + classes.right_}>
        <div className={mdBaseClasses.heading}>
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
