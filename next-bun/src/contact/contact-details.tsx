import { Contact } from "../models"
import ContactDetailsFields from "./contact-details-fields"
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions"
import { contactPageBaseStylesMd, contactPageBaseStylesXs } from "./contact-details-base-style"
import { ContactAvatar } from "./contact-avatar"
import { cn, useWidth } from "../utils"

type Props = { className?: string; contact: Contact; onFavorite: () => void }

const ContactDetailsPage = ({ className, contact, onFavorite }: Props) => {
  const name = <p className="text-2xl">{contact.fullName}</p>
  const favAction = <FavoriteAction onClick={onFavorite} isFavorite={contact.isFavorite} />
  const editAction = <GoToEditAction contactId={contact.id} />

  const width = useWidth()
  if (!width) return <></>

  const isXs = width < 600

  const avatar = (
    <ContactAvatar
      style={contact.avatar}
      className={cn("ml-2 mr-3 h-16 w-16", !isXs && "h-44 w-44")}
      url={contact.avatarUrl}
      letter={contact.fullName[0]}
    />
  )

  if (isXs) {
    return (
      <div className={cn(contactPageBaseStylesXs.root, "text-tc-primary", className)}>
        <div className={contactPageBaseStylesXs.toolbar}>
          <GoBackAction />
          <span className="flex items-center gap-2">
            {favAction}
            {editAction}
          </span>
        </div>
        <div className={contactPageBaseStylesXs.body}>
          <div className={contactPageBaseStylesXs.heading}>
            {avatar}
            {name}
          </div>
          <ContactDetailsFields contact={contact} />
        </div>
      </div>
    )
  } else {
    return (
      <div className={cn(className, contactPageBaseStylesMd.root, "items-start text-tc-primary")}>
        {avatar}
        <div className={contactPageBaseStylesMd.right}>
          <div className={cn(contactPageBaseStylesMd.heading, "flex justify-between")}>
            <GoBackAction />
            {name}
            <span className="inline-flex items-center gap-1">
              {favAction}
              {editAction}
            </span>
          </div>
          <div className="ml-3 mt-2">
            <ContactDetailsFields contact={contact} />
          </div>
        </div>
      </div>
    )
  }
}

export default ContactDetailsPage
