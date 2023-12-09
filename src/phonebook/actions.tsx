import { withStyles, WithStyles, IconButton, createStyles, Theme } from "@material-ui/core"
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

export const GoToEditAction = ({ contactId }: { contactId: number }) => (
  <Link href={contactEditUrl(contactId)}>
    <EditIcon color="secondary" />
  </Link>
)

type FavoriteActionProps = {
  onClick: () => void
  isFavorite: boolean
  iconClass?: string
}

export const FavoriteAction = ({ onClick, isFavorite, iconClass }: FavoriteActionProps) => (
  <button onClick={onClick}>
    {isFavorite ? (
      <FavoriteIcon className={iconClass} color="secondary" />
    ) : (
      <FavoriteOutlinedIcon className={iconClass} color="secondary" />
    )}
  </button>
)

type DeleteActionProps = {
  onConfirm: () => void
  withHoverEffect?: boolean
  withText?: boolean
} & WithStyles<typeof deleteActionStyle>

export const DeleteAction = withStyles(deleteActionStyle)(({
  onConfirm,
  withText,
  classes,
  withHoverEffect,
}: DeleteActionProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  const buttonClass = withHoverEffect || false ? classes.buttonHoverEffect : classes.button
  return (
    <>
      <IconButton className={buttonClass} onClick={() => setModalOpen(true)} disableRipple>
        {(withText || false) && <p className="mr-1 text-base">Delete</p>}
        <DeleteIcon color="secondary" />
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

export const GoBackAction = () => {
  const onClick = useGoBack()
  return (
    <button onClick={onClick}>
      <ArrowBackIcon color="secondary" />
    </button>
  )
}

function deleteActionStyle({ palette }: Theme) {
  return createStyles({
    button: {
      padding: 0,
      color: palette.text.primary,
      "&:hover": {
        "background-color": "inherit",
      },
    },
    buttonHoverEffect: {
      padding: 5,
      color: palette.text.primary,
      borderRadius: "1%",
    },
  })
}
