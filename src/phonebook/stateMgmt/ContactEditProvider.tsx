import { WithContactService } from ".";
import React, { useState, useEffect } from 'react';
import { Contact } from "../models";
import { AsyncOperationStatus } from "../../utils";

interface ContextValue {
    contact?: Contact
    fetchContactStatus: AsyncOperationStatus
    saveContactStatus: AsyncOperationStatus
    
    onFinish: (c: Contact) => void
}

type Props = { contactId: number, children: (c: ContextValue) => (JSX.Element | JSX.Element[]) } & WithContactService;

export const ContactEditProvider = ({contactId, contactService, children}: Props) => {
    
    const [contact, setContact] = useState<Contact | undefined>(undefined);
    const [fetchContactStatus, setFetchContactStatus] = useState<AsyncOperationStatus>('NOT_INITIATED');
    const [saveContactStatus, setSaveContactStatus] = useState<AsyncOperationStatus>('NOT_INITIATED');
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

    const onFinish = (editedContact: Contact) => {
        setSaveContactStatus('PROCESSING');
        contactService.save(editedContact).then(
            contactFromServer => {
                setContact(contactFromServer);
                setSaveContactStatus('COMPLETED');
            },
            error => setFetchContactStatus('ERRORED')
        );
    }

    const contextValue = {
        contact, fetchContactStatus, saveContactStatus, onFinish
    };


    return <div>{children(contextValue)}</div>
}