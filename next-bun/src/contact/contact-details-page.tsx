import { Contact } from "../models"
import ContactDetailsFields from "./contact-details-fields"
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions"
import { applyCn } from "~/utils/apply"
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

export const SingleContactV = {
  Root: applyCn("div", cn("md:flex")),
  Toolbar: applyCn(
    "div",
    cn("mt-4 flex items-center px-1 pb-2 pt-0 justify-between"),
  ),
  ToolbarDivider: applyCn("div", cn("h-0.25 bg-secondary-main w-full md:hidden")),
  Heading: applyCn(
    "h1",
    cn("flex items-center px-0 md:pb-2 md:hidden sm-max:py-4"),
  ),
  HeadingDivider: applyCn("div", cn("h-0.25 bg-primary-main w-full")),
  Body: applyCn("div", cn("")),
  Right: applyCn("div", cn("inline-block ml-5"))
}

const v = SingleContactV


export default ContactDetailsPage
