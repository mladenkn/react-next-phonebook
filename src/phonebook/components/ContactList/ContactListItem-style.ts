import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({    
    root: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    rootLink: {
        display: 'block',
        height: '100%',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    name: {
        fontSize: '0.9rem',
        fontFamiliy: 'sans-serif',
    },
    action: {
        position: 'absolute',
    },
    avatarAndName: {
        height: '100%',
        width: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: palette.secondary.light,
        boxShadow: 'inherit',
    },
    [breakpoints.down('sm')]: {
        root: {

        },
        avatarAndName: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '3%',
        },
        action: {
            top: '33%',
        },
        favoriteAction: {
            right: '25%',
        },
        editAction: {
            right: '13%',
        },
        deleteAction: {
            right: '2%',
        },
        avatar: {
            display: 'inline-block',
        },
        nameBox: {
            marginLeft: '5%',
            width: '50%',  
        },
        icon: {
            fontSize: 21,
        },
        secondIcon: {
            marginLeft: '32%',
        },
        lastIcon: {
            marginLeft: '32%',
        },
    },
    [breakpoints.up('md')]: {
        rootLink: {
            '&:hover': {
                textDecoration: 'none',
            },
        },
        avatarAndName: {
            paddingTop: '15%',
        },
        // adderCardContent: {
        //     position: 'absolute',
        //     top: '28%',
        //     left: '35%',
        //     textAlign: 'center'
        // },
        selected: {
            borderColor: palette.primary.main,
        },
        avatar: {
            order: 2,
            margin: 'auto',
            marginBottom: 10,
            height: 50,
            width: 50,
        },
        nameBox: {
            order: 2,            
        },
        name: {
            textAlign: 'center',
        },
        // icons: {
        //     padding: '0px 5px',
        //     top: '2%',
        //     width: '100%',
        //     height: 28,
        //     marginBottom: 5,
        // },
        action: {
            top: '5%',
        },
        favoriteAction: {
            left: '2%',
        },
        editAction: {
            right: '10%',
        },
        deleteAction: {
            right: '2%',
        },
        icon: {
            fontSize: 18,
        },
    },
})