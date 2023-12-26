import { GoToEditAction, FavoriteAction, DeleteAction } from "../actions"
import ContactAvatar from "./contact-avatar"
import clsx from "clsx"
import { cn } from "~/utils/ui-utils"
import { ApiOutputs } from "~/utils/api"
import { MouseEvent } from "react"

export type ContactListItemModel = ApiOutputs["contact"]["list"][number]

type ItemPresenterProps = {
  contact: ContactListItemModel
  isSelected: boolean
  onToggleFavorite(): void
  onDelete(): void
  onClick(): void
}

export default function ContactListItem({
  contact,
  isSelected,
  onToggleFavorite,
  onDelete,
  onClick,
}: ItemPresenterProps) {
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

  function handleToggleFavorite(e: MouseEvent) {
    if (isSelected) e.stopPropagation()
    onToggleFavorite()
  }
  const favoriteAction = (
    <FavoriteAction
      onClick={handleToggleFavorite}
      isFavorite={contact.isFavorite}
      iconClass="text-sm"
    />
  )
  const editAction = <GoToEditAction contactId={contact.id} />
  const deleteAction = <DeleteAction onConfirm={onDelete} />

  return (
    <li
      className={cn(
        "h-16 w-full cursor-pointer border-2 border-solid border-secondary-light md:h-36 md:w-60",
        isSelected && "border-primary-main",
      )}
      onClick={onClick}
    >
      <div className={cn("flex h-full w-full flex-col items-center pt-2 sm-max:hidden")}>
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
