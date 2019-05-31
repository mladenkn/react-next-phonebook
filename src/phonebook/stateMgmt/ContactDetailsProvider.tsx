import { WithContactService } from ".";
import React, { useState } from 'react';
import { Contact } from "../models";
import { OperationStatus, update } from "../../utils";

interface ContextValue {
    onFavorite: () => void
    contact?: Contact
    contactLoadStatus: OperationStatus
    favoriteContactStatus: OperationStatus
}

type Props = { contactId: number, children: (c: ContextValue) => (JSX.Element | JSX.Element[]) } & WithContactService;

export const ContactDetailsProvider = ({contactId, contactService, children}: Props) => {
    
    const [contactLoadStatus, setContactLoadStatus] = useState<OperationStatus>('NOT_INITIATED');
    const [favoriteContactStatus, setFavoriteContactStatus] = useState<OperationStatus>('NOT_INITIATED');
    const [contact, setContact] = useState<Contact | undefined>(undefined);
    const [fetchedAllReady, setFetchedAllready] = useState(false);

    if(!fetchedAllReady){
        setContactLoadStatus('PROCESSING');
        contactService.getById(contactId).then(
            c => {
                setContact(c);
                setContactLoadStatus('COMPLETED');
                setFetchedAllready(true);
            },
            error => setContactLoadStatus('ERRORED')
        );
    }

    const onFavorite = () => {
        setFavoriteContactStatus('PROCESSING');
        contactService.toggleFavorite(contactId).then(
            updatedContact => {
                setContact(updatedContact);
                setFavoriteContactStatus('COMPLETED');
            },
            error => setFavoriteContactStatus('ERRORED')
        );
    }

    const contextValue = {
        contactLoadStatus, contact, onFavorite, favoriteContactStatus
    }

    return <div>{children(contextValue)}</div>
}