export type Contact = {
  id: number
  fullName: string
  avatarStyle: ContactAvatarStyle
  avatarUrl?: string | null
  email: string
  numbers: ContactPhoneNumber[]
  isFavorite: boolean
}

export type ContactAvatarStyle = {
  backgroundColor: string, color: string
}

type ContactPhoneNumber = {
  value: string
  label: string
}
