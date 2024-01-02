import Head from "next/head"
import { type AppType } from "next/app"
import { api } from "~/utils/api"
import "~/styles.css"
import * as Toast from "@radix-ui/react-toast"
import { ToastViewport } from "~/utils/toast"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Toast.Provider swipeDirection="right">
      <Head>
        <title>Phonebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <ToastViewport />
    </Toast.Provider>
  )
}

export default api.withTRPC(MyApp)
