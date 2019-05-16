import { createStyles, Theme } from "@material-ui/core"

export const homeStyle = ({palette}: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    contactTabs: {
        marginBottom: 20,
    },
    tabContainer: {
        alignItems: 'center'
    },
    contactTab: {
        textTransform: "capitalize",
        fontSize: '0.875rem',
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
        height: 1.2,
        backgroundColor: palette.primary.main,
        marginBottom: 20,
        width: '100%'
    },
    searchField: {
        width: 500,
        marginBottom: 25
    },
    list: {
        justifyContent: 'center'
    },
})