import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import router from "./pages"
import {
  ContactServiceContextProvider,
  useContactRepositoryLocalStorage,
} from "./contact/contact-repository"
import { seedDataIfNeeded } from "./local-storage-seed"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2DA1AD",
    },
    secondary: {
      main: "#BBC4C3",
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
