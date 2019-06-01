import { WithContactService } from ".";
import React, { useState, useEffect } from 'react';
import { Contact } from "../models";
import { AsyncOperationStatus, doAsyncOperation } from "../../utils";
import ContactService from "./ContactService";

export const useContactDetailsOps = (contactId: number, contactService: ContactService) => {
    
    const [fetchContactStatus, setFetchContactStatus] = useState<AsyncOperationStatus>('NEVER_INITIATED');
    const [favoriteContactStatus, setFavoriteContactStatus] = useState<AsyncOperationStatus>('NEVER_INITIATED');
    const [saveContactStatus, setSaveContactStatus] = useState<AsyncOperationStatus>('NEVER_INITIATED');
    const [contact, setContact] = useState<Contact | undefined>(undefined);
    const [fetchedAllReady, setFetchedAlready] = useState(false);

    useEffect(() => {
        if(!fetchedAllReady){
            doAsyncOperation({
                do: contactService.getById(contactId),
                setStatus: setFetchContactStatus,
                setData: setContact,
                setExecutedAlready: setFetchedAlready
            });
        }
    });

    const favorite = () => {
        doAsyncOperation({
            do: contactService.toggleFavorite(contactId),
            setStatus: setFavoriteContactStatus,
            setData: setContact
        });
    }

    const save = (updatedContact: Contact) => {
        doAsyncOperation({
            do: contactService.save(updatedContact),
            setStatus: setSaveContactStatus,
            setData: setContact
        });
    }

    return {
        fetchContactStatus, contact, favorite, favoriteContactStatus, saveContactStatus, save,
    }
}