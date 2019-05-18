import { createStyles, Theme } from "@material-ui/core";

export const homeStyle = ({palette}: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    contactTabs: {
        // marginBottom: 20,
    },
    tabContainer: {
        alignItems: 'center'
    },
    contactTab: {
        textTransform: "initial",
        fontSize: '0.875rem',
        color: palette.secondary.dark
    },
    tabDivider: {
        height: 20,
        width: 1.5,
        backgroundColor: palette.secondary.main
    },
    tabIndicator: {
        display: 'none'
    },
    selectedTab: {
        color: palette.primary.main
    },
    contactTabsDivider: {
        // marginBottom: 20,
    },
    searchField: {
        width: 400,
        height: 50,
        border: `1px solid ${palette.secondary.light}`,
        borderRadius: 4,
        padding: 10,
        fontSize: 'larger',     
        boxShadow: `0 0 15px ${palette.secondary.light}`,
    },
    searchFieldFocused: {
        boxShadow: `0 0 20px ${palette.secondary.main}`,
    },
    searchFieldIcon: {
        marginRight: 10
    },
    list: {
        justifyContent: 'center'
    },
})