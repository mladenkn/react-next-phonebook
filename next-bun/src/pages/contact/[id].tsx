import { useRouter } from 'next/router'
import contactsData from '~/contact/contact-data'
import ContactDetailsPage from '~/contact/contact-details-page'
import Toolbar from '~/toolbar'
import { asNonNil } from '~/utils'
import { getBreakpointContainerStyle } from '~/utils/ui-utils'


export default function ContactDetailsPageWrapper(){
  const router = useRouter()
  const contactId = router.query.id || 3
  const contact = asNonNil(contactsData.find(c => c.id == contactId))
  return <div className={getBreakpointContainerStyle("md")}>
    <Toolbar />
    <ContactDetailsPage className='mt-14 md:mt-24' contact={contact} onFavorite={() => {}} />
  </div>
}
