import { useContext, createContext } from "react"

export const GoBackContext = createContext<(() => void) | undefined>(undefined)

export const useGoBack = () => {
  const goBack = useContext(GoBackContext)
  if(!goBack)
    throw new Error('Go back function not provided')
  return goBack
}
