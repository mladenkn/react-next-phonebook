import { MouseEvent } from "react"
import { HeartBorderIcon, HeartFilledIcon } from "~/assets/icons"
import { updateMatches } from "~/utils"
import { api } from "~/utils/api"

function useContactUpdateOptimistic() {
  const utils = api.useUtils()

  return api.contact.update1.useMutation({
    async onMutate(updatedContact) {
      await Promise.all([utils.contact.list.cancel(), utils.contact.single.cancel()])

      utils.contact.list.setData(undefined, old => {
        if (!old) return old
        return updateMatches(
          old,
          c => c.id === updatedContact.id,
          c => ({ ...c, ...updatedContact }),
        )
      })

      utils.contact.single.setData(updatedContact.id, old => old && { ...old, ...updatedContact })
    },

    async onSettled(data, error, variables, context) {
      await Promise.all([
        utils.contact.single.invalidate(variables.id),
        utils.contact.list.invalidate(),
      ])
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
