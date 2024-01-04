import { GoToEditAction } from "~/actions"
import ContactAvatar from "./contact-avatar"
import clsx from "clsx"
import { cn } from "~/utils/ui-utils"
import { ApiOutputs } from "~/utils/api"
import { ContactFavorite } from "./contact-update"
import { ContactDeleteAction } from "./contact-delete"
import Link from "next/link"
import { contactDetailsUrl } from "~/urls"
import { MouseEvent } from "react"

export type ContactListItemModel = ApiOutputs["contact"]["list"][number]

type ItemPresenterProps = {
  contact: ContactListItemModel
  isSelected: boolean
  onSelect(): void
}

export default function ContactListItem({ contact, isSelected, onSelect }: ItemPresenterProps) {
  const avatar = (
    <ContactAvatar
      className="md:mb-2 md:mt-5"
      letter={contact.fullName[0]}
      style={contact.avatarStyle}
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

  const favoriteAction = <ContactFavorite id={contact.id} isFavorite={contact.isFavorite} />
  const editAction = <GoToEditAction contactId={contact.id} />
  const deleteAction = <ContactDeleteAction contactId={contact.id} />

  function handleMdClick(e: MouseEvent) {
    if (!isSelected) {
      e.preventDefault()
      onSelect()
    }
  }

  return (
    <li
      className={cn(
        "h-16 w-full cursor-pointer border-2 border-solid border-secondary-light md:h-36 md:w-60",
        isSelected && "border-primary-main",
      )}
    >
      <Link
        className={cn("flex h-full w-full flex-col items-center pt-2 sm-max:hidden")}
        href={contactDetailsUrl(contact.id)}
        onClick={handleMdClick}
      >
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
      </Link>
      <Link
        className={cn(
          "flex h-full w-full items-center justify-between py-2 pl-2 pr-1 shadow-none md:hidden",
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
