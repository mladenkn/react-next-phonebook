import { ContactListItem as ContactListItemModel } from "../models"
import { GoToEditAction, FavoriteAction, DeleteAction } from "../actions"
import { ContactAvatar } from "./contact-avatar"
import clsx from "clsx"
import { cn, tw } from "../../utils"
import Link from 'next/link'
import { contactDetailsUrl } from "../urls"

type ItemPresenterProps = {
  contact: ContactListItemModel
  isSelected: boolean
  variant: "smaller" | "bigger"
  onToggleFavorite(): void
  onDelete(): void
  onSelect(): void
}

const ContactListItem = ({
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

  const favoriteAction = (
    <FavoriteAction
      onClick={onToggleFavorite}
      isFavorite={contact.isFavorite}
      iconClass="text-sm"
    />
  )
  const editAction = <GoToEditAction contactId={contact.id} />
  const deleteAction = <DeleteAction onConfirm={onDelete} />

  const baseClass = cn(
    "flex items-center border-solid w-full",
    "md:w-60 md:h-36 md:pt-2 md:pt-2", // md
  )

  switch (true) {
    case isBigger && !isSelected:
      return (
        <li
          className={clsx(baseClass, "flex-col border-2 border-secondary-light")}
          onClick={onSelect}
        >
          <div className="flex w-full justify-start px-1.5">{favoriteAction}</div>
          {avatar}
          {name}
        </li>
      )
    case isBigger && isSelected:
      return (
        <li>
          <Link
            className={clsx(
              baseClass,
              "h-full flex-col border-2 border-primary-main hover:no-underline",
            )}
            href={contactDetailsUrl(contact.id)}
          >
            <div className="flex w-full justify-between px-1.5">
              {favoriteAction}
              <div className="flex">
                {editAction}
                {deleteAction}
              </div>
            </div>
            {avatar}
            {name}
          </Link>
        </li>
      )
    default:
      return (
        <li>
          <Link
            className={clsx(
              baseClass,
              "w-full justify-between border-2 border-secondary-light py-2 pl-2 pr-1 shadow-none",
            )}
            href={contactDetailsUrl(contact.id)}
          >
            {avatar}
            {name}
            <div className="flex gap-1">
              {favoriteAction}
              {editAction}
              {deleteAction}
            </div>
          </Link>
        </li>
      )
  }
}

export default ContactListItem
