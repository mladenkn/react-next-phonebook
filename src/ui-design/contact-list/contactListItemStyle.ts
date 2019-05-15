const ifSm = '@media (min-width: 600px)';
const ifXs = '@media (max-width: 600px)';

export const contactListItemStyle = {    
    card: {
        [ifSm]: {
            padding: 0,
            width: 240,
            height: 113,
        },
        [ifXs]: {
            width: 310
        },
    },
    cardContent: {
        [ifSm]: {
            padding: '5px 5px !important'
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
            'text-align': 'center'
        },
        [ifXs]: {
            
        },
    },
    container: {
        [ifXs]: {
            display: 'flex',
            'flex-direction': 'row',
            'align-items': 'center',
            'justify-content': 'space-between'
        },
    },
    avatar: {
        [ifSm]: {
            margin: 'auto',
            'margin-bottom': 10,
        },
        [ifXs]: {
            display: 'inline-block',
        },
    },
    name: {
        [ifSm]: {
            'text-align': 'center'
        },
        [ifXs]: {
            display: 'inline-block',
        },
    },
    icons: {
        [ifSm]: {
            position: 'relative',
            height: 28,
            'margin-bottom': 5
        },
        [ifXs]: {
            display: 'inline-block',
        },
    },
    iconsLeft: {
        [ifSm]: {
            position: 'absolute'
        },
    },
    iconsRight: {
        [ifSm]: {
            position: 'absolute',
            right: 0
        },
    },
    iconButton: {
        [ifSm]: {
            padding: 0,
            '&:hover': {
                'background-color': 'inherit'
            },
        },
        [ifXs]: {
            display: 'inline-block',
        },
    },
    icon: {
        [ifSm]: {
            'font-size': 18
        },
        [ifXs]: {
            'font-size': 21
        },
    },
}