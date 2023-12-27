import { contactEditUrl } from "./urls"
import { MouseEvent, useState } from "react"
import DeleteModal from "./delete-dialog"
import Link from "next/link"
import { cn } from "~/utils/ui-utils"
import { useRouter } from "next/router"
import { ArrowBackIcon, PencilIcon, TrashIcon } from "./assets/icons"

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
  withHoverEffect,
  withText,
  dialogText,
  onConfirm,
}: DeleteActionProps) {
  const [modalOpen, setModalOpen] = useState(false)

  function handleClick(e: MouseEvent) {
    e.stopPropagation()
    setModalOpen(true)
  }

  function handleCancel(e: MouseEvent) {
    e.stopPropagation()
    setModalOpen(false)
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
        {withText && <p className="mr-1 hidden text-base text-tc-primary md:block">Delete</p>}
        <TrashIcon />
      </button>
      {modalOpen ? (
        <DeleteModal text={dialogText} onCancel={handleCancel} onConfirm={onConfirm} />
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
