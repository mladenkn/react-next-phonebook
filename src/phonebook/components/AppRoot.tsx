import React from "react";
import { AppBar } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Routes from "./Pages";
import { BrowserRouter } from "react-router-dom";
import { ContactService, ContactServiceContext } from "../logic/ContactService";
import { generateArray } from "../../utils";
import { generateContact } from "../devUtils/dataGenerators";
import { getContacts, persistContacts } from "../logic/contactLocalStorage";
import { Toolbar } from "./Toolbar";

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
});

const allContacts = getContacts() || generateArray(generateContact, 25, 50);
const contactService = new ContactService(allContacts);
const persistContacts_ = () => contactService.getAll().then(persistContacts);

export const AppRoot = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <ContactServiceContext.Provider value={contactService}>
        <AppBar position="sticky">
          <Toolbar
            saveWork={(onComplete) => persistContacts_().then(onComplete)}
          />
        </AppBar>
        <Routes />
      </ContactServiceContext.Provider>
    </BrowserRouter>
  </MuiThemeProvider>
);
