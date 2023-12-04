import { createStyles, Theme } from "@material-ui/core"

export default ({ palette, breakpoints }: Theme) =>
  createStyles({
    rootLink: {
      "&:hover": {
        textDecoration: "none",
      },
    },
    action: {
      position: "absolute",
    },
    [breakpoints.down("sm")]: {
      avatarAndName: {
        paddingLeft: "3%",
      },
      action: {
        top: "33%",
      },
      favoriteAction: {
        right: "25%",
      },
      editAction: {
        right: "13%",
      },
      deleteAction: {
        top: "33%",
        right: "2%",
      },
      nameBox: {
        marginLeft: "5%",
        width: "50%",
      },
      icon: {
        fontSize: 21,
      },
      secondIcon: {
        marginLeft: "32%",
      },
      lastIcon: {
        marginLeft: "32%",
      },
    },
    [breakpoints.up("md")]: {
      avatarAndName: {
        paddingTop: "15%",
      },
      selected: {
        borderColor: palette.primary.main,
      },
      avatar: {
        order: 2,
        margin: "auto",
        marginBottom: 10,
        height: 50,
        width: 50,
      },
      nameBox: {
        order: 2,
      },
      action: {
        top: "5%",
      },
      favoriteAction: {
        left: "2%",
      },
      editAction: {
        right: "10%",
      },
      deleteAction: {
        top: "5%",
        right: "2%",
      },
      icon: {
        fontSize: 18,
      },
    },
  })
