import { Contact } from "../../models"
import ContactDetailsFields from "./ContactDetailsFields"
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions"
import { ContactPageBaseStylesMd, ContactPageBaseStylesXs } from "../ContactPageBase.style"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { ContactAvatar } from "../ContactAvatar"
import { cn } from "../../../utils"

type Props = { contact: Contact; onFavorite: () => void }

const ContactDetailsPage = ({ contact, onFavorite }: Props) => {
  const name = <p className="text-2xl">{contact.fullName}</p>
  const favAction = <FavoriteAction onClick={onFavorite} isFavorite={contact.isFavorite} />
  const editAction = <GoToEditAction contactId={contact.id} rootClass="inline-flex items-center" />

  const avatar = (
    <ContactAvatar
      style={contact.avatar}
      className="ml-2 mr-3 h-16 w-16"
      url={contact.avatarUrl}
      letter={contact.fullName[0]}
    />
  )

  const onlyXs = useMediaQuery("(max-width:599px)")

  if (onlyXs) {
    return (
      <div className={cn(ContactPageBaseStylesXs.root, "text-tc-primary")}>
        <div className={ContactPageBaseStylesXs.toolbar}>
          <GoBackAction />
          <span className="flex items-center gap-2">
            {favAction}
            {editAction}
          </span>
        </div>
        <div className={ContactPageBaseStylesXs.body}>
          <div className={ContactPageBaseStylesXs.heading}>
            {avatar}
            {name}
          </div>
          <ContactDetailsFields contact={contact} />
        </div>
      </div>
    )
  } else {
    return (
      <div className={cn(ContactPageBaseStylesMd.root, "text-tc-primary")}>
        <div>{avatar}</div>
        <div className={ContactPageBaseStylesMd.right}>
          <div className={cn(ContactPageBaseStylesMd.heading, "flex justify-between")}>
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
