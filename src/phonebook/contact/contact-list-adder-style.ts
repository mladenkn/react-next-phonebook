import { createStyles, Theme } from "@material-ui/core"

export default ({ palette, breakpoints }: Theme) =>
  createStyles({
    content_: {
      textAlign: "center",
    },
    [breakpoints.down("sm")]: {
      content_: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginLeft: 20,
        width: 110,
      },
    },
  })
