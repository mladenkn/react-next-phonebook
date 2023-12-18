import { useRouter } from 'next/router'
import contactsData from '~/contact/contact-data'
import { asNonNil } from '~/utils'


export default function ContactDetailsPageWrapper(){
  const router = useRouter()
  const contactId = router.query.id as any
  console.log("log", contactId)
  const contact = contactsData.find(c => c.id == contactId)
  console.log(10, contact)
  return "ContactDetailsPageWrapper / " + contactId
}
