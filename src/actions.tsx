import { MouseEvent, useState } from "react"
import DeleteModal from "./delete-dialog"
import { cn } from "~/utils/ui-utils"
import { useRouter } from "next/router"
import { ArrowBackIcon, PencilIcon, TrashIcon } from "./assets/icons"

type GoToEditActionProps = {
  contactId: number
}

export function GoToEditAction({ contactId }: GoToEditActionProps) {
  function handleClick(e: MouseEvent) {
    e.stopPropagation()
    alert("Edit functionality not implemented.")
  }
  return (
    <button onClick={handleClick}>
      <PencilIcon />
    </button>
  )
}

export type DeleteActionProps = {
  withHoverEffect?: boolean
  withText?: boolean
  dialogText: string
  onConfirm: () => void
}

// Maybe put in head like MUI, to avoid some problems like e.stopPropagation()
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

  function handleConfirm(e: MouseEvent) {
    e.stopPropagation()
    onConfirm()
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
        <DeleteModal text={dialogText} onCancel={handleCancel} onConfirm={handleConfirm} />
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
