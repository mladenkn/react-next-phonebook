import React from 'react';
import { Route } from "react-router-dom";
import { WithContactService, ContactIdRouteParams } from "../stateMgmt";
import HomeSection from "./HomeSection";
import { ContactListProvider } from "../stateMgmt/ContactListProvider";
import { ContactEditProvider } from "../stateMgmt/ContactEditProvider";
import { ContactDetailsProvider } from "../stateMgmt/ContactDetailsProvider";
import { RouteComponentProps } from "react-router";
import ContactDetailsPage from './ContactDetailsPage';
import { useContactPageStyle, useHomePageStyle } from './pages-styles';

export default ({contactService}: WithContactService) => 
    <div>
        <Route exact path="/" component={() =>
            {
                const classes = useHomePageStyle();
                return <ContactListProvider contactService={contactService}>
                    <div className={classes.root}>
                        <HomeSection />
                    </div>
                </ContactListProvider>;
            }
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
                const contactId = parseInt(match.params.contactId!);
                const classes = useContactPageStyle();
                return (
                    <ContactDetailsProvider contactId={contactId} contactService={contactService}>
                        {({contact, contactLoadStatus: contactStatus, onFavorite}) => 
                            <div className={classes.root}>
                                {contactStatus === 'COMPLETED' ?
                                    <ContactDetailsPage contact={contact!} onFavorite={onFavorite} /> :
                                    <div>fetching</div> // doesn't make sense to handle this since there is no real fetching}
                                }
                            </div>
                        }               
                    </ContactDetailsProvider>
                );
            }
        } />       
        {/* <Route path="/contact/create" component={withContactService(ContactCreatePageContainer)} /> */}
    </div>;