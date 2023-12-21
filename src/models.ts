export type Contact = {
  id: number
  fullName: string
  avatarStyle: ContactAvatarStyle | null
  avatarUrl?: string | null
  email: string
  phoneNumbers: ContactPhoneNumber[]
  isFavorite: boolean
}

export type ContactAvatarStyle = {
  backgroundColor: string
  color: string
}

type ContactPhoneNumber = {
  value: string
  label: string
}
