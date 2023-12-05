import { createStyles, Theme } from "@material-ui/core"

export default ({ breakpoints }: Theme) =>
  createStyles({
    [breakpoints.only("xs")]: {
      favAction: {
        marginLeft: "75%",
      },
      editAction: {
        marginLeft: "3%",
      },
    },

    [breakpoints.up("sm")]: {
      avatar: {
        width: 180,
        height: 180,
      },
      personName: {
        width: "76%",
        marginLeft: "9%",
        fontSize: "1.5rem",
      },
      editAction: {
        marginLeft: "3%",
      },
      detailsContainer: {
        marginTop: "6%",
        marginLeft: "9%",
      },
    },
  })
