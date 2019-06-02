import React from 'react';
import { Route } from "react-router-dom";
import { WithContactService, ContactIdRouteParams } from "../stateMgmt";
import HomeSection from "./HomeSection";
import { useContactDetailsOps } from "../stateMgmt/ContactDetailsProvider";
import { RouteComponentProps } from "react-router";
import ContactDetailsPage from './ContactDetailsPage';
import { useContactPageStyle, useHomePageStyle } from './pages-styles';
import { GoBackContext } from '../stateMgmt/GoBackContext';
import ContactEditPage from './ContactEditPage';

export default () => 
    <div>
      <Route exact path="/" component={() =>
        {
          const classes = useHomePageStyle();
          return <div className={classes.root}>
                <HomeSection />
            </div>
        }
      } />
      <Route path="/contact/edit/:contactId" component={({match, history}: RouteComponentProps<ContactIdRouteParams>) =>
        {
          const contactId = parseInt(match.params.contactId!);
          const classes = useContactPageStyle();
          const ops = useContactDetailsOps(contactId, history.goBack, history.push);
          return (
            <GoBackContext.Provider value={history.goBack}>
                <div className={classes.root}>
                {ops.fetchStatus === 'COMPLETED' ?
                    <ContactEditPage 
                        contact={ops.contact!}
                        onSave={ops.save}
                        onDelete={ops.delete}
                    /> :
                    <div /> // doesn't make sense to handle this since there is no real fetching}
                }
                </div> 
            </GoBackContext.Provider>
          );
        }
      } />
      <Route path="/contact/details/:contactId" component={({match, history}: RouteComponentProps<ContactIdRouteParams>) =>
        {
          const contactId = parseInt(match.params.contactId!);
          const classes = useContactPageStyle();
          const ops = useContactDetailsOps(contactId, history.goBack, history.push);
          return (
            <GoBackContext.Provider value={history.goBack}>
                <div className={classes.root}>
                    {ops.fetchStatus === 'COMPLETED' ?
                        <ContactDetailsPage contact={ops.contact!} onFavorite={ops.favorite} /> :
                        <div /> // doesn't make sense to handle this since there is no real fetching}
                    }
                </div>
            </GoBackContext.Provider>
          );
        }
      } />       
      {/* <Route path="/contact/create" component={withContactService(ContactCreatePageContainer)} /> */}
    </div>;