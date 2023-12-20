import apiSs from "~/api/api.ss"
import ContactListPage from "~/contact/contact-list-page"
import { contactApiList } from "~/contact/contact.api"

export async function getServerSideProps() {
  const a = await apiSs.example.hello.fetch({text: "sdfsdf"})
  console.log(8, a)
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
