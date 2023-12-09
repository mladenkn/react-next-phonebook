import { AppBar, colors } from "@material-ui/core"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import router from "./pages"
import { RouterProvider } from "react-router-dom"
import { Toolbar } from "./toolbar"
import {
  ContactServiceContextProvider,
  useContactRepositoryLocalStorage,
} from "../logic/contact-repository"
import { seedDataIfNeeded } from "../devUtils/localStorage"

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

seedDataIfNeeded()

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
