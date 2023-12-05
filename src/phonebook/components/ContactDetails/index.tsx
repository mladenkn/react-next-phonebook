import { Contact } from "../../models"
import ContactDetailsFields from "./ContactDetailsFields"
import style from "./style"
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions"
import { WithStyles, withStyles, Typography } from "@material-ui/core"
import { useContactPageBaseStylesMd, ContactPageBaseStylesXs } from "../ContactPageBase.style"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { ContactAvatar } from "../ContactAvatar"
import clsx from "clsx"

type Props = { contact: Contact; onFavorite: () => void } & WithStyles<typeof style>

const ContactDetailsPage = ({ contact, classes, onFavorite }: Props) => {
  const backAction = <GoBackAction />

  const name = <Typography className={classes.personName}>{contact.fullName}</Typography>

  const favAction = (
    <FavoriteAction
      onClick={onFavorite}
      isFavorite={contact.isFavorite}
      rootClass={clsx(classes.action, classes.favAction)}
      iconClass={classes.icon}
    />
  )

  const editAction = (
    <GoToEditAction
      contactId={contact.id}
      rootClass={clsx(classes.action, classes.editAction)}
      iconClass={classes.icon}
    />
  )

  const avatar = (
    <ContactAvatar
      style={contact.avatar}
      className={classes.avatar}
      url={contact.avatarUrl}
      letter={contact.fullName[0]}
    />
  )

  const mdBaseClasses = useContactPageBaseStylesMd()

  const onlyXs = useMediaQuery("(max-width:599px)")

  if (onlyXs) {
    return (
      <div className={clsx(ContactPageBaseStylesXs.root, classes.root)}>
        <div className={ContactPageBaseStylesXs.toolbar}>
          {backAction}
          {favAction}
          {editAction}
        </div>
        <div className={ContactPageBaseStylesXs.body}>
          <div className={ContactPageBaseStylesXs.heading}>
            {avatar}
            {name}
          </div>
          <div className={classes.detailsContainer}>
            <ContactDetailsFields contact={contact} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={clsx(mdBaseClasses.root, classes.root)}>
        <div className={mdBaseClasses.left}>{avatar}</div>
        <div className={mdBaseClasses.right}>
          <div className={mdBaseClasses.heading}>
            {backAction}
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
