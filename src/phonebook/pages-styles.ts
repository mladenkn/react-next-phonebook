import { createStyles, Theme, makeStyles } from "@material-ui/core"

const homePageStyle = ({ breakpoints }: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
    [breakpoints.up("xs")]: {
      root: {
        marginTop: 7,
      },
    },
    [breakpoints.up("sm")]: {
      root: {
        marginTop: 20,
      },
    },
  })

export const useHomePageStyle = makeStyles(homePageStyle, {
  name: "HomePageStyle",
})
