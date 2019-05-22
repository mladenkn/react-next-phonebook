import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({
    backButton: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    deleteButton: {
        marginLeft: '80%',
        textTransform: 'initial'
    },
    mainContent: {
        marginTop: 5,
    },
    heading: {
        marginBottom: 10,
        display: 'flex',
    },    
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    futterButton: {
        color: 'white',
        borderRadius: 50,
        width: 150,
    },
    [breakpoints.only('xs')]: {
        rootXs: {
            marginTop: 10,
            marginLeft: 9,
        },
    },
    [breakpoints.up('sm')]: {
        rootSm: {
            marginTop: 30,
            marginLeft: '15%',
        },
        editorRoot: {
            marginTop: 20
        },
    },
});
