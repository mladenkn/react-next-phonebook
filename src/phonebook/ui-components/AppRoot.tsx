import React from 'react';
import { generateContact } from '../devUtils/dataGenerators';
import faker from 'faker';
import ContactDetailsPage from './contact-details/ContactDetailsPage';
import style from './AppRoot-style';
import { withStyles, WithStyles, AppBar, Toolbar } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import HomePage from "./HomePage";
import ContactEditPage from "./ContactEditPage";
import { generateArray } from "../../utils";

const contacts = generateArray(generateContact, 5, 20);
const randomContact = faker.random.arrayElement(contacts);

const secondaryThemeColor = purple[500]

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#78C9CE',
            main: '#2DA1AD',
            dark: '#2496A2'
        },
        secondary: {
            main: '#BBC4C3',
            light: '#E3E3E3',
            dark: 'rgba(0, 0, 0, 0.4000000059604645)'
        },
        text: {
            primary: '#BBC4C3',
            secondary: '#2DA1AD',
        },
    },
});

const AppContent_ = ({classes}: WithStyles<typeof style>) => (
    <div>
        <header>
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <h3 className={classes.headingText}>Phonebook</h3>
                </Toolbar>
                <div className={classes.toolbarBorder}></div>
            </AppBar>
        </header>
        <main className={classes.main}>
            {/* <ContactEditPage contact={randomContact} /> */}
            <ContactDetailsPage contact={randomContact} />
            {/* <HomePage /> */}
        </main>
    </div>
);
 
const AppContent = withStyles(style)(AppContent_);

export default () => (
    <MuiThemeProvider theme={theme}>
        <AppContent />
    </MuiThemeProvider>
); 
