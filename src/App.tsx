import React from 'react';
import { ContactList } from './ui-components/ContactList';
import { generateArray, generateContact } from './devUtils/dataGenerators';

const contacts = generateArray(generateContact, 5, 20)
    .map(({id, firstName, lastName, isFavorite, avatar}) => ({id, firstName, lastName, isFavorite, avatar}))

const App = () => (
    <div>
      <main>
          <ContactList contacts={contacts} type='vertical' />
      </main>
    </div>
)

export default App;
