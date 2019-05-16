import { createStyles, Theme } from "@material-ui/core"

export const appRootStyle = ({palette}: Theme) => createStyles({
    toolbar: {
        backgroundImage: `linear-gradient(to right, ${palette.primary.dark}, ${palette.primary.light})`,
        minHeight: 40
    },
    headingText: {
        margin: '8px auto 10px auto',
        textTransform: 'uppercase'
    },
    main: {
        margin: 10
    },
    contactDetailsContainer: {
        width: 700
    },
} )