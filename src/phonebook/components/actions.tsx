import {
  withStyles,
  WithStyles,
  IconButton,
  Typography,
  Tooltip,
} from "@material-ui/core"
import {
  goToEditActionStyle,
  favoriteActionStyle,
  deleteActionStyle,
  goBackStyle,
} from "./actions-style"
import { contactEditUrl } from "../urls"
import { useState } from "react"
import DeleteModal from "./DeleteDialog"
import { useGoBack } from "../logic/GoBackContext"
import { Link } from "./various"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import SaveIcon from "@material-ui/icons/Save"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined"


type GoToEditActionProps = {
  contactId: number
  rootClass?: string
  iconClass?: string
} & WithStyles<typeof goToEditActionStyle>

export const GoToEditAction = withStyles(goToEditActionStyle)(
  ({ classes, contactId, rootClass, iconClass }: GoToEditActionProps) => (
    <Link
      href={contactEditUrl(contactId)}
      className={classes.root + " " + rootClass}
    >
      <EditIcon color="secondary" className={iconClass} />
    </Link>
  )
)

type FavoriteActionProps = {
  onClick: () => void
  isFavorite: boolean
  rootClass?: string
  iconClass?: string
} & WithStyles<typeof favoriteActionStyle>

export const FavoriteAction = withStyles(favoriteActionStyle)(
  ({
    onClick,
    isFavorite,
    classes,
    rootClass,
    iconClass,
  }: FavoriteActionProps) => (
    <IconButton
      className={classes.root + " " + rootClass}
      onClick={onClick}
      disableRipple
    >
      {isFavorite ? <FavoriteIcon /> : <FavoriteOutlinedIcon />}
    </IconButton>
  )
)

type DeleteActionProps = {
  onConfirm: () => void
  withHoverEffect?: boolean
  withText?: boolean
  rootClass?: string
  iconClass?: string
} & WithStyles<typeof deleteActionStyle>

export const DeleteAction = withStyles(deleteActionStyle)(
  ({
    onConfirm,
    withText,
    classes,
    rootClass,
    iconClass,
    withHoverEffect,
  }: DeleteActionProps) => {
    const [modalOpen, setModalOpen] = useState(false)
    const buttonClass =
      withHoverEffect || false ? classes.buttonHoverEffect : classes.button
    return (
      <div className={rootClass}>
        <IconButton
          onClick={() => setModalOpen(true)}
          className={buttonClass}
          disableRipple
        >
          {(withText || false) && (
            <Typography className={classes.text}>Delete</Typography>
          )}
          <DeleteIcon color="secondary" className={iconClass} />
        </IconButton>
        <DeleteModal
          isOpen={modalOpen}
          text="Are you sure you want to delete this contact?"
          onCancel={() => setModalOpen(false)}
          onConfirm={onConfirm}
        />
      </div>
    )
  }
)

type GoBackActionProps = {
  rootClass?: string
  iconClass?: string
  onClick?: () => void
  useGoBackContext?: boolean
} & WithStyles<typeof goBackStyle>

export const GoBackAction = withStyles(goBackStyle)(
  ({
    onClick,
    classes,
    rootClass,
    iconClass,
    useGoBackContext,
  }: GoBackActionProps) => {
    const onClick_ =
      useGoBackContext || true ? useGoBack() : onClick
    return (
      <IconButton
        onClick={onClick_}
        className={classes.root + " " + rootClass}
        disableRipple
      >
        <ArrowBackIcon color="secondary" className={iconClass} />
      </IconButton>
    )
  }
)

type SaveWorkActionProps = { onClick: () => void; className: string }
export const SaveChangesAction = ({
  className,
  onClick,
}: SaveWorkActionProps) => (
  <Tooltip title="Save changes">
    <IconButton onClick={onClick} className={className}>
      <SaveIcon />
    </IconButton>
  </Tooltip>
)
