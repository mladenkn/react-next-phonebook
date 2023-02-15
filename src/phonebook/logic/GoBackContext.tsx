import { createContext } from "../../utils/react"

export const [GoBackContextProvider, useGoBack] = createContext<() => void>()
