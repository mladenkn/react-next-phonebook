import { createStyles, Theme } from "@material-ui/core"

export default ({ palette, breakpoints }: Theme) =>
  createStyles({
    root: {},
    content_: {
      // name content without _ causes compile time error
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: 1000,
    },
    tabContainer: {
      alignItems: "center",
    },
    contactTab: {
      textTransform: "initial",
      fontSize: "1.1rem",
      color: palette.text.primary,
      fontWeight: 600,
    },
    selectedTab: {
      color: palette.primary.main,
    },
    tabDivider: {
      height: 20,
      width: 1.5,
      backgroundColor: palette.secondary.main,
    },
    tabIndicator: {
      display: "none",
    },
    searchField: {
      height: 50,
      border: `1px solid ${palette.secondary.light}`,
      borderRadius: 4,
      padding: 10,
      fontSize: "larger",
      boxShadow: `0 0 15px ${palette.secondary.light}`,
    },
    searchFieldFocused: {
      boxShadow: `0 0 20px ${palette.secondary.main}`,
    },
    searchFieldIcon: {
      marginRight: 10,
    },
    [breakpoints.down("xs")]: {
      content_: {
        // name content without _ causes compile time error
        width: 330,
      },
      searchField: {
        marginTop: 20,
        width: 310,
      },
      contactTabsDivider: {
        marginTop: 6,
      },
      list: {
        marginTop: 10,
      },
    },
    [breakpoints.up("sm")]: {
      searchField: {
        marginTop: 40,
        width: 400,
      },
      contactTabsDivider: {
        marginTop: 25,
      },
      list: {
        marginTop: 25,
      },
    },
  })
