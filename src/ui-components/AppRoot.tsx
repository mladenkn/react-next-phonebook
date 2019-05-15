import React from 'react';
import { ContactList } from './contact-list/ContactList';
import { generateArray, generateContact } from '../devUtils/dataGenerators';
import faker from 'faker';
import { ContactDetails } from './ContactDetails';
import { appRootStyle } from '../ui-design/appRootStyle';
import { withStyles, WithStyles } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const contacts = generateArray(generateContact, 5, 20);
const randomContact = faker.random.arrayElement(contacts)

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2DA1AD',
        },
        secondary: {
            main: '#BBC4C3',
        },
    },
});

const AppRoot = ({classes}: WithStyles<typeof appRootStyle>) => (
    <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
            <main>
                <div className={classes.contactDetailsContainer}>
                    <ContactDetails contact={randomContact} />
                </div>
                <ContactList contacts={contacts} includeAdder />
            </main>
        </div>
    </MuiThemeProvider>
);

export default withStyles(appRootStyle)(AppRoot)
