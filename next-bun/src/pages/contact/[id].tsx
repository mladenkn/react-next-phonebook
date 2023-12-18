import { useRouter } from 'next/router'
import contactsData from '~/contact/contact-data'
import ContactDetailsPage from '~/contact/contact-details-page'
import { asNonNil } from '~/utils'


export default function ContactDetailsPageWrapper(){
  const router = useRouter()
  const contactId = router.query.id as any
  const contact = asNonNil(contactsData.find(c => c.id == contactId))
  return <ContactDetailsPage contact={contact} onFavorite={() => {}} />
}
