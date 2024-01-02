import { MouseEvent, useRef, useState } from "react"
import DeleteModal from "./delete-dialog"
import { cn } from "~/utils/ui-utils"
import { useRouter } from "next/router"
import { ArrowBackIcon, PencilIcon, RemoveIcon, TrashIcon } from "./assets/icons"
import * as Toast from "@radix-ui/react-toast"

type GoToEditActionProps = {
  contactId: number
}

export function GoToEditAction({ contactId }: GoToEditActionProps) {
  const [toastActive, setToastActive] = useState(false)
  const timerRef = useRef(0)

  function handleClick(e: MouseEvent) {
    e.stopPropagation()
    setToastActive(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setToastActive(true)
    }, 100)
  }

  return (
    <>
      <button onClick={handleClick}>
        <PencilIcon />
      </button>
      <Toast.Root
        duration={200000}
        className="bg-error-light flex w-96 justify-between rounded-lg px-3 pb-4 pt-3"
        open={toastActive}
        onOpenChange={setToastActive}
        onClick={e => e.stopPropagation()}
      >
        <p className="text-xl">Edit functionality not implemented.</p>
        <button onClick={() => setToastActive(false)}>
          <RemoveIcon className="text-black" />
        </button>
      </Toast.Root>
    </>
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
