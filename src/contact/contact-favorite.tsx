import { MouseEvent } from "react"
import { HeartBorderIcon, HeartFilledIcon } from "~/assets/icons"
import { updateMatches, removeNils } from "~/utils"
import { api } from "~/utils/api"

function useContactUpdateOptimistic() {
  const utils = api.useUtils()

  return api.contact.update.useMutation({
    async onMutate(updatedContact) {
      const updatedFields = removeNils(updatedContact)

      await Promise.all([utils.contact.list.cancel(), utils.contact.single.cancel()])

      utils.contact.list.setData(undefined, old => {
        if (!old) return old
        return updateMatches(
          old,
          c => c.id === updatedContact.id,
          c => ({ ...c, ...updatedFields }),
        )
      })

      utils.contact.single.setData(updatedContact.id, old => old && { ...old, ...updatedFields })

      return {
        previous: {
          contact: { list: utils.contact.list.getData(), single: utils.contact.single.getData() },
        },
      }
    },

    onError(err, updatedContact, context) {
      utils.contact.list.setData(undefined, context?.previous.contact.list)
      utils.contact.single.setData(updatedContact.id, context?.previous.contact.single)
    },

    async onSettled(data) {
      if (data) await utils.contact.single.invalidate(data.id)
      await utils.contact.list.invalidate()
    },
  })
}
type ContactFavoriteProps = {
  id: number
  isFavorite: boolean
}

export function ContactFavorite({ id, isFavorite }: ContactFavoriteProps) {
  const { mutate } = useContactUpdateOptimistic()

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
