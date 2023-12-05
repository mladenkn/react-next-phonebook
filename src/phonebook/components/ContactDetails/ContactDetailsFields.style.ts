import { createStyles, Theme } from "@material-ui/core"

export default ({ breakpoints }: Theme) =>
  createStyles({
    [breakpoints.down("xs")]: {
      root: {
        marginLeft: "10%",
      },
      field: {
        display: "block",
        padding: "20px 0px",
      },
      fieldValue: {
        marginTop: 10,
        marginLeft: "10%",
      },
      fieldListValue: {},
    },
    [breakpoints.up("sm")]: {
      field: {
        display: "flex",
        padding: "10px 0px",
      },
      labelContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: 120,
      },
    },
  })
