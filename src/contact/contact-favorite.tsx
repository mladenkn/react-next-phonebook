import { MouseEvent } from "react"
import { HeartBorderIcon, HeartFilledIcon } from "~/assets/icons"
import { api } from "~/utils/api"

type ContactFavoriteProps = {
  id: number
  isFavorite: boolean
}

export function ContactFavorite({ id, isFavorite }: ContactFavoriteProps) {
  const apiUtils = api.useUtils()
  const { mutate } = api.contact.update1.useMutation({
    async onSuccess(data, variables) {
      if (data) {
        apiUtils.contact.single.setData(data.id, data)
      } else {
        await apiUtils.contact.single.invalidate(variables.id)
      }
      await apiUtils.contact.list.invalidate()
    },
  })

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
