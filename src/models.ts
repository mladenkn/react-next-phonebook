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
    type: PhoneNumberType
}

export enum PhoneNumberType {
    Home='Home', Work='Work', Cell='Cell', Husband='Husband'
}

// export interface ContactListItem {
//     id: number
//     firstName: string
//     lastName: string
//     avatar: string
//     isFavorite: boolean
// }