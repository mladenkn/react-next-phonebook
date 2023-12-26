import { MouseEvent } from "react"
import { HeartBorderIcon, HeartFilledIcon } from "~/assets/icons"
import { updateMatches } from "~/utils"
import { api } from "~/utils/api"

export function useContactMutation() {
  const utils = api.useUtils()

  return api.contact.update.useMutation({
    onMutate: async updatedContact => {
      await utils.contact.list.cancel()

      const currentContacts = utils.contact.list.getData()

      utils.contact.list.setData(undefined, old => {
        if (!old) return old
        return updateMatches(
          old,
          c => c.id === updatedContact.id,
          c => ({ ...c, isfavorite: c.isFavorite }),
        )
      })

      // todo: set data to single

      return { previous: { contact: { list: currentContacts } } }
    },

    onError: (err, updatedContact, context) => {
      utils.contact.list.setData(undefined, context?.previous.contact.list)
      utils.contact.single.setData(updatedContact.id, c => c && { ...c, isFavorite: c?.isFavorite })
    },

    onSettled: () =>
      Promise.all([utils.contact.list.invalidate(), utils.contact.single.invalidate()]),
  })
}

type ContactFavoriteProps = {
  id: number
  isFavorite: boolean
}

export function ContactFavorite({ id, isFavorite }: ContactFavoriteProps) {
  const { mutate } = useContactMutation()

  function handleClick(e: MouseEvent) {
    e.stopPropagation()
    mutate({
      id,
      isFavorite: !isFavorite,
    })
  }

  return (
    <button onClick={handleClick}>{isFavorite ? <HeartFilledIcon /> : <HeartBorderIcon />}</button>
  )
}
