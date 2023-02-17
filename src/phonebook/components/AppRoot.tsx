import { AppBar } from "@material-ui/core"
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles"
import router from "./Pages"
import { RouterProvider } from "react-router-dom"
import { ContactServiceContextProvider, useContactRepositoryLocalStorage } from "../logic/contactService"
import { generateArray } from "../../utils"
import { generateContact } from "../devUtils/dataGenerators"
import { getContacts, persistContacts } from "../logic/contactLocalStorage"
import { Toolbar } from "./Toolbar"


const theme = createTheme({
  palette: {
    primary: {
      light: "#78C9CE",
      main: "#2DA1AD",
      dark: "#2496A2",
    },
    secondary: {
      main: "#BBC4C3",
      light: "#E3E3E3",
    },
    text: {
      primary: "#BBC4C3",
      secondary: "#2DA1AD",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
})

const allContacts = getContacts() || generateArray(generateContact, 25, 50)

export const AppRoot = () => {
  const contactService = useContactRepositoryLocalStorage(allContacts)
  const persistContacts_ = () => contactService.getAll().then(persistContacts)

  return (
    <MuiThemeProvider theme={theme}>
      <ContactServiceContextProvider value={contactService}>
        <AppBar position="sticky">
          <Toolbar
            saveWork={(onComplete) => persistContacts_().then(onComplete)} />
        </AppBar>
        <RouterProvider router={router} />
      </ContactServiceContextProvider>
    </MuiThemeProvider>
  )
}
