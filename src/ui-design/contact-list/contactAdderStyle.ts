const ifSm = '@media (min-width: 600px)';
const ifXs = '@media (max-width: 600px)';

export const contactAdderStyle = {
    button: {
        display: 'inline-flex',
        '&:hover': {
            'background-color': 'inherit'
        }    
    },
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
            padding: '5px 5px !important',
            position: 'absolute',
            top: '28%',
            left: '35%',
            'text-align': 'center'
        },
        [ifXs]: {
            padding: '11px 12px !important'
        },
    },
    icon: {
        [ifSm]: {
            'font-size': 20,
        },  

    } 
}