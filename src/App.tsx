import React from 'react';
import { ContactList } from './ui-components/ContactList';
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
