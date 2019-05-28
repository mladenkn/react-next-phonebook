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
        margin: '8px 10px 18px 10px',
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
        root: {
            display: 'flex',
            paddingTop: 50,
            paddingLeft: 50,
        },
        smLeft: {
            display: 'inline-flex',
            flexDirection: 'column',
        },
        smRight: {
            marginTop: 50,
            display: 'inline-block',
            marginLeft: 20,
        },
        deleteAction: {
            marginLeft: 430,
        },
        formAndButtons: {
            marginTop: 20,
            marginLeft: 15
        },
    },
});
