import { GetServerSidePropsContext } from "next"
import contactsData from "~/contact/contact-data"
import ContactDetailsPage from "~/contact/contact-details-page"
import Toolbar from "~/toolbar"
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
  return (
    <div className="md:container flex justify-center items-center">
      <Toolbar />
      <ContactDetailsPage className="mt-14 md:mt-24 sm-max:w-full px-3" contact={contact} onFavorite={() => {}} />
    </div>
  )
}
