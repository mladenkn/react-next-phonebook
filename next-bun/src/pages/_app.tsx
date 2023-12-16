import Head from "next/head";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
    <Head>
      <title>Phonebook</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
};

export default api.withTRPC(MyApp);
