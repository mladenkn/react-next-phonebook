import { WithContactService } from ".";
import React, { useState } from 'react';
import { Contact } from "../models";
import { RequestStatus } from "../../utils";

interface ContextValue {
    onFavorite: () => void
    contact?: Contact
    contactStatus: RequestStatus
}

type Props = { contactId: number, children: (c: ContextValue) => (JSX.Element | JSX.Element[]) } & WithContactService;

export const ContactDetailsProvider = ({contactId, contactService, children}: Props) => {
    
    const [contactStatus, setContactStatus] = useState<RequestStatus>('FETCHING');
    const [contact, setContact] = useState<Contact | undefined>(undefined);

    contactService.getById(contactId).then(
        c => {
            setContact(c);
            setContactStatus('FETCHED');
        }
    );

    const onFavorite = () => {}

    const contextValue = {
        contactStatus, contact, onFavorite
    }

    return <div>{children(contextValue)}</div>
}