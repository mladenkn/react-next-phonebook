import { createStyles, Theme } from "@material-ui/core"

export default ({ palette, breakpoints }: Theme) =>
  createStyles({
    [breakpoints.down("sm")]: {
      shallowRoot: {
        display: "flex",
        justifyContent: "center",
      },
      root: {
        width: "100%",
        maxWidth: 500,
      },
      heading: {
        justifyContent: "center",
      },
      backAction: {
        marginLeft: "1%",
      },
      deleteAction: {
        marginLeft: "83%",
      },
      formAndButtons: {
        marginTop: 10,
      },
    },

    [breakpoints.up("md")]: {
      deleteAction: {
        marginLeft: "79.5%",
      },
      formAndButtons: {
        marginTop: "2%",
        marginLeft: "3%",
      },
    },
  })
