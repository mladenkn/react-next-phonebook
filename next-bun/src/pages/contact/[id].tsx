import { GetServerSidePropsContext } from "next"
import contactsData from "~/contact/contact-data"
import ContactDetailsPage from "~/contact/contact-details-page"
import { asNonNil } from "~/utils"

export function getServerSideProps({ query }: GetServerSidePropsContext){
  if(typeof query.id !== "string")
    throw new Error ()
  const contactId = parseInt(query.id)
  const contact = asNonNil(contactsData.find(c => c.id == contactId))
  return {
    props: { contact }
  }
}

type Props = ReturnType<typeof getServerSideProps>["props"]

export default function ContactDetailsPageWrapper({ contact }: Props) {
  return <ContactDetailsPage  contact={contact} onFavorite={() => {}} />
}
