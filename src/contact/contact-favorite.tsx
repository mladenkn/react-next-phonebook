import { MouseEvent } from "react"
import { HeartBorderIcon, HeartFilledIcon } from "~/assets/icons"
import { updateMatches } from "~/utils"
import { api } from "~/utils/api"

function useContactUpdateOptimistic() {
  const utils = api.useUtils()

  return api.contact.update1.useMutation({
    async onMutate(variables) {
      await Promise.all([utils.contact.list.cancel(), utils.contact.single.cancel()])

      utils.contact.list.setData(undefined, old => {
        if (!old) return old
        return updateMatches(
          old,
          c => c.id === variables.id,
          c => ({ ...c, ...variables }),
        )
      })

      utils.contact.single.setData(variables.id, old => old && { ...old, ...variables })
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
