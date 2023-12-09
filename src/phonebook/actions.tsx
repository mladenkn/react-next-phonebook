import { withStyles, WithStyles, IconButton, Typography } from "@material-ui/core"
import { deleteActionStyle } from "./actions-style"
import { contactEditUrl } from "./urls"
import { useState } from "react"
import DeleteModal from "./delete-dialog"
import { useGoBack } from "./go-back-context"
import { Link } from "./various"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteBorder"
import clsx from "clsx"

type GoToEditActionProps = {
  contactId: number
  rootClass?: string
  iconClass?: string
}

export const GoToEditAction = ({ contactId, rootClass, iconClass }: GoToEditActionProps) => (
  <Link href={contactEditUrl(contactId)} className={rootClass}>
    <EditIcon color="secondary" className={iconClass} />
  </Link>
)

type FavoriteActionProps = {
  onClick: () => void
  isFavorite: boolean
  iconClass?: string
}

export const FavoriteAction = ({ onClick, isFavorite, iconClass }: FavoriteActionProps) => (
  <button className={"p-0"} onClick={onClick}>
    {isFavorite ? (
      <FavoriteIcon className={iconClass} />
    ) : (
      <FavoriteOutlinedIcon className={iconClass} />
    )}
  </button>
)

type DeleteActionProps = {
  onConfirm: () => void
  withHoverEffect?: boolean
  withText?: boolean
  rootClass?: string
  iconClass?: string
} & WithStyles<typeof deleteActionStyle>

export const DeleteAction = withStyles(deleteActionStyle)(({
  onConfirm,
  withText,
  classes,
  rootClass,
  iconClass,
  withHoverEffect,
}: DeleteActionProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  const buttonClass = withHoverEffect || false ? classes.buttonHoverEffect : classes.button
  return (
    <>
      <IconButton
        className={clsx(rootClass, buttonClass)}
        onClick={() => setModalOpen(true)}
        disableRipple
      >
        {(withText || false) && <Typography className={classes.text}>Delete</Typography>}
        <DeleteIcon color="secondary" className={iconClass} />
      </IconButton>
      <DeleteModal
        isOpen={modalOpen}
        text="Are you sure you want to delete this contact?"
        onCancel={() => setModalOpen(false)}
        onConfirm={onConfirm}
      />
    </>
  )
})

type GoBackActionProps = {
  iconClass?: string
}

export const GoBackAction = ({ iconClass }: GoBackActionProps) => {
  const onClick = useGoBack()
  return (
    <button onClick={onClick} className="p-0">
      <ArrowBackIcon color="secondary" className={iconClass} />
    </button>
  )
}
