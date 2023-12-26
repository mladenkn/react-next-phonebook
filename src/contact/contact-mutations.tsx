import { MouseEvent } from "react"
import { FavoriteAction, FavoriteActionProps } from "~/actions"
import { updateMatches } from "~/utils"
import { api } from "~/utils/api"

export function useContactMutation() {
  const utils = api.useUtils()

  return api.contact.update.useMutation({
    onMutate: async updatedContact => {
      await utils.contact.list.cancel()

      const previousTodos = utils.contact.list.getData()

      utils.contact.list.setData(undefined, old => {
        if (!old) return old
        return updateMatches(
          old,
          c => c.id === updatedContact.id,
          c => ({ ...c, isfavorite: c.isFavorite }),
        )
      })

      return { previousTodos }
    },

    onError: (err, updatedContact, context) =>
      utils.contact.list.setData(undefined, context?.previousTodos),

    onSettled: () => utils.contact.list.invalidate(),
  })
}

type ContactFavoriteProps = {
  contact: {
    id: number
    isFavorite: boolean
  }
  iconClass?: string
}

export function ContactFavorite(props: ContactFavoriteProps) {
  const { mutate } = useContactMutation()

  function handleClick(e: MouseEvent) {
    e.stopPropagation()
    mutate(props.contact)
  }

  return <FavoriteAction isFavorite={props.contact.isFavorite} onClick={handleClick} />
}
