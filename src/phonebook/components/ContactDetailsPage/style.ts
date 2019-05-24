import { createStyles, Theme } from "@material-ui/core";

export default ({breakpoints}: Theme) => createStyles({
    heading: {
        marginBottom: 10,
        display: 'flex',
    },
    action: {
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
    backAction: {
        left: '1%',
    },
    mainContent: {
        marginTop: 5,
    },
    [breakpoints.only('xs')]: {
        favAction: {
            marginLeft: '74%',
        },
        editAction: {
            marginLeft: '3%',
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
    },
});
