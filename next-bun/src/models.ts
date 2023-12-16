import { CSSProperties } from "react"

export interface Contact {
  id: number
  fullName: string
  avatar?: CSSProperties
  avatarUrl?: string
  email: string
  numbers: PhoneNumber[]
  isFavorite: boolean
}

export interface ContactListItem {
  id: number
  fullName: string
  avatar?: CSSProperties
  avatarUrl?: string
  isFavorite: boolean
}

export interface PhoneNumber {
  value: number
  label: string
}
