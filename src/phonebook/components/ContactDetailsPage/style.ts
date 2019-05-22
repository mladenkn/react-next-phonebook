import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({
    heading: {
        position: 'relative',
        marginBottom: 10,
        display: 'flex',
    },
    button: {
        width: 24,
        height: 24,
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    headingName: {
        marginLeft: '8%',
        width: 350,
        fontSize: 20,
    },
    favButton: {
        position: 'absolute',
    },
    editButton: {
        position: 'absolute',
    },
    backButton: {
        left: '1%',
    },
    mainContent: {
        marginTop: 5,
    },
    [breakpoints.only('xs')]: {
        favButton: {
            right: '12%',
        },
        editButton: {
            right: '2%',
        },
        rootXs: {
            marginTop: 10,
        },
    },
    [breakpoints.up('sm')]: {        
        rootSm: {
            marginTop: 30,
            marginLeft: '12%',
        },
        favButton: {
            right: '9%',
        },
        editButton: {
            right: '0%',
        },
    },
});
