import React from "react";
import { RouteComponentProps } from "react-router";
import ContactEditPage from "../components/ContactEditPage";
import ContactDetailsPage from '../components/ContactDetailsPage';
import { Contact } from "../models";
import { DispatchContext } from "./DispatchContext";
import { AnyAction, saveContact, goBack } from "../actions";
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
({history}: RouteComponentProps<ContactIdRouteParams>) => {
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

export const ContactEditPageContainer = (contactList: Contact[]) =>
({history, match}: RouteComponentProps<ContactIdRouteParams>) => {   

    const contactId = parseInt(match.params.contactId!);
    const contact = contactList.find(c => c.id === contactId)!;
    
    const actionHandler = (a: AnyAction) => {
        switch(a.type){
            case getType(saveContact):
                console.log('handling favoriteContact');
            case getType(goBack):
                history.goBack();
        }
    }

    console.log('contact edit page');
    
    return (
        <DispatchContext.Provider value={actionHandler}>
            <ContactEditPage contact={contact} />
        </DispatchContext.Provider>
    );
}

export const ContactDetailsPageContainer = (contactList: Contact[]) =>
({history, match}: RouteComponentProps<ContactIdRouteParams>) => {

    const contactId = parseInt(match.params.contactId!);
    const contact = contactList.find(c => c.id === contactId)!;

    const actionHandler = (a: AnyAction) => {
        switch(a.type){
            case getType(goBack):
                history.goBack();
        }
    }

    return (
        <DispatchContext.Provider value={actionHandler}>
            <ContactDetailsPage contact={contact} />
        </DispatchContext.Provider>
    );
}