export interface Contact {
  id: number
  fullName: string
  avatar?: string
  email: string
  numbers: PhoneNumber[]
  isFavorite: boolean
}

export interface ContactListItem {
  id: number
  fullName: string
  avatar?: string
  isFavorite: boolean
}

export interface PhoneNumber {
  value: number
  label: string
}
