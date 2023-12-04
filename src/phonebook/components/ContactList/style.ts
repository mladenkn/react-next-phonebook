import { createStyles, Theme } from "@material-ui/core"

export default ({ breakpoints }: Theme) =>
  createStyles({
    [breakpoints.down("sm")]: {
      itemRoot: {
        height: 70,
        width: "100%",
        padding: "5px 0px",
      },
    },
    [breakpoints.up("md")]: {
      itemRoot: {
        width: 250,
        height: 140,
        padding: 5,
      },
    },
  })
