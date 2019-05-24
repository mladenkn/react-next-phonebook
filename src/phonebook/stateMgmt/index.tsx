import React from "react";
import { RouteComponentProps } from "react-router";
import ContactEditPage from "../components/ContactEditPage";
import ContactDetailsPage from '../components/ContactDetailsPage';
import { Contact } from "../models";

interface ContactIdRouteParams {
    contactId?: string
}

export const ContactEditPageContainer = (contactList: Contact[]) => ({history, match}: RouteComponentProps<ContactIdRouteParams>) => {
    const contactId = parseInt(match.params.contactId!);
    const contact = contactList.find(c => c.id === contactId)!;
    return <ContactEditPage contact={contact} />;
}

export const ContactDetailsPageContainer = (contactList: Contact[]) => ({history, match}: RouteComponentProps<ContactIdRouteParams>) => {
    const contactId = parseInt(match.params.contactId!);
    const contact = contactList.find(c => c.id === contactId)!;
    return <ContactDetailsPage contact={contact} />;
}