import { GetServerSidePropsContext } from "next"
import contactsData from "~/contact/contact-data"
import ContactDetailsPage from "~/contact/contact-details-page"
import Toolbar from "~/toolbar"
import { asNonNil } from "~/utils"
import { getBreakpointContainerStyle } from "~/utils/ui-utils"

export function getServerSideProps({ query }: GetServerSidePropsContext){
  if(!query.id || typeof query.id !== "string")
    throw new Error ()
  const contactId = parseInt(query.id)
  const contact = asNonNil(contactsData.find(c => c.id == contactId))
  return {
    props: { contact }
  }
}

type Props = ReturnType<typeof getServerSideProps>["props"]

export default function ContactDetailsPageWrapper({contact}: Props) {
  return (
    <div className={getBreakpointContainerStyle("md")}>
      <Toolbar />
      <ContactDetailsPage className="mt-14 md:mt-24" contact={contact} onFavorite={() => {}} />
    </div>
  )
}
