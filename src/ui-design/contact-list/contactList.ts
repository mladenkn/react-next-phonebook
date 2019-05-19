import { createStyles, Theme } from "@material-ui/core"

export const contactListStyle = ({breakpoints}: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    [breakpoints.down('xs')]: {
        root: {
            width: '100%',
        },
        itemRoot: {
            height: 70,
            width: '100%',
            padding: '5px 0px',
        },
    },
    [breakpoints.up('sm')]: {
        root: {
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        itemRoot: {
            padding: '11px 7px',
            width: 220,
            height: 140,
        },
    },
    [breakpoints.up('md')]: {
        itemRoot: {
            width: 250,
            height: 140,
        },
    },
})