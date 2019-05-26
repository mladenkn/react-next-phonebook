import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({

    root: {
        borderRadius: 10,
    },

    title: {
        borderBottom: `1px solid ${palette.secondary.main}`,
        marginBottom: 25,
        padding: '20px 20px 17px',
    },

    text: {
        color: palette.secondary.main,
    },

    actions: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '8px 10px 18px 10px',
    },

    button: {
        borderRadius: 40,
        width: 150,
        color: 'white'
    },

    [breakpoints.only('xs')]: {

    },
    
    [breakpoints.up('sm')]: {

    },
});
