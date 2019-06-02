import React, { useState, useEffect } from 'react';
import { Contact } from "../models";
import { AsyncOperationStatus, doAsyncOperation } from "../../utils";
import { useContactService } from "./ContactService";

export const useContactDetailsOps = (contactId: number) => {
    
    const [fetchStatus, setFetchStatus] = useState<AsyncOperationStatus>('NEVER_INITIATED');
    const [favoriteStatus, setFavoritetatus] = useState<AsyncOperationStatus>('NEVER_INITIATED');
    const [saveStatus, setSaveStatus] = useState<AsyncOperationStatus>('NEVER_INITIATED');
    const [deleteStatus, setDeleteStatus] = useState<AsyncOperationStatus>('NEVER_INITIATED');
    const [contact, setContact] = useState<Contact | undefined>(undefined);
    const [fetchedAlReady, setFetchedAlready] = useState(false);

    if(deleteStatus === 'COMPLETED'){

    }

    const contactService = useContactService();

    useEffect(() => {
        if(!fetchedAlReady)
            doAsyncOperation({
                do: contactService.getById(contactId),
                setStatus: setFetchStatus,
                setData: setContact,
                setExecutedAlready: setFetchedAlready
            });
    });

    const favorite = () => 
        doAsyncOperation({
            do: contactService.toggleFavorite(contactId),
            setStatus: setFavoritetatus,
            setData: setContact
        });

    const save = (updatedContact: Contact) =>
        doAsyncOperation({
            do: contactService.save(updatedContact),
            setStatus: setSaveStatus,
            setData: setContact
        });

    const delete_ = () => 
        doAsyncOperation({
            do: contactService.delete(contactId),
            setStatus: setDeleteStatus,
        });

    return {
        fetchStatus, contact, favorite, favoriteStatus, saveStatus, save, delete: delete_, deleteStatus
    }
}