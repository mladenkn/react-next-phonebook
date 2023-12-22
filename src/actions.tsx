import { contactEditUrl } from "./urls"
import { MouseEvent, useState } from "react"
import DeleteModal from "./delete-dialog"
import Link from "next/link"
import { cn } from "./utils"
import { useRouter } from "next/router"
import {
  ArrowBackIcon,
  HeartBorderIcon,
  HeartFilledIcon,
  PencilIcon,
  TrashIcon,
} from "./assets/icons"

type GoToEditActionProps = {
  contactId: number
}

export const GoToEditAction = ({ contactId }: GoToEditActionProps) => {
  return (
    <Link href={contactEditUrl(contactId)} onClick={e => e.stopPropagation()}>
      <PencilIcon />
    </Link>
  )
}

type FavoriteActionProps = {
  onClick: (e: MouseEvent) => void
  isFavorite: boolean
  iconClass?: string
}

export const FavoriteAction = ({ onClick, isFavorite, iconClass }: FavoriteActionProps) => (
  <button onClick={onClick}>
    {isFavorite ? (
      <HeartFilledIcon className={iconClass} />
    ) : (
      <HeartBorderIcon className={iconClass} />
    )}
  </button>
)

type DeleteActionProps = {
  withHoverEffect?: boolean
  withText?: boolean
  onClick?(): void
  onConfirm: () => void
}

export const DeleteAction = ({
  withText,
  withHoverEffect,
  onConfirm,
  onClick,
}: DeleteActionProps) => {
  const [modalOpen, setModalOpen] = useState(false)

  function handleClick(e: MouseEvent) {
    e.stopPropagation()
    onClick && onClick()
    setModalOpen(true)
  }

  return (
    <>
      <button
        className={cn(
          "flex text-secondary-dark",
          withHoverEffect && "button-hover-opacity rounded-sm p-1",
        )}
        onClick={handleClick}
      >
        {(withText || false) && <p className="mr-1 text-base">Delete</p>}
        <TrashIcon />
      </button>
      {modalOpen ? (
        <DeleteModal
          text="Are you sure you want to delete this contact?"
          onCancel={() => setModalOpen(false)}
          onConfirm={onConfirm}
        />
      ) : null}
    </>
  )
}

export const GoBackAction = () => {
  const router = useRouter()
  return (
    <button onClick={() => router.back()}>
      <ArrowBackIcon />
    </button>
  )
}
