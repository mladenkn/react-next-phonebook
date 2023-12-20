import ContactListPage from "~/contact/contact-list-page"
import { contactApiList } from "~/contact/contact.api"
import { api } from "~/utils/api"

export async function getServerSideProps() {
  return {
    props: {
      contacts: await contactApiList(),
    },
  }
}

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"]

export default function Home({ contacts }: Props) {
  return <ContactListPage data={contacts} />
}
