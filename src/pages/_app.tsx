import Head from "next/head"
import { type AppType } from "next/app"
import { api } from "~/utils/api"
import "~/styles.css"
import * as Toast from "@radix-ui/react-toast"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Toast.Provider swipeDirection="right">
      <Head>
        <title>Phonebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Toast.Provider>
  )
}

export default api.withTRPC(MyApp)
