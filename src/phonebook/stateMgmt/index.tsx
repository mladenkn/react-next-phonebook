import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import ContactEditPage from "../components/ContactEditPage";
import ContactDetailsPage from '../components/ContactDetailsPage';
import { Contact } from "../models";
import { DispatchContext } from "./DispatchContext";
import { saveContact, goBack, deleteContact } from "../actions";
import { getType } from "typesafe-actions";
import { compose } from "lodash/fp";
import ContactService from "./ContactService";
import { buildActionHandler, handle } from "../../utils";

export interface WithContactService { contactService: ContactService };

export interface ContactIdRouteParams {
    contactId?: string
}

const emptyContact: Contact = {
    id: 0,
    fullName: '',
    avatar: '',
    email: '',
    numbers: [],
    isFavorite: false
}

export const ContactCreatePageContainer = 
({history, contactService}: RouteComponentProps<ContactIdRouteParams> & WithContactService) => {

    const actionHandler = buildActionHandler([
        handle(goBack, history.goBack),
    ]);

    return (
        <DispatchContext.Provider value={actionHandler}>
             <ContactEditPage contact={emptyContact} />
        </DispatchContext.Provider>
    );
}

export const ContactEditPageContainer = 
({history, match, contactService}: RouteComponentProps<ContactIdRouteParams> & WithContactService) => {   

    const contactId = parseInt(match.params.contactId!);

    const [contact, setContact] = useState<Contact | undefined>(undefined);

    const actionHandler = buildActionHandler([
        handle(goBack, history.goBack),
        handle(saveContact, contact => {
            return console.log('handling saveContact', contact);
        }),
        handle(deleteContact, (contactId) => {
            contactService
                .delete(contactId)
                .then(() => history.goBack());
        }),
    ]);

    contactService.getById(contactId).then(setContact);
    
    return (
        <DispatchContext.Provider value={actionHandler}>
            {contact && <ContactEditPage contact={contact} />}
        </DispatchContext.Provider>
    );
}

export const ContactDetailsPageContainer =
({history, match, contactService}: RouteComponentProps<ContactIdRouteParams> & WithContactService) => {

    const contactId = parseInt(match.params.contactId!);

    const actionHandler = buildActionHandler([
        handle(goBack, history.goBack),
    ]);

    const [contact, setContact] = useState<Contact | undefined>(undefined);
    contactService.getById(contactId).then(setContact);

    return (
        <DispatchContext.Provider value={actionHandler}>
            {contact && <ContactDetailsPage contact={contact} />}
        </DispatchContext.Provider>
    );
}