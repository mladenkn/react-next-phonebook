import React, { useState, useEffect } from 'react';
import { RequestStatus } from '../../utils';
import { Contact } from '../models';
import ContactService from './ContactService';
import { WithContactService } from ".";
import { WithManyChildren } from ".";

// This is both default value and type definition
const defaultValue = {
    contacts: {} as {
        all: Contact[],
        favorites: Contact[]
    },
    contactsStatus: 'NOT_FETCHED' as RequestStatus,

    fetch: (keyword: string) => {},
};

export const ContactListContext = React.createContext(defaultValue);

type Props = WithContactService & WithManyChildren

export const ContactListProvider = ({contactService, children}: Props) => {

    const [contacts, setContacts] = useState(defaultValue.contacts);
    const [contactsStatus, setContactsStatus] = useState(defaultValue.contactsStatus);
    const [fetchedAlready, setFetchedAlready] = useState(false);

    const fetch = (keyword: string) => {
        setContactsStatus('FETCHING');
        contactService.search(keyword).then(
            c => {
                setContacts(c);
                setContactsStatus('FETCHED');
                setFetchedAlready(true);
            }
        );
    };

    const value = { contacts, contactsStatus, fetch };

    useEffect(() => {
        if(!fetchedAlready)
            fetch('');
    });

    return (
        <ContactListContext.Provider value={value}>
            {children}
        </ContactListContext.Provider>
    );
}
