import React from 'react';
import { ContactList } from './contact-list/ContactList';
import { generateArray, generateContact } from '../devUtils/dataGenerators';
import faker from 'faker';
import { ContactDetails } from './ContactDetails';
import { WithStyles, withStyles } from '../utils';
import { appRootStyle } from '../ui-design/appRoot';

const contacts = generateArray(generateContact, 5, 20);
const randomContact = faker.random.arrayElement(contacts)

const AppRoot = ({classes}: WithStyles<typeof appRootStyle>) => (
    <div className={classes.root}>
        <main>
            {/* <ContactList contacts={contacts} includeAdder /> */}
            <div className={classes.contactDetailsContainer}>
                <ContactDetails contact={randomContact} />
            </div>            
        </main>
    </div>
);

export default withStyles(appRootStyle)<{}>(AppRoot)
