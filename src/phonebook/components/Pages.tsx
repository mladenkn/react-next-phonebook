import React from "react"
import { Route } from "react-router-dom"
import HomeSection from "./HomeSection"
import { useContactDetailsOps } from "../logic/contactDetailsOps"
import { RouteComponentProps } from "react-router"
import ContactDetails from "./ContactDetails"
import { useContactPageStyle, useHomePageStyle } from "./pages-styles"
import { GoBackContext } from "../logic/GoBackContext"
import ContactEdit from "./ContactEdit"
import { useContactService } from "../logic/ContactService"

export interface ContactIdRouteParams {
  contactId?: string
}

export default () => (
  <div>
    <Route
      exact
      path="/"
      component={() => {
        const classes = useHomePageStyle()
        return (
          <div className={classes.root}>
            <HomeSection />
          </div>
        )
      }}
    />
    <Route
      path="/contact/edit/:contactId"
      component={({
        match,
        history,
      }: RouteComponentProps<ContactIdRouteParams>) => {
        const contactId = parseInt(match.params.contactId!)
        const classes = useContactPageStyle()
        const ops = useContactDetailsOps(
          contactId,
          history.goBack,
          history.push
        )
        return (
          <GoBackContext.Provider value={history.goBack}>
            <div className={classes.root}>
              {
                ops.fetchStatus === "COMPLETED" ? (
                  <ContactEdit
                    contact={ops.contact!}
                    onSave={ops.save}
                    onDelete={ops.delete}
                  />
                ) : (
                  <div />
                ) // doesn't make sense to handle this since there is no real fetching}
              }
            </div>
          </GoBackContext.Provider>
        )
      }}
    />
    <Route
      path="/contact/details/:contactId"
      component={({
        match,
        history,
      }: RouteComponentProps<ContactIdRouteParams>) => {
        const contactId = parseInt(match.params.contactId!)
        const classes = useContactPageStyle()
        const ops = useContactDetailsOps(
          contactId,
          history.goBack,
          history.push
        )
        return (
          <GoBackContext.Provider value={history.goBack}>
            <div className={classes.root}>
              {
                ops.fetchStatus === "COMPLETED" ? (
                  <ContactDetails
                    contact={ops.contact!}
                    onFavorite={ops.favorite}
                  />
                ) : (
                  <div />
                ) // doesn't make sense to handle this since there is no real fetching}
              }
            </div>
          </GoBackContext.Provider>
        )
      }}
    />
    <Route
      path="/contact/create"
      component={({ history }: RouteComponentProps) => {
        const classes = useContactPageStyle()
        const contactService = useContactService()
        return (
          <GoBackContext.Provider value={history.goBack}>
            <div className={classes.root}>
              <ContactEdit
                onSave={(c) => contactService.save(c).then(history.goBack)}
              />
            </div>
          </GoBackContext.Provider>
        )
      }}
    />
  </div>
)
