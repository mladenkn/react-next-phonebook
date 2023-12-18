import { Contact } from "../models"
import ContactDetailsFields from "./contact-details-fields"
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions"
import { contactPageBaseStylesMd, SingleContactV } from "./contact-details-base-style"
import { ContactAvatar } from "./contact-avatar"
import { cn, useWidth } from "../utils"

type Props = { className?: string; contact: Contact; onFavorite: () => void }

const v = SingleContactV

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
      <v.Root className={cn("text-tc-primary", className)}>
        <v.Toolbar>
          <GoBackAction />
          <span className="flex items-center gap-2">
            {favAction}
            {editAction}
          </span>
        </v.Toolbar>
        <v.Body>
          <v.Heading>
            {avatar}
            {name}
          </v.Heading>
          <v.BodyDivider />
          <ContactDetailsFields contact={contact} />
        </v.Body>
      </v.Root>
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
