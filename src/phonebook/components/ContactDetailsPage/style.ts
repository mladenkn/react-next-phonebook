import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({
    root: {
        color: palette.secondary.main,
    },
    editAction: {
        display: 'inline-flex',
        alignItems: 'center',
    },
    action: {

    },
    icon: {

    },

    [breakpoints.only('xs')]: {
        personName: {
            fontSize: 22,
        },
        avatar: {
            marginLeft: '1%',
            marginRight: '5%',
            width: 70,
            height: 70,
        }, 
        favAction: {
            marginLeft: '72%',
        },
        editAction: {
            marginLeft: '3%',
        },
        detailsContainer: {
            padding: '0px, 10px',
        },
    },

    [breakpoints.up('sm')]: {
        avatar: {
            width: 180,
            height: 180,
        },
        personName: {
            width: 220,
            marginLeft: 30,
            fontSize: 20,
        },
        editAction: {
            marginLeft: 20,
        },
        detailsContainer: {
            marginTop: 20,
            marginLeft: 30,
        },
    },
    
    [breakpoints.up('md')]: {
        heading: {
            paddingBottom: 7,
        },
        personName: {
            width: 400,
            marginLeft: 35,
            fontSize: 28,
        },
        detailsContainer: {
            marginTop: 30,
            marginLeft: 40,
        },
    },
});
