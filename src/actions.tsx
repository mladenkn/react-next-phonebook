import { MouseEvent, useRef, useState } from "react"
import DeleteModal from "./delete-dialog"
import { cn } from "~/utils/ui-utils"
import { useRouter } from "next/router"
import { ArrowBackIcon, PencilIcon, TrashIcon } from "./assets/icons"
import * as Toast from "@radix-ui/react-toast"

type GoToEditActionProps = {
  contactId: number
}

const toastCn = cn([
  "data-[state=open]:animate-slideIn",
  "data-[state=closed]:animate-hide",
  "data-[swipe=end]:animate-swipeOut",
  "grid",
  "grid-cols-[auto_max-content]",
  "items-center",
  "gap-x-[15px]",
  "rounded-md",
  "bg-white",
  "p-[15px]",
  "shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]",
  "[grid-template-areas:_'title_action'_'description_action']",
  "data-[swipe=cancel]:translate-x-0",
  "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
  "data-[swipe=cancel]:transition-[transform_200ms_ease-out]",
])

export function GoToEditAction({ contactId }: GoToEditActionProps) {
  const [toastActive, setToastActive] = useState(false)
  const timerRef = useRef(0)

  function handleClick(e: MouseEvent) {
    e.stopPropagation()
    setToastActive(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      // eventDateRef.current = oneWeekAway();
      setToastActive(true)
    }, 100)
  }
  return (
    <>
      <button onClick={handleClick}>
        <PencilIcon />
      </button>
      <Toast.Root className={toastCn} open={toastActive} onOpenChange={setToastActive}>
        oooohhh yeahhh
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
