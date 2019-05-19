import { createStyles, Theme } from "@material-ui/core"

const ifSm = '@media (min-width: 600px)';
const ifXs = '@media (max-width: 600px)';

export const contactListStyle = ({breakpoints}: Theme) => createStyles({
    root: {
        [ifSm]: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
        },
        [ifXs]: {
            width: '100%',
        }            
    },
    itemRoot: {
        [ifSm]: {
            width: 250,
            height: 140,
        },
        [ifXs]: {
            height: 70,
            width: '100%',
            padding: '5px 0px',
        },
    },
    [breakpoints.down('xs')]: {
    },
    [breakpoints.down('sm')]: {
    },
})