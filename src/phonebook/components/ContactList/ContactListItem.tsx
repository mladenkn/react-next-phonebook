import style from "./ContactListItem.style"
import { ContactListItem as ContactListItemModel } from "../../models"
import { withStyles, WithStyles } from "@material-ui/core"
import { GoToEditAction, FavoriteAction, DeleteAction } from "../actions"
import { ContactAvatar } from "../ContactAvatar"
import withWidth, { WithWidth } from "@material-ui/core/withWidth"
import { Link } from "../various"
import clsx from "clsx"
import { tw } from "../../../utils"
import { useState, useLayoutEffect } from "react"

type ItemPresenterProps = {
  contact: ContactListItemModel
  isSelected: boolean
  onToggleFavorite(): void
  onDelete(): void
  onSelect(): void
  smOrDown: boolean
} & WithStyles<typeof style> &
  WithWidth

const _ContactListItem = ({
  classes,
  contact,
  smOrDown,
  isSelected,
  onToggleFavorite,
  onDelete,
  onSelect,
}: ItemPresenterProps) => {
  const showEditLink = smOrDown || (!smOrDown && isSelected)
  const showDeleteButton = showEditLink
  const isLinkToDetails = showEditLink

  const width = useWidth()
  const isMd = width && width >= 768

  const avatar = (
    <ContactAvatar
      className={clsx(isMd && "mb-2 mt-5")}
      letter={contact.fullName[0]}
      style={contact.avatar}
      url={contact.avatarUrl}
    />
  )

  const name = (
    <p
      style={{ color: "rgba(0, 0, 0, 0.54)" }}
      className={clsx("font-sans text-sm", isMd && "text-center")}
    >
      {contact.fullName}
    </p>
  )

  const favoriteAction = (
    <FavoriteAction
      onClick={onToggleFavorite}
      isFavorite={contact.isFavorite}
      iconClass={classes.icon}
    />
  )

  const editAction = showEditLink && (
    <GoToEditAction contactId={contact.id} iconClass={classes.icon} />
  )

  const deleteAction = showDeleteButton && (
    <DeleteAction onConfirm={onDelete} iconClass={classes.icon} />
  )

  const baseClass = tw.class`flex h-full items-center border-solid`

  switch (true) {
    case !width:
      return <></>
    case width! >= 768 && !isLinkToDetails:
      return (
        <div
          className={clsx(baseClass, "flex-col  justify-center border-2 border-secondary-light")}
          onClick={onSelect}
        >
          {avatar}
          {name}
        </div>
      )
    case width! >= 768 && isLinkToDetails:
      return (
        <Link className={clsx(baseClass, "flex-col justify-center border-2 border-primary-main")}>
          <div className="flex w-full justify-between px-1.5">
            {favoriteAction}
            <span>
              {editAction}
              {deleteAction}
            </span>
          </div>
          {avatar}
          {name}
        </Link>
      )
    default:
      return (
        <div
          className={clsx(
            baseClass,
            "w-full justify-between border-2 border-secondary-light shadow-none",
          )}
        >
          {avatar}
          {name}
          <span>
            {favoriteAction}
            {editAction}
            {deleteAction}
          </span>
        </div>
      )
  }
}

export const ContactListItem = withWidth()(withStyles(style)(_ContactListItem))

export function useWidth() {
  const [size, setSize] = useState<number>()

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return size
}
