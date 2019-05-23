import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import ContactEditPage from "../components/ContactEditPage";
import ContactDetailsPage from '../components/ContactDetailsPage';
import { generateArray } from "../../utils";
import { generateContact } from '../devUtils/dataGenerators';
import { RouteComponentProps } from "react-router";

const contactList = generateArray(generateContact, 5, 20);

export const Router = () => 
    <BrowserRouter>
        <Route exact path="/" component={ContactPageContainer} />
        <Route path="/contact-edit/:contactId" component={ContactEditPageContainer} />
        <Route path="/contact-details/:contactId" component={ContactDetailsPageContainer} />
        <Route path="/contact-create" component={() => <div>contact-create</div>} />
    </BrowserRouter>;

interface ContactIdRouteParams {
    contactId?: string
}

const ContactPageContainer = () => {
    return <HomePage contacts={contactList} />
}

const ContactEditPageContainer = ({history, match}: RouteComponentProps<ContactIdRouteParams>) => {
    const contactId = parseInt(match.params.contactId!);
    const contact = contactList.find(c => c.id === contactId)!;
    return <ContactEditPage contact={contact} onGoBack={history.goBack} />;
}

const ContactDetailsPageContainer = ({history, match}: RouteComponentProps<ContactIdRouteParams>) => {
    const contactId = parseInt(match.params.contactId!);
    const contact = contactList.find(c => c.id === contactId)!;
    return <ContactDetailsPage contact={contact} onGoBack={history.goBack} />;
} 