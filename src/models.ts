import { CSSProperties } from "react"

export interface Contact {
  id: number
  fullName: string
  avatarStyle: CSSProperties
  avatarUrl?: string | null
  email: string
  numbers: PhoneNumber[]
  isFavorite: boolean
}

export interface ContactListItem {
  id: number
  fullName: string
  avatarStyle?: CSSProperties
  avatarUrl?: string | null
  isFavorite: boolean
}

export interface PhoneNumber {
  value: number
  label: string
}
