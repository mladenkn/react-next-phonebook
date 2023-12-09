import HomeSection from "./contact/contact-list-page"
import { useContactDetailsOps } from "./contact/contact-details-ops"
import ContactDetails from "./contact/contact-details"
import { useHomePageStyle } from "./pages-styles"
import { GoBackContextProvider } from "./go-back-context"
import ContactEdit from "./contact/contact-edit"
import { useContactServiceContext } from "./contact/contact-repository"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom"
import { Container } from "@material-ui/core"

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
  const ops = useContactDetailsOps(contactId, () => navigate(-1), navigate)

  return (
    <GoBackContextProvider value={() => navigate(-1)}>
      {
        ops.fetchStatus === "COMPLETED" ? (
          <Container maxWidth="sm">
            <ContactDetails contact={ops.contact!} onFavorite={ops.favorite} />
          </Container>
        ) : null // doesn't make sense to handle this since there is no real fetching}
      }
    </GoBackContextProvider>
  )
}

const ContactCreatePage = () => {
  const navigate = useNavigate()
  const contactService = useContactServiceContext()
  return (
    <GoBackContextProvider value={() => navigate(-1)}>
      <ContactEdit onSave={c => contactService.save(c).then(() => navigate(-1))} />
    </GoBackContextProvider>
  )
}

const ContactEditPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const contactId = parseInt(params.contactId!)
  const ops = useContactDetailsOps(contactId, () => navigate(-1), navigate)
  return (
    <GoBackContextProvider value={() => navigate(-1)}>
      {
        ops.fetchStatus === "COMPLETED" ? (
          <ContactEdit contact={ops.contact!} onSave={ops.save} onDelete={ops.delete} />
        ) : null // doesn't make sense to handle this since there is no real fetching}
      }
    </GoBackContextProvider>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ContactListPage />} />
      <Route path="/contact/edit/:contactId" element={<ContactEditPage />} />
      <Route path="/contact/details/:contactId" element={<ContactDetailsPage />} />
      <Route path="/contact/create" element={<ContactCreatePage />} />
    </>,
  ),
)

export default router
