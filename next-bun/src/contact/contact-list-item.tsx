import { ContactListItem as ContactListItemModel } from "../models"
import { GoToEditAction, FavoriteAction, DeleteAction } from "../actions"
import { ContactAvatar } from "./contact-avatar"
import clsx from "clsx"
import { cn } from "../utils"

type ItemPresenterProps = {
  contact: ContactListItemModel
  isSelected: boolean
  onToggleFavorite(): void
  onDelete(): void
  onSelect(): void
}

const ContactListItem = ({
  contact,
  isSelected,
  onToggleFavorite,
  onDelete,
  onSelect,
}: ItemPresenterProps) => {
  const avatar = (
    <ContactAvatar
      className="md:mb-2 md:mt-5"
      letter={contact.fullName[0]}
      style={contact.avatar}
      url={contact.avatarUrl}
    />
  )

  const name = (
    <p
      style={{ color: "rgba(0, 0, 0, 0.54)" }}
      className={clsx("font-sans text-sm md:text-center")}
    >
      {contact.fullName}
    </p>
  )

  const favoriteAction = (
    <FavoriteAction
      onClick={onToggleFavorite}
      isFavorite={contact.isFavorite}
      iconClass="text-sm"
    />
  )
  const editAction = <GoToEditAction contactId={contact.id} />
  const deleteAction = <DeleteAction onConfirm={onDelete} />

  return (
    <li
      className={cn("border-solid border-2 border-secondary-light h-16 md:h-36 w-full md:w-60", isSelected && "border-primary-main")}
      onClick={onSelect}
    >
      <div className={cn("md-max:hidden flex flex-col items-center w-full h-full pt-2")}>
        <div className="flex w-full justify-between px-1.5">
          {favoriteAction}
          {isSelected ? <div className="flex">
            {editAction}
            {deleteAction}
          </div> : null}
        </div>
        {avatar}
        {name}
      </div>
      <div className={cn("w-full h-full md:hidden justify-between py-2 pl-2 pr-1 shadow-none flex items-center")}>
        {avatar}
        {name}
        <div className="flex gap-1">
          {favoriteAction}
          {editAction}
          {deleteAction}
        </div>
      </div>
    </li>
  )
}

export default ContactListItem
