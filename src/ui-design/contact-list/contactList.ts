import { createStyles, Theme } from "@material-ui/core"

export const contactListStyle = ({breakpoints}: Theme) => createStyles({
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
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
        },
        itemRoot: {
            width: 250,
            height: 140,
        },
    },
})