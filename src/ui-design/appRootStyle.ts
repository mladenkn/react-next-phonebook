import { createStyles, Theme } from "@material-ui/core"

export const appRootStyle = ({palette}: Theme) => createStyles({
    toolbar: {
        backgroundImage: `linear-gradient(to right, ${palette.primary.dark}, ${palette.primary.light})`,
        minHeight: 40,        
    },
    toolbarBorder: {
        backgroundImage: `linear-gradient(to right, #70BBC3, #A0D8DC)`,
        height: 7  
    },
    headingText: {
        margin: '8px auto 10px auto',
        textTransform: 'uppercase'
    },
    main: {
        margin: '50px 10px 10px 10px'
    },
    contactDetailsContainer: {
        width: 700
    },
} )