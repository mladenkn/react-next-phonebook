export interface Contact {
    id: number
    firstName: string
    lastName: string
    avatar: string
    email: string
    numbers: PhoneNumber[]
    isFavorite: boolean
}

export interface PhoneNumber {
    value: number
    label: string
}

// export interface ContactListItem {
//     id: number
//     firstName: string
//     lastName: string
//     avatar: string
//     isFavorite: boolean
// }