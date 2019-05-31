import { WithContactService } from ".";
import React, { useState, useEffect } from 'react';
import { Contact } from "../models";
import { AsyncOperationStatus, update } from "../../utils";

interface ContextValue {
    contact?: Contact
    fetchContactStatus: AsyncOperationStatus
    favoriteContactStatus: AsyncOperationStatus
    
    onFavorite: () => void
}

type Props = { contactId: number, children: (c: ContextValue) => (JSX.Element | JSX.Element[]) } & WithContactService;

export const ContactDetailsProvider = ({contactId, contactService, children}: Props) => {
    
    const [fetchContactStatus, setFetchContactStatus] = useState<AsyncOperationStatus>('NOT_INITIATED');
    const [favoriteContactStatus, setFavoriteContactStatus] = useState<AsyncOperationStatus>('NOT_INITIATED');
    const [contact, setContact] = useState<Contact | undefined>(undefined);
    const [fetchedAllReady, setFetchedAllready] = useState(false);

    useEffect(() => {
        if(!fetchedAllReady){
            setFetchContactStatus('PROCESSING');
            contactService.getById(contactId).then(
                c => {
                    setContact(c);
                    setFetchContactStatus('COMPLETED');
                    setFetchedAllready(true);
                },
                error => setFetchContactStatus('ERRORED')
            );
        }
    });

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
        fetchContactStatus, contact, onFavorite, favoriteContactStatus
    }

    return <div>{children(contextValue)}</div>
}