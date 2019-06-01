import React, { useState, useEffect } from 'react';
import { AsyncOperationStatus } from '../../utils';
import { ContactListItem } from '../models';
import ContactService from './ContactService';
import { WithContactService } from ".";
import { WithChildren } from ".";

// This serves as both a default value and type definition
const defaultValue = {
    contacts: {} as {
        all: ContactListItem[],
        favorites: ContactListItem[]
    },
    fetchContactsStatus: 'NOT_INITIATED' as AsyncOperationStatus,

    fetch: (keyword: string) => {},
};

export const ContactListContext = React.createContext(defaultValue);

type Props = WithContactService & {children: JSX.Element | JSX.Element[]};

export const ContactListProvider = ({contactService, children}: Props) => {

    const [contacts, setContacts] = useState(defaultValue.contacts);
    const [fetchContactsStatus, setFetchContactsStatus] = useState(defaultValue.fetchContactsStatus);
    const [fetchedAlready, setFetchedAlready] = useState(false);

    const fetch = (keyword: string) => {
        setFetchContactsStatus('PROCESSING');
        contactService.search(keyword).then(
            c => {
                setContacts(c);
                setFetchContactsStatus('COMPLETED');
                setFetchedAlready(true);
            },
            error => setFetchContactsStatus('ERRORED')
        );
    };

    useEffect(() => {
        if(!fetchedAlready)
            fetch('');
    });

    const value = { contacts, fetchContactsStatus, fetch };

    return (
        <ContactListContext.Provider value={value}>
            {children}
        </ContactListContext.Provider>
    );
}
