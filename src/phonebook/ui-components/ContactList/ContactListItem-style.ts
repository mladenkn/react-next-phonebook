import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({    
    root: {
        padding: 1,
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: palette.secondary.light,
        boxShadow: 'inherit',
    },
    name: {
        fontSize: '0.9rem',
        fontFamiliy: 'sans-serif',
    },
    icons: {
        display: 'flex',
    },
    iconButton: {
        padding: 0,
        '&:hover': {
            'background-color': 'inherit'
        },
    },
    cardContent: {
        display: 'flex',
    },
    [breakpoints.down('sm')]: {
        cardContent: {
            padding: '11px !important',
            alignItems: 'center',
        },
        container: {
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
        cardContent: {
            padding: '0px 5px !important',
            flexDirection: 'column',
        },
        adderCardContent: {
            position: 'absolute',
            top: '28%',
            left: '35%',
            textAlign: 'center'
        },
        selected: {
            borderColor: palette.primary.main
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
        icons: {
            order: 1,
            height: 28,
            marginBottom: 5,
        },
        icon: {
            fontSize: 18,
        },
        secondIcon: {
            marginLeft: '73%',
        },
        lastIcon: {
            marginLeft: '2%',
        },
    },
})