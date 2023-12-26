import { contactEditUrl } from "./urls"
import { MouseEvent, useState } from "react"
import DeleteModal from "./delete-dialog"
import Link from "next/link"
import { cn } from "~/utils/ui-utils"
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

export function GoToEditAction({ contactId }: GoToEditActionProps) {
  return (
    <Link href={contactEditUrl(contactId)} onClick={e => e.stopPropagation()}>
      <PencilIcon />
    </Link>
  )
}

export type DeleteActionProps = {
  withHoverEffect?: boolean
  withText?: boolean
  dialogText: string
  onConfirm: () => void
}

export function DeleteAction({
  withText,
  withHoverEffect,
  dialogText,
  onConfirm,
}: DeleteActionProps) {
  const [modalOpen, setModalOpen] = useState(false)

  function handleClick(e: MouseEvent) {
    e.stopPropagation()
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
        <DeleteModal text={dialogText} onCancel={() => setModalOpen(false)} onConfirm={onConfirm} />
      ) : null}
    </>
  )
}

export function GoBackAction() {
  const router = useRouter()
  return (
    <button onClick={() => router.back()}>
      <ArrowBackIcon />
    </button>
  )
}
