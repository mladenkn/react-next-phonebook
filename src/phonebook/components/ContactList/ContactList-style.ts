import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    [breakpoints.down('sm')]: {
        root: {
            width: '100%',
            flexDirection: 'column'
        },
        itemRoot: {
            height: 70,
            width: '100%',
            padding: '5px 0px',
        },
    },
    [breakpoints.only('sm')]: {
        root: {
            width: 400
        },
    },
    [breakpoints.up('md')]: {
        root: {
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        itemRoot: {
            width: 250,
            height: 140,
            padding: 10
        },
    },
});
