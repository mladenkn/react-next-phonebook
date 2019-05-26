import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import ContactEditPage from "../components/ContactEditPage";
import ContactDetailsPage from '../components/ContactDetailsPage';
import { Contact } from "../models";
import { DispatchContext } from "./DispatchContext";
import { AnyAction, saveContact, goBack, deleteContact } from "../actions";
import { getType } from "typesafe-actions";
import { compose } from "lodash/fp";
import ContactService from "./ContactService";

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

    const actionHandler = (a: AnyAction) => {
        switch(a.type){
            case getType(goBack):
                history.goBack();
        }
    }

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
    
    const actionHandler = (a: AnyAction) => {
        switch(a.type){
            case getType(saveContact):
                console.log('handling favoriteContact');
            case getType(goBack):
                history.goBack();
            case getType(deleteContact):
                contactService
                    .delete((a as any).payload.contactId)
                    .then(() => history.goBack());
        }
    }
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

    const actionHandler = (a: AnyAction) => {
        switch(a.type){
            case getType(goBack):
                history.goBack();
        }
    }

    const [contact, setContact] = useState<Contact | undefined>(undefined);
    contactService.getById(contactId).then(setContact);

    return (
        <DispatchContext.Provider value={actionHandler}>
            {contact && <ContactDetailsPage contact={contact} />}
        </DispatchContext.Provider>
    );
}