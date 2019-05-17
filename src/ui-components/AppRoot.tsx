import React from 'react';
import { generateArray, generateContact } from '../devUtils/dataGenerators';
import faker from 'faker';
import ContactDetails from './ContactDetails';
import { appRootStyle } from '../ui-design/appRoot';
import { withStyles, WithStyles, AppBar, Toolbar, Typography } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Home from "./Home"

const contacts = generateArray(generateContact, 5, 20);
const randomContact = faker.random.arrayElement(contacts);

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#78C9CE',
            main: '#2DA1AD',
            dark: '#2496A2'
        },
        secondary: {
            main: '#BBC4C3',
            light: '#E3E3E3'
        },
    },
});

const AppProviders = ({children}: {children: JSX.Element}) => 
    <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>;

const AppContent_ = ({classes}: WithStyles<typeof appRootStyle>) => (
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
            {/* <div className={classes.contactDetailsContainer}>
                <ContactDetails contact={randomContact} />
            </div> */}
            <Home />
        </main>
    </div>
);

const AppContent = withStyles(appRootStyle)(AppContent_);

export default () => (
    <AppProviders>
        <AppContent />
    </AppProviders>
);
