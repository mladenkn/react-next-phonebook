import { ContactListItem as ContactListItemModel } from "../models"
import { GoToEditAction, FavoriteAction, DeleteAction } from "../actions"
import { ContactAvatar } from "./contact-avatar"
import clsx from "clsx"
import { cn } from "../utils"
import { useRouter } from "next/router"
import { contactDetailsUrl } from "~/urls"

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

  const router = useRouter()
  function handleClick() {
    if (isSelected) {
      router.push(contactDetailsUrl(contact.id))
    } else onSelect()
  }

  return (
    <li
      className={cn(
        "h-16 w-full border-2 border-solid border-secondary-light md:h-36 md:w-60",
        isSelected && "cursor-pointer border-primary-main",
      )}
      onClick={handleClick}
    >
      <div className={cn("flex h-full w-full flex-col items-center pt-2 md-max:hidden")}>
        <div className="flex w-full justify-between px-1.5">
          {favoriteAction}
          {isSelected ? (
            <div className="flex">
              {editAction}
              {deleteAction}
            </div>
          ) : null}
        </div>
        {avatar}
        {name}
      </div>
      <div
        className={cn(
          "flex h-full w-full items-center justify-between py-2 pl-2 pr-1 shadow-none md:hidden",
        )}
      >
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
