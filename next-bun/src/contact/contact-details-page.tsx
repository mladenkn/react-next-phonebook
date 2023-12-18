import { Contact } from "../models"
import ContactDetailsFields from "./contact-details-fields"
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions"
import { ContactAvatar } from "./contact-avatar"
import { cn } from "../utils"

type Props = { className?: string; contact: Contact; onFavorite: () => void }

const ContactDetailsPage = ({ className, contact, onFavorite }: Props) => {
  const name = <p className="text-2xl">{contact.fullName}</p>
  const favAction = <FavoriteAction onClick={onFavorite} isFavorite={contact.isFavorite} />
  const editAction = <GoToEditAction contactId={contact.id} />

  const avatar = (
    <ContactAvatar
      style={contact.avatar}
      className={cn("ml-2 mr-3 h-16 w-16 sm:h-44 sm:w-44")}
      url={contact.avatarUrl}
      letter={contact.fullName[0]}
    />
  )

  return (
    <div className={cn("text-tc-primary md:flex", className)}>
      <div className="sm-max:hidden">
        {avatar}
      </div>
      <div>
        <div className="mt-4 flex items-center px-1 pb-2 pt-0 justify-between">
          <GoBackAction />
          <span className="text-2xl sm-max:hidden">{contact.fullName}</span>
          <span className="flex items-center gap-2">
            {favAction}
            {editAction}
          </span>
        </div>
        <div className="h-0.25 bg-secondary-main w-full md:hidden" />
        <h1 className="flex items-center px-0 md:pb-2 md:hidden sm-max:py-4">
          {avatar}
          {name}
        </h1>
        <div className="h-0.25 bg-primary-main w-full" />
        <ContactDetailsFields contact={contact} />
      </div>
    </div>
  )
}

export default ContactDetailsPage
