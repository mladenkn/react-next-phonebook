import { GetServerSidePropsContext } from "next"
import apiSs from "~/api/api.ss"
import ContactEditBase from "~/contact/contact-edit"
import { asNonNil } from "~/utils"

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  if (typeof query.id !== "string") throw new Error()
  const contactId = parseInt(query.id)
  const contact = asNonNil(await apiSs.contact.single.fetch(contactId))
  return {
    props: { contact },
  }
}

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"]

export default function ContactEditPage({ contact }: Props) {
  return <ContactEditBase contact={contact} onSave={() => {}} onDelete={() => {}} />
}
