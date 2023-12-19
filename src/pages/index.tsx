import contactsData from "~/contact/contact-data"
import ContactListPage from "~/contact/contact-list-page"
import { api } from "~/utils/api"

export function getServerSideProps() {
  return {
    props: {
      contacts: contactsData,
    },
  }
}

export default function Home({ contacts }: ReturnType<typeof getServerSideProps>["props"]) {
  return <ContactListPage data={contacts} />
}
