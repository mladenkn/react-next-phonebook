import { Contact } from "../../models"
import ContactDetailsFields from "./ContactDetailsFields"
import style from "./style"
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions"
import { WithStyles, withStyles, Typography } from "@material-ui/core"
import { ContactPageBaseStylesMd, ContactPageBaseStylesXs } from "../ContactPageBase.style"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { ContactAvatar } from "../ContactAvatar"
import clsx from "clsx"

type Props = { contact: Contact; onFavorite: () => void } & WithStyles<typeof style>

const ContactDetailsPage = ({ contact, classes, onFavorite }: Props) => {
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
      <div className={clsx(ContactPageBaseStylesXs.root, "text-tc-primary")}>
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
      <div className={clsx(ContactPageBaseStylesMd.root, "text-tc-primary")}>
        <div className={ContactPageBaseStylesMd.left}>{avatar}</div>
        <div className={ContactPageBaseStylesMd.right}>
          <div className={ContactPageBaseStylesMd.heading}>
            <GoBackAction />
            {name}
            {favAction}
            {editAction}
          </div>
          <div className={classes.detailsContainer}>
            <ContactDetailsFields contact={contact} />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(style)(ContactDetailsPage)
