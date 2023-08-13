import { CSSProperties } from "react"

export interface Contact {
  id: number
  fullName: string
  avatar?: CSSProperties
  email: string
  numbers: PhoneNumber[]
  isFavorite: boolean
}

export interface ContactListItem {
  id: number
  fullName: string
  avatar?: CSSProperties
  isFavorite: boolean
}

export interface PhoneNumber {
  value: number
  label: string
}
