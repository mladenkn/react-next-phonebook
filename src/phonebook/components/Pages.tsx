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
import { GoBackContext } from '../stateMgmt/GoBackContext';
import ContactEditPage from './ContactEditPage';

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
      <Route path="/contact/edit/:contactId" component={({match, history}: RouteComponentProps<ContactIdRouteParams>) =>
        {
          const contactId = parseInt(match.params.contactId!);
          const classes = useContactPageStyle();
          return (
            <GoBackContext.Provider value={history.goBack}>
              <ContactEditProvider contactId={contactId} contactService={contactService}>
                {({onFinish, contact, fetchContactStatus, saveContactStatus}) => 
                  <div className={classes.root}>
                    {fetchContactStatus === 'COMPLETED' ?
                      <ContactEditPage contact={contact!} onFinish={onFinish} saveStatus={saveContactStatus} /> :
                      <div></div> // doesn't make sense to handle this since there is no real fetching}
                    }
                  </div>
                }   
              </ContactEditProvider>
            </GoBackContext.Provider>
          );
        }
      } />
      <Route path="/contact/details/:contactId" component={({match, history}: RouteComponentProps<ContactIdRouteParams>) =>
        {
          const contactId = parseInt(match.params.contactId!);
          const classes = useContactPageStyle();
          return (
            <GoBackContext.Provider value={history.goBack}>
              <ContactDetailsProvider contactId={contactId} contactService={contactService}>
                {({contact, fetchContactStatus: contactStatus, onFavorite}) => 
                  <div className={classes.root}>
                    {contactStatus === 'COMPLETED' ?
                      <ContactDetailsPage contact={contact!} onFavorite={onFavorite} /> :
                      <div></div> // doesn't make sense to handle this since there is no real fetching}
                    }
                  </div>
                }               
              </ContactDetailsProvider>
            </GoBackContext.Provider>
          );
        }
      } />       
      {/* <Route path="/contact/create" component={withContactService(ContactCreatePageContainer)} /> */}
    </div>;