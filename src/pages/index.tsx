import apiSs from "~/api/api.ss"
import ContactListPage from "~/contact/contact-list-page"

export async function getServerSideProps() {
  return {
    props: {
      contacts: await apiSs.contact.list.fetch(),
    },
  }
}

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"]

export default function Home({ contacts }: Props) {
  return <ContactListPage data={contacts} />
}
