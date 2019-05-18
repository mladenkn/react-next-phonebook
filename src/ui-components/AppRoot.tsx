import React from 'react';
import { generateArray, generateContact } from '../devUtils/dataGenerators';
import faker from 'faker';
import ContactDetails from './ContactDetails';
import { appRootStyle } from '../ui-design/appRoot';
import { withStyles, WithStyles, AppBar, Toolbar } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Home from "./Home"
import ContactEditSection from "./ContactEditSection"

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
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: 'Lato-Regular'
            }
        }
    }
});

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
            {/* <ContactEditSection contact={randomContact} />
            <div className={classes.contactDetailsContainer}>
                <ContactDetails contact={randomContact} />
            </div> */}
            <Home />
        </main>
    </div>
);
 
const AppContent = withStyles(appRootStyle)(AppContent_);

export default () => (
    <MuiThemeProvider theme={theme}>
        <AppContent />
    </MuiThemeProvider>
); 
