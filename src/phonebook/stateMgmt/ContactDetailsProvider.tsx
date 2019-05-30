import { WithContactService } from ".";
import React, { useState } from 'react';
import { Contact } from "../models";
import { DataFetchStatus, update } from "../../utils";

interface ContextValue {
    onFavorite: () => void
    contact?: Contact
    contactStatus: DataFetchStatus
}

type Props = { contactId: number, children: (c: ContextValue) => (JSX.Element | JSX.Element[]) } & WithContactService;

export const ContactDetailsProvider = ({contactId, contactService, children}: Props) => {
    
    const [contactStatus, setContactStatus] = useState<DataFetchStatus>('FETCHING');
    const [contact, setContact] = useState<Contact | undefined>(undefined);
    const [fetchedAllReady, setFetchedAllready] = useState(false);

    if(!fetchedAllReady)
        contactService.getById(contactId).then(
            c => {
                setContact(c);
                setContactStatus('FETCHED');
                setFetchedAllready(true);
            }
        );

    const onFavorite = () => {
        contactService.toggleFavorite(contactId).then(
            updatedContact => {
                setContact(updatedContact);
            }
        );
    }

    const contextValue = {
        contactStatus, contact, onFavorite
    }

    return <div>{children(contextValue)}</div>
}