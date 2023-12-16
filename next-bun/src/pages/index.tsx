import Head from "next/head";
import { generateContact } from "~/contact/contact-data-generators";
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

  return (
    <>
      <Head>
        <title>Phonebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <pre>
        {JSON.stringify(contacts, null, 2)}
      </pre>
    </>
  );
}
