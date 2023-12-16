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
import Toolbar from "./toolbar"
import { getBreakpointContainerStyle } from "../utils/ui-utils"
import { useRouter } from 'next/router'

export interface ContactIdRouteParams {
  contactId?: string
}

const ContactListPage = () => {
  return (
    <div className={getBreakpointContainerStyle("lg")}>
      <Toolbar />
      <HomeSection className="mt-20 md:mt-24" />
    </div>
  )
}

const ContactDetailsPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const router = useRouter()
  const contactId = parseInt(params.contactId!)
  const ops = useContactDetailsOps(contactId, () => router.back(), navigate)

  return (
    <div className={getBreakpointContainerStyle("sm")}>
      <Toolbar />
      {ops.fetchStatus === "COMPLETED" ? (
        <ContactDetails
          className="mt-20 md:mt-24"
          contact={ops.contact!}
          onFavorite={ops.favorite}
        />
      ) : null}
    </div>
  )
}

const ContactCreatePage = () => {
  const navigate = useNavigate()
  const contactService = useContactServiceContext()
  return (
    <div className={getBreakpointContainerStyle("md")}>
      <Toolbar />
      <ContactEdit
        className="mt-20"
        onSave={c => contactService.save(c).then(() => navigate(-1))}
      />
    </div>
  )
}

const ContactEditPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const contactId = parseInt(params.contactId!)
  const ops = useContactDetailsOps(contactId, () => navigate(-1), navigate)
  return (
    <div className={getBreakpointContainerStyle("md")}>
      <Toolbar />
      {ops.fetchStatus === "COMPLETED" ? (
        <ContactEdit
          className="mt-20"
          contact={ops.contact!}
          onSave={ops.save}
          onDelete={ops.delete}
        />
      ) : null}
    </div>
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
