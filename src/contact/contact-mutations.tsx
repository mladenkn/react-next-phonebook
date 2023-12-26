import { MouseEvent } from "react"
import { HeartBorderIcon, HeartFilledIcon } from "~/assets/icons"
import { isNil, updateMatches } from "~/utils"
import { api } from "~/utils/api"

export function useContactUpdate() {
  const utils = api.useUtils()

  return api.contact.update.useMutation({
    async onMutate(updatedContact) {
      function getNewData<T extends typeof updatedContact>(old: T) {
        return {
          ...old,
          isFavorite: isNil(updatedContact.isFavorite)
            ? old.isFavorite
            : (updatedContact.isFavorite as boolean),
        }
      }

      await Promise.all([utils.contact.list.cancel(), utils.contact.single.cancel()])

      utils.contact.list.setData(undefined, old => {
        if (!old) return old
        return updateMatches(
          old,
          c => c.id === updatedContact.id,
          c => getNewData(c),
        )
      })

      utils.contact.single.setData(updatedContact.id, old => old && getNewData(old))

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

    onSettled() {
      return Promise.all([utils.contact.list.invalidate(), utils.contact.single.invalidate()])
    },
  })
}

type ContactFavoriteProps = {
  id: number
  isFavorite: boolean
}

export function ContactFavorite({ id, isFavorite }: ContactFavoriteProps) {
  const { mutate } = useContactUpdate()

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
