import style from "./ContactListItem.style"
import { ContactListItem as ContactListItemModel } from "../../models"
import { withStyles, WithStyles } from "@material-ui/core"
import { GoToEditAction, FavoriteAction, DeleteAction } from "../actions"
import { ContactAvatar } from "../ContactAvatar"
import withWidth, { WithWidth } from "@material-ui/core/withWidth"
import { Link } from "../various"

type ItemPresenterProps = {
  contact: ContactListItemModel
  isSelected: boolean
  onToggleFavorite(): void
  onDelete(): void
  onSelect(): void
  smOrDown: boolean
} & WithStyles<typeof style> &
  WithWidth

const _ContactListItem = ({
  classes,
  contact,
  smOrDown,
  isSelected,
  width,
  onToggleFavorite,
  onDelete,
  onSelect,
}: ItemPresenterProps) => {
  const showEditLink = smOrDown || (!smOrDown && isSelected)
  const showDeleteButton = showEditLink
  const isLinkToDetails = showEditLink

  const avatar = (
    <ContactAvatar
      className="md:mb-2 md:mt-5"
      letter={contact.fullName[0]}
      style={contact.avatar}
      url={contact.avatarUrl}
    />
  )

  const name = (
    <p style={{ color: "rgba(0, 0, 0, 0.54)" }} className="font-sans text-sm lg:text-center">
      {contact.fullName}
    </p>
  )

  const favoriteAction = (
    <FavoriteAction
      onClick={onToggleFavorite}
      isFavorite={contact.isFavorite}
      iconClass={classes.icon}
    />
  )

  const editAction = showEditLink && (
    <GoToEditAction contactId={contact.id} iconClass={classes.icon} />
  )

  const deleteAction = showDeleteButton && (
    <DeleteAction onConfirm={onDelete} iconClass={classes.icon} />
  )

  switch (true) {
    case width === "md" && !isLinkToDetails:
      return (
        <div
          className="flex h-full flex-col items-center justify-center border-2 border-solid border-secondary-light"
          onClick={onSelect}
        >
          {avatar}
          {name}
        </div>
      )
    case width === "md" && isLinkToDetails:
      return (
        <Link className="flex h-full flex-col items-center justify-center border-2 border-solid border-primary-main">
          <div className="flex w-full justify-between px-1.5">
            {favoriteAction}
            <span>
              {editAction}
              {deleteAction}
            </span>
          </div>
          {avatar}
          {name}
        </Link>
      )
    default:
      return (
        <div className="flex h-full w-full items-center justify-between border-2 border-solid border-secondary-light shadow-none">
          {avatar}
          {name}
          <span>
            {favoriteAction}
            {editAction}
            {deleteAction}
          </span>
        </div>
      )
  }
}

export const ContactListItem = withWidth()(withStyles(style)(_ContactListItem))
