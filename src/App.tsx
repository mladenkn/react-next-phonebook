import React from 'react';
import { ContactList } from './ui-components/contact-list/ContactList';
import { generateArray, generateContact } from './devUtils/dataGenerators';

const contacts = generateArray(generateContact, 5, 20);

const App = () => (
    <div>
        <main>
            <ContactList contacts={contacts} includeAdder />
        </main>
    </div>
);

export default App;
