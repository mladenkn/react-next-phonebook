import React from "react";
import { RouteComponentProps } from "react-router";
import ContactEditPage from "../components/ContactEditPage";
import ContactDetailsPage from '../components/ContactDetailsPage';
import { Contact } from "../models";
import navigationActionHandler from "./navigationActionHandler";
import { DispatchContext } from "./DispatchContext";
import { AnyAction, saveContact } from "../actions";
import { getType } from "typesafe-actions";
import { compose } from "lodash/fp";

interface ContactIdRouteParams {
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

export const ContactCreatePageContainer = () => 
() => {
    return <ContactEditPage contact={emptyContact} />;
}

export const ContactEditPageContainer = (contactList: Contact[]) =>
({history, match}: RouteComponentProps<ContactIdRouteParams>) => {   

    const contactId = parseInt(match.params.contactId!);
    const contact = contactList.find(c => c.id === contactId)!;
    
    const pageActionHandler = (a: AnyAction) => {
        switch(a.type){
            case getType(saveContact):
                console.log('handling favoriteContact');
        }
    }

    const rootAh = compose(pageActionHandler, navigationActionHandler(history.goBack));
    
    return (
        <DispatchContext.Provider value={rootAh}>
            <ContactEditPage contact={contact} />
        </DispatchContext.Provider>
    );
}

export const ContactDetailsPageContainer = (contactList: Contact[]) =>
({history, match}: RouteComponentProps<ContactIdRouteParams>) => {

    const contactId = parseInt(match.params.contactId!);
    const contact = contactList.find(c => c.id === contactId)!;

    const rootAh = navigationActionHandler(history.goBack);

    return (
        <DispatchContext.Provider value={rootAh}>
            <ContactDetailsPage contact={contact} />
        </DispatchContext.Provider>
    );
}