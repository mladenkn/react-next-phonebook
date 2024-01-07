import ContactAvatar from "./contact-avatar"
import clsx from "clsx"
import { cn } from "~/utils/ui-utils"
import { ApiOutputs } from "~/utils/api"
import { ContactFavorite } from "./contact-update"
import { ContactDeleteAction } from "./contact-delete"
import { contactDetailsUrl } from "~/urls"
import { MouseEvent } from "react"
import { PencilIcon } from "~/assets/icons"
import { useRouter } from "next/router"

export type ContactListItemModel = ApiOutputs["contact"]["list"][number]

type ItemPresenterProps = {
  contact: ContactListItemModel
  isSelected: boolean
  onSelect(): void
  onEditClick(e: MouseEvent): void
}

export default function ContactListItem({
  contact,
  isSelected,
  onSelect,
  onEditClick,
}: ItemPresenterProps) {
  const avatar = (
    <ContactAvatar
      className="md:mb-2 md:mt-5"
      letter={contact.fullName[0]}
      style={contact.avatarUrl ? undefined : contact.avatarStyle}
      url={contact.avatarUrl}
    />
  )

  const name = (
    <p
      className={clsx("font-sans text-secondary-dark md:text-center")}
    >
      {contact.fullName}
    </p>
  )

  const favoriteAction = <ContactFavorite id={contact.id} isFavorite={contact.isFavorite} />
  const editAction = (
    <button onClick={onEditClick}>
      <PencilIcon />
    </button>
  )
  const deleteAction = <ContactDeleteAction contactId={contact.id} />

  const router = useRouter()
  function handleMdClick(e: MouseEvent) {
    if (isSelected) {
      router.push(contactDetailsUrl(contact.id))
    } else {
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
      <div
        className={cn(
          "flex h-full w-full items-center justify-between py-2 pl-2 pr-1 shadow-none md:hidden",
        )}
        onClick={() => router.push(contactDetailsUrl(contact.id))}
      >
        {avatar}
        {name}
        <div className="flex gap-1">
          {favoriteAction}
          {editAction}
          {deleteAction}
        </div>
      </div>
      <div
        className={cn("flex h-full w-full flex-col items-center pt-2 sm-max:hidden")}
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
      </div>
    </li>
  )
}
