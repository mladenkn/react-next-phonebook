import { createStyles, Theme } from "@material-ui/core"

export const homeStyle = ({palette}: Theme) => createStyles({
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
    },
})