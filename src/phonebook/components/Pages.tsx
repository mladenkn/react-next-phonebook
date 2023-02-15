import React from "react"
import HomeSection from "./HomeSection"
import { useContactDetailsOps } from "../logic/contactDetailsOps"
import ContactDetails from "./ContactDetails"
import { useContactPageStyle, useHomePageStyle } from "./pages-styles"
import { GoBackContextProvider } from "../logic/GoBackContext"
import ContactEdit from "./ContactEdit"
import { useContactService } from "../logic/ContactService"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route, useParams, useNavigate,
} from "react-router-dom";


export interface ContactIdRouteParams {
  contactId?: string
}

const ContactListPage = () => {
  const classes = useHomePageStyle()
  return (
    <div className={classes.root}>
      <HomeSection />
    </div>
  )
}

const ContactDetailsPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const contactId = parseInt(params.contactId!)
  const classes = useContactPageStyle()
  const ops = useContactDetailsOps(
    contactId,
    () => navigate(-1),
    navigate
  )
  return (
    <GoBackContextProvider value={() => navigate(-1)}>
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
    </GoBackContextProvider>
  )
}

const ContactCreatePage = () => {
  const navigate = useNavigate()
  const classes = useContactPageStyle()
  const contactService = useContactService()
  return (
    <GoBackContextProvider value={() => navigate(-1)}>
      <div className={classes.root}>
        <ContactEdit
          onSave={(c) => contactService.save(c).then(() => navigate(-1))}
        />
      </div>
    </GoBackContextProvider>
  )
}

const ContactEditPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const contactId = parseInt(params.contactId!)
  const classes = useContactPageStyle()
  const ops = useContactDetailsOps(
    contactId,
    () => navigate(-1),
    navigate
  )
  return (
    <GoBackContextProvider value={() => navigate(-1)}>
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
    </GoBackContextProvider>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<ContactListPage />}
      />
      <Route
        path="/contact/edit/:contactId"
        element={<ContactEditPage />}
      />
      <Route
        path="/contact/details/:contactId"
        element={<ContactDetailsPage />}
      />
      <Route
        path="/contact/create"
        element={<ContactCreatePage />}
      />
    </>
  ))

export default router
