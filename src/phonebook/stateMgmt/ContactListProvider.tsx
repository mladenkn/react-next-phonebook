import { useState, useEffect } from 'react';
import { doAsyncOperation, replaceMatches } from '../../utils';
import { ContactListItem } from '../models';
import { useContactService } from './ContactService';
import { ContactListItemAction } from '../components/ContactList/ContactListItem';

interface Contacts {
    all: ContactListItem[],
    favorites: ContactListItem[]
}

/*
    Why not use a custom hook instead of doAsyncOperation?
    I tried, but I've had multiple requests which returned the same data, which caused bugs.
    It had also caused unnecessary rerenders because of the multiple variables, which had also caused bugs.
*/

export const useContactListOps = () => {

    const [contacts, setContacts] = useState<Contacts | undefined>(undefined);
    const [fetchContactsStatus, setFetchContactsStatus] = useState('NEVER_INITIATED');
    const [fetchedAlready, setFetchedAlready] = useState(false);

    const contactService = useContactService();

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
    
    const handleAction = ({type, contactId}: ContactListItemAction) => {

        if(type === 'TOGGLE_FAVORITE')
            contactService.toggleFavoriteListItem(contactId)
                .then(updatedContact => {
                    const all = replaceMatches(contacts!.all, c => c.id === contactId, updatedContact).allItems;                    
                    const favorites = replaceMatches(contacts!.favorites, c => c.id === contactId, updatedContact).allItems;
                    setContacts({all, favorites});
                });
                
        else if(type === 'DELETE')
            contactService.delete(contactId)
                .then(() => {
                    const all = contacts!.all.filter(c => c.id !== contactId);
                    const favorites = contacts!.all.filter(c => c.id !== contactId);
                    setContacts({all, favorites});
                });
    };

    return { contacts, fetchContactsStatus, fetch, handleAction };
}
