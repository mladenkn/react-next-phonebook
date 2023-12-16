import { generateContact } from "~/contact/contact-data-generators";
import ContactListPage from "~/contact/contact-list-page";
import Toolbar from "~/toolbar";
import { generateArray } from "~/utils";
import { api } from "~/utils/api";
import { getBreakpointContainerStyle } from "~/utils/ui-utils";

export function getServerSideProps(){
  return {
    props: {
      contacts: generateArray(generateContact, 25, 50)
    }
  }
}

export default function Home({ contacts }: ReturnType<typeof getServerSideProps>["props"]) {
  return (
    <div className={getBreakpointContainerStyle("lg")}>
      <Toolbar />
      <ContactListPage className="mt-20 md:mt-24" data={contacts} />
    </div>
  )
}
