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

  return (
    <v.Root className={cn("text-tc-primary", className)}>
      <div className="sm-max:hidden">
        {avatar}
      </div>
      <v.Body>
        <v.Toolbar>
          <GoBackAction />
          <span className="text-2xl sm-max:hidden">{contact.fullName}</span>
          <span className="flex items-center gap-2">
            {favAction}
            {editAction}
          </span>
        </v.Toolbar>
        <v.ToolbarDivider />
        <v.Heading>
          {avatar}
          {name}
        </v.Heading>
        <v.HeadingDivider />
        <ContactDetailsFields contact={contact} />
      </v.Body>
    </v.Root>
  )
}

export default ContactDetailsPage
