import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({

    heading: {
        display: 'flex',
        borderBottom: `1px solid ${palette.primary.main}`,
    },
    action: {

    },
    icon: {

    },

    [breakpoints.only('xs')]: {
        root: {
        },
        toolbar: {
            padding: '10px 8px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: `1px solid ${palette.secondary.light}`,
        },
        body: {
            padding: '8px 15px',
        },
        heading: {
            padding: '10px 0px',
            alignItems: 'center',
        },
        avatar: {
            marginRight: '5%',
        },
        editorContainer: {
            padding: '0px, 10px',
        },
    },

    [breakpoints.up('sm')]: {
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
        avatar: {
            width: 150,
            height: 150,
        },
        editAction: {
            marginLeft: 20,
        },
        editorContainer: {
            marginTop: 20,
            marginLeft: 30,
        },
    },
    
    [breakpoints.up('md')]: {
        heading: {
            paddingBottom: 7,
        },
        editorContainer: {
            marginTop: 30,
            marginLeft: 40,
        },
    },
});
