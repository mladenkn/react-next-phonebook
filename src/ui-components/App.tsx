import React from 'react';
import { ContactList } from './contact-list/ContactList';
import { generateArray, generateContact } from '../devUtils/dataGenerators';
import faker from 'faker';
import { ContactDetails } from './ContactDetails';
import { WithStyles, withStyles } from '../utils';
import { appStyle } from '../ui-design/app';

const contacts = generateArray(generateContact, 5, 20);
const randomContact = faker.random.arrayElement(contacts)

const App = ({classes}: WithStyles<typeof appStyle>) => (
    <div className={classes.root}>
        <main>
            {/* <ContactList contacts={contacts} includeAdder /> */}
            <div className={classes.contactDetailsContainer}>
                <ContactDetails contact={randomContact} />
            </div>            
        </main>
    </div>
);

export default withStyles(appStyle)<{}>(App)
