export interface Contact {
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

interface ContactPhoneNumber {
  value: number
  label: string
}
