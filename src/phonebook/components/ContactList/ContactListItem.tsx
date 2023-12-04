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
    <Card
      className={clsx(
        "flex h-full w-full items-center border-2 border-solid border-secondary-light shadow-none md:block",
        classes.avatarAndName,
        p.isSelected && "border-primary-main",
      )}
    >
      <ContactAvatar
        className="md:order-2 md:m-auto md:mb-2 md:h-12 md:w-12"
        letter={p.contact.fullName[0]}
        style={p.contact.avatar}
        url={p.contact.avatarUrl}
      />
      <div className={classes.nameBox}>
        <p className="font-sans text-sm lg:text-center">{contact.fullName}</p>
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
    <div className="relative h-full w-full">
      <Link href={contactDetailsUrl(contact.id)} className={clsx("block h-full", classes.rootLink)}>
        {avatarAndName}
      </Link>
      {favoriteAction}
      {editAction}
      {deleteAction}
    </div>
  ) : (
    <div className="relative h-full w-full" onClick={onSelect}>
      {avatarAndName}
      {favoriteAction}
      {editAction}
      {deleteAction}
    </div>
  )
}

const StyledItemDummy = withStyles(style)(ItemPresenter)
