import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({
    action: {

    },
    icon: {

    },
    avatar: {
        width: 200,
        height: 200,
    },

    actions: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'space-between',
        margin: '8px 2px 18px 2px',
    },

    button: {
        borderRadius: 40,
        width: 150,
        color: 'white'
    },

    [breakpoints.down('sm')]: {
        shallowRoot: {
            display: 'flex',
            justifyContent: 'center',
        },
        root: {
            width: '100%',
            maxWidth: 500,
        },
        heading: {
            justifyContent: 'center',
        },
        backAction: {
            marginLeft: '1%',
        },
        deleteAction: {
            marginLeft: '83%',
        },
        formAndButtons: {
            marginTop: 10,
        },
    },

    [breakpoints.up('md')]: {
        deleteAction: {
            marginLeft: 430,
        },
        formAndButtons: {
            marginTop: 20,
            marginLeft: 15
        },
        right_: {
            width: 500
        }
    },
});
