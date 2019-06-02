import { useState, useEffect } from 'react';
import { Contact } from "../models";
import { AsyncOperationStatus, doAsyncOperation } from "../../utils";
import { useContactService } from "./ContactService";
import { homePageUrl } from '../urls';

export const useContactDetailsOps = (contactId: number, goBack: () => void, navigate: (url: string) => void) => {
    
    const [fetchStatus, setFetchStatus] = useState<AsyncOperationStatus>('NEVER_INITIATED');
    const [contact, setContact] = useState<Contact | undefined>(undefined);
    const [fetchedAlReady, setFetchedAlready] = useState(false);

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

    const favorite = () => contactService.toggleFavorite(contactId).then(setContact);

    const save = (updatedContact: Contact) => contactService.save(updatedContact).then(goBack);

    const delete_ = () =>  contactService.delete(contactId).then(() => navigate(homePageUrl));

    return {
        fetchStatus, contact, favorite, save, delete: delete_
    }
}