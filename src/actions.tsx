import { MouseEvent, useState } from "react"
import DeleteModal from "./delete-dialog"
import { cn } from "~/utils/ui-utils"
import { useRouter } from "next/router"
import { ArrowBackIcon, TrashIcon } from "./assets/icons"

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
        {withText && <p className="mr-1 hidden text-base text-secondary-dark md:block">Delete</p>}
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
