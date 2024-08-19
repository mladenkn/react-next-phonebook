import { DeleteAction } from "~/actions"
import { api } from "~/utils/api"

type Props = {
  contactId: number
  withHoverEffect?: boolean
  withText?: boolean
  onClick?(): void
  onComplete?(): void
}

export function ContactDeleteAction({ contactId, onComplete, ...props }: Props) {
  const { mutate } = api.contact.delete.useMutation()

  async function handleConfirm() {
    mutate(contactId)
    onComplete && onComplete()
  }

  return (
    <DeleteAction
      dialogText="Are you sure you want to delete this contact?"
      onConfirm={handleConfirm}
      {...props}
    />
  )
}
