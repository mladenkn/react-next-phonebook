import React from 'react';
import { Route } from "react-router-dom";
import { WithContactService, ContactIdRouteParams } from "../stateMgmt";
import HomePage from "./HomePage";
import { ContactListProvider } from "../stateMgmt/ContactListProvider";
import { ContactEditProvider } from "../stateMgmt/ContactEditProvider";
import { ContactDetailsProvider } from "../stateMgmt/ContactDetailsProvider";
import { RouteComponentProps } from "react-router";
import ContactDetailsPage from './ContactDetailsPage';

export default ({contactService}: WithContactService) => 
    <div>
        <Route exact path="/" component={() =>
            <ContactListProvider contactService={contactService}>
                <HomePage />
            </ContactListProvider>
        } />
        <Route path="/contact/edit/:contactId" component={({match}: RouteComponentProps<ContactIdRouteParams>) =>
            {
                const contactId = parseInt(match.params.contactId!)
                return <ContactEditProvider contactId={contactId} contactService={contactService}>
                    {() => <div>edit</div>}
                </ContactEditProvider>;
            }
        } />       
        <Route path="/contact/details/:contactId" component={({match}: RouteComponentProps<ContactIdRouteParams>) =>
            {
                const contactId = parseInt(match.params.contactId!)
                return <ContactDetailsProvider contactId={contactId} contactService={contactService}>
                    {({contact, contactStatus, onFavorite}) => 
                        contactStatus === 'FETCHED' ?
                            <ContactDetailsPage contact={contact!} onFavorite={onFavorite} /> :
                            <div>fetching</div> // doesn't make sense to handle this beacuse there is no real fetching
                    }
                </ContactDetailsProvider>;
            }
        } />       
        {/* <Route path="/contact/create" component={withContactService(ContactCreatePageContainer)} /> */}
    </div>;