import { WithContactService } from ".";
import React, { useState, useEffect } from 'react';
import { Contact } from "../models";
import { AsyncOperationStatus, updateMatches, apiRequest, doAsyncOperation } from "../../utils";
import ContactService from "./ContactService";

export const useContactDetailsOps = (contactId: number, contactService: ContactService) => {
    
    const [fetchContactStatus, setFetchContactStatus] = useState<AsyncOperationStatus>('NEVER_INITIATED');
    const [favoriteContactStatus, setFavoriteContactStatus] = useState<AsyncOperationStatus>('NEVER_INITIATED');
    const [contact, setContact] = useState<Contact | undefined>(undefined);
    const [fetchedAllReady, setFetchedAlready] = useState(false);

    useEffect(() => {
        if(!fetchedAllReady){
            setFetchContactStatus('PROCESSING');
            contactService.getById(contactId).then(
                c => {
                    setContact(c);
                    setFetchContactStatus('COMPLETED');
                    setFetchedAlready(true);
                },
                error => setFetchContactStatus('ERRORED')
            );
        }
    });

    const favorite = () => {
        setFavoriteContactStatus('PROCESSING');
        contactService.toggleFavorite(contactId).then(
            updatedContact => {
                setContact(updatedContact);
                setFavoriteContactStatus('COMPLETED');
            },
            error => setFavoriteContactStatus('ERRORED')
        );
    }

    return {
        fetchContactStatus, contact, favorite, favoriteContactStatus
    }
}