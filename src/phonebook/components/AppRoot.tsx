import { AppBar, colors } from "@material-ui/core"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import router from "./Pages"
import { RouterProvider } from "react-router-dom"
import { generateArray } from "../../utils"
import { generateContact } from "../devUtils/dataGenerators"
import { Toolbar } from "./Toolbar"
import {
  ContactServiceContextProvider,
  useContactRepositoryLocalStorage,
} from "../logic/contactsRepository"

const theme = createMuiTheme({
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
      primary: colors.grey[600],
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

const hasAnyContacts = Object.keys(localStorage).some(key => key.startsWith("contact-"))
if (!hasAnyContacts) {
  const generatedContacts = generateArray(generateContact, 25, 50)
  for (const contact of generatedContacts)
    localStorage[`contact-${contact.id}`] = JSON.stringify(contact)
}

export const AppRoot = () => {
  const contactService = useContactRepositoryLocalStorage()

  return (
    <MuiThemeProvider theme={theme}>
      <ContactServiceContextProvider value={contactService}>
        <AppBar position="sticky">
          <Toolbar />
        </AppBar>
        <RouterProvider router={router} />
      </ContactServiceContextProvider>
    </MuiThemeProvider>
  )
}
