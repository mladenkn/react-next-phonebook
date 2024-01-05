import apiSs from "~/api/api.ss"
import ContactListPage from "~/contact/contact-list-page"

export async function getServerSideProps() {
  await apiSs.contact.list.prefetch({ search: "" })
  return {
    props: {
      trpcState: apiSs.dehydrate(),
    },
  }
}

export default ContactListPage
