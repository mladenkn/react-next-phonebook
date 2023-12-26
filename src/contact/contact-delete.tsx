import { DeleteAction, DeleteActionProps } from "~/actions"
import { api } from "~/utils/api"

function useContactDelete() {
  const utils = api.useUtils()

  return api.contact.delete.useMutation({
    async onMutate(contactId) {
      await Promise.all([utils.contact.list.cancel(), utils.contact.single.cancel()])

      utils.contact.list.setData(undefined, old => {
        return old?.filter(c => c.id !== contactId)
      })

      return {
        previous: {
          contact: { list: utils.contact.list.getData() },
        },
      }
    },

    onError(err, updatedContact, context) {
      utils.contact.list.setData(undefined, context?.previous.contact.list)
    },

    onSettled() {
      return Promise.all([utils.contact.list.invalidate()])
    },
  })
}

type Props = {
  contactId: number
  withHoverEffect?: boolean
  withText?: boolean
  onClick?(): void
  onComplete(): void
}

export function ContactDeleteAction({ contactId, onComplete, ...props }: Props) {
  const { mutate } = useContactDelete()

  async function handleConfirm() {
    await mutate(contactId)
    onComplete()
  }

  return (
    <DeleteAction
      dialogText="Are you sure you want to delete this contact?"
      onConfirm={handleConfirm}
      {...props}
    />
  )
}
