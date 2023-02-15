import { createStyles, Theme } from "@material-ui/core"

export default ({ palette, breakpoints }: Theme) =>
  createStyles({
    root: {
      color: palette.secondary.main,
    },
    editAction: {
      display: "inline-flex",
      alignItems: "center",
    },
    action: {},
    icon: {},

    [breakpoints.only("xs")]: {
      personName: {
        fontSize: "1.5rem",
      },
      avatar: {
        marginLeft: "1%",
        marginRight: "5%",
        width: 70,
        height: 70,
      },
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
