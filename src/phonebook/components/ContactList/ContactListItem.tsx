import style from "./ContactListItem.style"
import { ContactListItem as ContactListItemModel } from "../../models"
import { withStyles, WithStyles } from "@material-ui/core"
import { GoToEditAction, FavoriteAction, DeleteAction } from "../actions"
import { ContactAvatar } from "../ContactAvatar"

type ItemPresenterProps = {
  contact: ContactListItemModel
  isSelected: boolean
  onToggleFavorite(): void
  onDelete(): void
  onSelect(): void
  smOrDown: boolean
} & WithStyles<typeof style>

const _ContactListItem = ({
  classes,
  contact,
  smOrDown,
  isSelected,
  onToggleFavorite,
  onDelete,
  onSelect,
}: ItemPresenterProps) => {
  const showEditLink = smOrDown || (!smOrDown && isSelected)
  const showDeleteButton = showEditLink
  const isLinkToDetails = showEditLink

  const avatar = (
    <ContactAvatar
      className="md:m-auto md:mb-2 md:h-12 md:w-12"
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

  return (
    <div
      className="relative flex h-full w-full items-center justify-between border-solid border-secondary-light shadow-none"
      onClick={isLinkToDetails ? undefined : onSelect}
    >
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

export const ContactListItem = withStyles(style)(_ContactListItem)
