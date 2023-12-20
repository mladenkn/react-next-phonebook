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

interface PhoneNumber {
  value: number
  label: string
}
