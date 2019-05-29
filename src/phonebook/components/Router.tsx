import React from 'react';
import { Route } from "react-router-dom";
import { ContactIdRouteParams, WithContactService } from "../stateMgmt";
import HomePage from "./HomePage";
import ContactService from "../stateMgmt/ContactService";
import { Subtract } from 'utility-types';
import { ContactListProvider } from "../stateMgmt/ContactListProvider";
import { ContactEditProvider } from "../stateMgmt/ContactEditProvider";
import { ContactDetailsProvider } from "../stateMgmt/ContactDetailsProvider";

const contactService = new ContactService();

export function withContactService<TProps extends WithContactService>(Component: React.ComponentType<TProps>){
    return function (props: Subtract<TProps, WithContactService>) {
        return <Component contactService={contactService} {...props as TProps} />
    }
}

export default () => 
    <div>
        <Route exact path="/" component={() =>
            <ContactListProvider contactService={contactService}>
                <HomePage />
            </ContactListProvider>
        } />        
        {/* <Route path="/contact/edit/:contactId" component={() => 
            <ContactEditProvider>
            </ContactEditProvider>
        } />        
        <Route path="/contact/details/:contactId" component={withContactService(ContactDetailsPageContainer)} />       
        <Route path="/contact/create" component={withContactService(ContactCreatePageContainer)} /> */}
    </div>; 