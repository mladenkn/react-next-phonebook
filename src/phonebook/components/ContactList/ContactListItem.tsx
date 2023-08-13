import style from "./ContactListItem.style"
import { ContactListItem as ContactListItemModel } from "../../models"
import { Card, Typography, withStyles, WithStyles } from "@material-ui/core"
import { Link } from "../various"
import { contactDetailsUrl } from "../../urls"
import { GoToEditAction, FavoriteAction, DeleteAction } from "../actions"
import { ContactAvatar } from "../ContactAvatar"
import clsx from "clsx"

type Props = {
  contact: ContactListItemModel
  isSelected: boolean
  smOrDown: boolean
  onToggleFavorite(): void
  onDelete(): void
  onSelect(): void
}

export const ContactListItem = ({
  contact,
  isSelected,
  smOrDown,
  onToggleFavorite,
  onDelete,
  onSelect,
}: Props) => (
  <StyledItemDummy
    contact={contact}
    showFavoriteButton
    showEditLink={smOrDown || (!smOrDown && isSelected)}
    showDeleteButton={smOrDown || (!smOrDown && isSelected)}
    isLinkToDetails={smOrDown || (!smOrDown && isSelected)}
    isSelected={isSelected}
    onToggleFavorite={onToggleFavorite}
    onDelete={onDelete}
    onSelect={onSelect}
  />
)

type ItemPresenterProps = {
  contact: ContactListItemModel
  showFavoriteButton: boolean
  showEditLink: boolean
  showDeleteButton: boolean
  isLinkToDetails: boolean
  isSelected: boolean
  onToggleFavorite(): void
  onDelete(): void
  onSelect(): void
} & WithStyles<typeof style>

const ItemPresenter = (p: ItemPresenterProps) => {
  const { classes, contact, onToggleFavorite, onDelete, onSelect } = p

  const avatarAndName = (
    <Card className={clsx(classes.avatarAndName, p.isSelected && classes.selected)}>
      <ContactAvatar
        className={classes.avatar}
        letter={p.contact.fullName[0]}
        style={p.contact.avatar}
      />
      <div className={classes.nameBox}>
        <Typography className={classes.name}>{contact.fullName}</Typography>
      </div>
    </Card>
  )

  const favoriteAction = p.showFavoriteButton && (
    <FavoriteAction
      onClick={onToggleFavorite}
      isFavorite={contact.isFavorite}
      rootClass={clsx(classes.action, classes.favoriteAction)}
      iconClass={classes.icon}
    />
  )

  const editAction = p.showEditLink && (
    <GoToEditAction
      contactId={contact.id}
      rootClass={clsx(classes.action, classes.editAction)}
      iconClass={classes.icon}
    />
  )

  const deleteAction = p.showDeleteButton && (
    <DeleteAction
      onConfirm={onDelete}
      rootClass={clsx(classes.action, classes.deleteAction)}
      iconClass={classes.icon}
    />
  )

  return p.isLinkToDetails ? (
    <div className={classes.root}>
      <Link href={contactDetailsUrl(contact.id)} className={classes.rootLink}>
        {avatarAndName}
      </Link>
      {favoriteAction}
      {editAction}
      {deleteAction}
    </div>
  ) : (
    <div className={classes.root} onClick={onSelect}>
      {avatarAndName}
      {favoriteAction}
      {editAction}
      {deleteAction}
    </div>
  )
}

const StyledItemDummy = withStyles(style)(ItemPresenter)
