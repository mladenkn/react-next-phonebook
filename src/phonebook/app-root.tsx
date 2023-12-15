import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import router from "./pages"
import { RouterProvider } from "react-router-dom"
import {
  ContactServiceContextProvider,
  useContactRepositoryLocalStorage,
} from "./contact/contact-repository"
import { seedDataIfNeeded } from "./local-storage-seed"

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#BBC4C3",
      light: "#E3E3E3",
    },
  },
})

seedDataIfNeeded()

export const AppRoot = () => {
  const contactService = useContactRepositoryLocalStorage()

  return (
    <MuiThemeProvider theme={theme}>
      <ContactServiceContextProvider value={contactService}>
        <RouterProvider router={router} />
      </ContactServiceContextProvider>
    </MuiThemeProvider>
  )
}
