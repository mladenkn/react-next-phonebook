import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({
    deleteButton: {
        marginLeft: '80%',
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
            width: 410,
            marginTop: 20
        },
    },
});