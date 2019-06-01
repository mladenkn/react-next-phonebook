import React, { useState, useEffect } from 'react';
import { AsyncOperationStatus, doAsyncOperation } from '../../utils';
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
    fetchContactsStatus: 'NEVER_INITIATED' as AsyncOperationStatus,

    fetch: (keyword: string) => {},
};

export const ContactListContext = React.createContext(defaultValue);

type Props = WithContactService & {children: JSX.Element | JSX.Element[]};

/*
    Why not use a custom hook instead of doAsyncOperation?
    I tried, but I've had multiple requests which returned the same data, which caused bugs.
    It had also caused unnecessary rerenders because of the multiple variables, which had also caused bugs.
*/

export const ContactListProvider = ({contactService, children}: Props) => {

    const [contacts, setContacts] = useState(defaultValue.contacts);
    const [fetchContactsStatus, setFetchContactsStatus] = useState(defaultValue.fetchContactsStatus);
    const [fetchedAlready, setFetchedAlready] = useState(false);

    const fetch = (keyword: string) => {
        doAsyncOperation({
            do: contactService.search(keyword),
            setStatus: setFetchContactsStatus,
            setData: setContacts,
            setExecutedAlready: setFetchedAlready
        });
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
