import Head from "next/head"
import { type AppType } from "next/app"
import { api } from "~/utils/api"
import "~/styles.css"
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#2DA1AD",
    },
    secondary: {
      main: "#BBC4C3",
    },
  },
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Head>
        <title>Phonebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </MuiThemeProvider>
  )
}

export default api.withTRPC(MyApp)
