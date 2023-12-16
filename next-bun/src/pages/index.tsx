import { generateContact } from "~/contact/contact-data-generators";
import ContactListPage from "~/contact/contact-list-page";
import { generateArray } from "~/utils";
import { api } from "~/utils/api";

export function getServerSideProps(){
  return {
    props: {
      contacts: generateArray(generateContact, 25, 50)
    }
  }
}

export default function Home({ contacts }: ReturnType<typeof getServerSideProps>["props"]) {
  return <ContactListPage data={contacts} />
}
