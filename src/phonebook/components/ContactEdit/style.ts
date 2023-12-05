import { createStyles, Theme } from "@material-ui/core"

export default ({ breakpoints }: Theme) =>
  createStyles({
    [breakpoints.down("sm")]: {
      backAction: {
        marginLeft: "1%",
      },
      deleteAction: {
        marginLeft: "83%",
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
