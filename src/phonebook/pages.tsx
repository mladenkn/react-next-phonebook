import HomeSection from "./contact/contact-list-page"
import { useContactDetailsOps } from "./contact/contact-details-ops"
import ContactDetails from "./contact/contact-details"
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
import Toolbar from "./toolbar"

export interface ContactIdRouteParams {
  contactId?: string
}

const ContactListPage = () => {
  return (
    <Container maxWidth="lg">
      <Toolbar />
      <HomeSection className="mt-20" />
    </Container>
  )
}

const ContactDetailsPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const contactId = parseInt(params.contactId!)
  const ops = useContactDetailsOps(contactId, () => navigate(-1), navigate)

  return (
    <Container maxWidth="sm">
      <Toolbar />
      {ops.fetchStatus === "COMPLETED" ? (
        <ContactDetails className="mt-20" contact={ops.contact!} onFavorite={ops.favorite} />
      ) : null}
    </Container>
  )
}

const ContactCreatePage = () => {
  const navigate = useNavigate()
  const contactService = useContactServiceContext()
  return (
    <Container maxWidth="md">
      <Toolbar />
      <ContactEdit
        className="mt-20"
        onSave={c => contactService.save(c).then(() => navigate(-1))}
      />
    </Container>
  )
}

const ContactEditPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const contactId = parseInt(params.contactId!)
  const ops = useContactDetailsOps(contactId, () => navigate(-1), navigate)
  return (
    <Container maxWidth="md">
      <Toolbar />
      {ops.fetchStatus === "COMPLETED" ? (
        <Container maxWidth="md">
          <ContactEdit
            className="mt-20"
            contact={ops.contact!}
            onSave={ops.save}
            onDelete={ops.delete}
          />
        </Container>
      ) : null}
    </Container>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ContactListPage />} />
      <Route path="/contact/edit/:contactId" element={<ContactEditPage />} />
      <Route path="/contact/:contactId" element={<ContactDetailsPage />} />
      <Route path="/contact/create" element={<ContactCreatePage />} />
    </>,
  ),
)

export default router
