import { createStyles, Theme } from "@material-ui/core"

const ifSm = '@media (min-width: 600px)';
const ifXs = '@media (max-width: 600px)';

export const contactListItemStyle = ({palette}: Theme) => createStyles({    
    card: {
        padding: 0,
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: palette.secondary.light,
        boxShadow: 'inherit',
    },
    selected: {
        borderColor: palette.primary.main
    },
    cardContent: {
        [ifSm]: {
            padding: '0px 5px !important'
        },
        [ifXs]: {
            padding: '11px 12px !important'
        },
    },
    adderCardContent: {
        [ifSm]: {
            position: 'absolute',
            top: '28%',
            left: '35%',
            textAlign: 'center'
        },
        [ifXs]: {
            
        },
    },
    container: {
        [ifXs]: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
    },
    avatar: {
        [ifSm]: {
            margin: 'auto',
            marginBottom: 10,
            height: 50,
            width: 50,
        },
        [ifXs]: {
            display: 'inline-block',
        },
    },
    name: {
        [ifSm]: {
            textAlign: 'center',
            fontWeight: 550,
            fontSize: '0.9rem',
            fontFamiliy: 'sans-serif',
        },
        [ifXs]: {
            display: 'inline-block',
        },
    },
    icons: {
        display: 'flex',
        [ifSm]: {
            height: 28,
            marginBottom: 5,
        },
    },
    iconButton: {
        padding: 0,
        '&:hover': {
            'background-color': 'inherit'
        },
        [ifSm]: {
            // padding: 0,
        },
        [ifXs]: {
            // display: 'inline-block',
        },
    },
    icon: {
        [ifSm]: {
            fontSize: 18,
        },
        [ifXs]: {
            fontSize: 21,
        },
    },
    firstIconsSpace: {
        [ifSm]: {
            width: 210,
        },
        [ifXs]: {
            width: 10,
        },        
    },
    secondIconsSpace: {
        width: 10,
    },
    nameBox: {
        [ifXs]: {
            marginLeft: 20,
            width: 180,
        },                
    },
})