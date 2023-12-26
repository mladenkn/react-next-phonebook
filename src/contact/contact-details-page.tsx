import { Contact } from "../models"
import ContactDetailsFields from "./contact-details-fields"
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions"
import ContactAvatar from "./contact-avatar"
import { cn } from "../utils"
import Toolbar from "~/toolbar"

type Props = { contact: Contact; onFavorite: () => void }

export default function ContactDetailsPage({ contact, onFavorite }: Props) {
  const name = <p className="text-2xl">{contact.fullName}</p>
  const favAction = <FavoriteAction onClick={onFavorite} isFavorite={contact.isFavorite} />
  const editAction = <GoToEditAction contactId={contact.id} />

  const avatar = (
    <ContactAvatar
      style={contact.avatarStyle}
      className={cn("ml-2 mr-3 h-16 w-16 sm:h-44 sm:w-44")}
      url={contact.avatarUrl}
      letter={contact.fullName[0]}
    />
  )

  return (
    <div className="mx-auto max-w-xl">
      <Toolbar />
      <div className={cn("mt-16 px-3 text-tc-primary sm:mt-24 sm:flex xs-max:w-full")}>
        <div className="xs-max:hidden">{avatar}</div>
        <div>
          <div className="mt-4 flex items-center justify-between px-1 pb-2 pt-0 sm:w-80">
            <GoBackAction />
            <span className="text-2xl xs-max:hidden">{contact.fullName}</span>
            <span className="flex items-center gap-2">
              {favAction}
              {editAction}
            </span>
          </div>
          <div className="h-0.25 w-full bg-secondary-main sm:hidden" />
          <h1 className="flex items-center px-0 sm:hidden sm:pb-2 xs-max:py-4">
            {avatar}
            {name}
          </h1>
          <div className="h-0.25 w-full bg-primary-main" />
          <ContactDetailsFields contact={contact} />
        </div>
      </div>
    </div>
  )
}
