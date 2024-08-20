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
    async onSettled(data, error, variables) {
      await Promise.all([
        apiUtils.contact.single.invalidate(variables.id),
        apiUtils.contact.list.invalidate(),
      ])
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
