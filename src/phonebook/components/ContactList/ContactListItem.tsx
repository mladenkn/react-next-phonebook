import { ContactListItem as ContactListItemModel } from "../../models"
import { GoToEditAction, FavoriteAction, DeleteAction } from "../actions"
import { ContactAvatar } from "../ContactAvatar"
import withWidth, { WithWidth } from "@material-ui/core/withWidth"
import { Link } from "../various"
import clsx from "clsx"
import { tw } from "../../../utils"

type ItemPresenterProps = {
  contact: ContactListItemModel
  isSelected: boolean
  variant: "bigger" | "smaller"
  onToggleFavorite(): void
  onDelete(): void
  onSelect(): void
} & WithWidth

const _ContactListItem = ({
  contact,
  isSelected,
  variant,
  onToggleFavorite,
  onDelete,
  onSelect,
}: ItemPresenterProps) => {
  const isBigger = variant === "bigger"

  const avatar = (
    <ContactAvatar
      className={clsx(isBigger && "mb-2 mt-5")}
      letter={contact.fullName[0]}
      style={contact.avatar}
      url={contact.avatarUrl}
    />
  )

  const name = (
    <p
      style={{ color: "rgba(0, 0, 0, 0.54)" }}
      className={clsx("font-sans text-sm", isBigger && "text-center")}
    >
      {contact.fullName}
    </p>
  )

  const showActions = variant === "smaller" || (isBigger && isSelected)

  const favoriteAction = showActions && (
    <FavoriteAction
      onClick={onToggleFavorite}
      isFavorite={contact.isFavorite}
      iconClass="text-sm"
    />
  )
  const editAction = showActions && <GoToEditAction contactId={contact.id} />
  const deleteAction = showActions && <DeleteAction onConfirm={onDelete} />

  const baseClass = tw.class`flex h-full items-center border-solid`

  switch (true) {
    case isBigger && !isSelected:
      return (
        <div
          className={clsx(baseClass, "flex-col  justify-center border-2 border-secondary-light")}
          onClick={onSelect}
        >
          {avatar}
          {name}
        </div>
      )
    case isBigger && isSelected:
      return (
        <Link className={clsx(baseClass, "flex-col justify-center border-2 border-primary-main")}>
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
        <div
          className={clsx(
            baseClass,
            "w-full justify-between border-2 border-secondary-light shadow-none",
          )}
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
}

export const ContactListItem = withWidth()(_ContactListItem)
