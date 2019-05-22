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
    rootMobile: {
        marginTop: 10,
        marginLeft: 9,
    },
    smMain: {
        margin: '15px 10px 0px 10px',
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
        footerButtons: {

        },
    },
    [breakpoints.up('xs')]: {
        footerButtons: {

        },
    },
});
