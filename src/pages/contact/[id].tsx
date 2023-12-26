import { GetServerSidePropsContext } from "next"
import apiSs from "~/api/api.ss"
import ContactDetailsPage from "~/contact/contact-details-page"

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  if (typeof query.id !== "string") throw new Error()
  const contactId = parseInt(query.id)
  await apiSs.contact.single.prefetch(contactId)
  return {
    props: {
      trpcState: apiSs.dehydrate(),
      contactId,
    },
  }
}

export default ContactDetailsPage
