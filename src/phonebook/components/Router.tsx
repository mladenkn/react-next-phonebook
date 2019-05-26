import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { ContactEditPageContainer, ContactDetailsPageContainer, ContactCreatePageContainer, ContactIdRouteParams } from "../stateMgmt";
import HomePageContainer from "../stateMgmt/HomePageContainer";
import ContactService from "../stateMgmt/ContactService";
import { RouteComponentProps } from "react-router";

const contactService = new ContactService();

export default () => 
    <BrowserRouter>
        <Route exact path="/" component={
            (p: RouteComponentProps<ContactIdRouteParams> ) => <HomePageContainer {...p} contactService={contactService} />} 
        />
        
        <Route path="/contact/edit/:contactId" 
            component={(p: RouteComponentProps<ContactIdRouteParams>) => <ContactEditPageContainer {...p} contactService={contactService} />} 
        />
        
        <Route path="/contact/details/:contactId" component={
            (p: RouteComponentProps<ContactIdRouteParams>) => <ContactDetailsPageContainer {...p} contactService={contactService} />}
        />
       
        <Route path="/contact/create" component={
            (p: RouteComponentProps<ContactIdRouteParams>) => <ContactCreatePageContainer {...p} contactService={contactService} />}
        />
    </BrowserRouter>; 