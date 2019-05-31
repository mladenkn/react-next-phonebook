import React, { useState, useEffect } from 'react';
import { OperationStatus } from '../../utils';
import { ContactListItem } from '../models';
import ContactService from './ContactService';
import { WithContactService } from ".";
import { WithManyChildren } from ".";

// This is both default value and type definition
const defaultValue = {
    contacts: {} as {
        all: ContactListItem[],
        favorites: ContactListItem[]
    },
    contactsLoadStatus: 'NOT_INITIATED' as OperationStatus,

    fetch: (keyword: string) => {},
};

export const ContactListContext = React.createContext(defaultValue);

type Props = WithContactService & WithManyChildren

export const ContactListProvider = ({contactService, children}: Props) => {

    const [contacts, setContacts] = useState(defaultValue.contacts);
    const [contactsLoadStatus, setContactsLoadStatus] = useState(defaultValue.contactsLoadStatus);
    const [fetchedAlready, setFetchedAlready] = useState(false);

    const fetch = (keyword: string) => {
        setContactsLoadStatus('PROCESSING');
        contactService.search(keyword).then(
            c => {
                setContacts(c);
                setContactsLoadStatus('COMPLETED');
                setFetchedAlready(true);
            },
            error => setContactsLoadStatus('ERRORED')
        );
    };

    useEffect(() => {
        if(!fetchedAlready)
            fetch('');
    });

    const value = { contacts, contactsLoadStatus, fetch };

    return (
        <ContactListContext.Provider value={value}>
            {children}
        </ContactListContext.Provider>
    );
}
