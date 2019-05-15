import React from 'react';
import { ContactList } from './ui-components/ContactList';
import { generateArray, generateContact } from './devUtils/dataGenerators';
import { useEffect } from 'react';
import { getViewportDimensions } from './utils'
import { useState } from 'react';

const contacts = generateArray(generateContact, 5, 20)
    .map(({id, firstName, lastName, isFavorite, avatar}) => ({id, firstName, lastName, isFavorite, avatar}))

const App = () => {

    const getNextListType = (): 'vertical' | 'snake' => {
        const {width} = getViewportDimensions();
        return width < 570 ? 'vertical' : 'snake'
    }

    const [listType, setListType] = useState(getNextListType())

    useEffect(() => {
        window.addEventListener('resize', () => {
            setListType(getNextListType())   
        })
    })

    return (
        <div>
            <main>
                <ContactList contacts={contacts} type={listType} />
            </main>
        </div>
    );
}

export default App;
