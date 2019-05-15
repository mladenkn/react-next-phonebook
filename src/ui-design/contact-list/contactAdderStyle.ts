import { createStyles, Theme } from "@material-ui/core"

const ifSm = '@media (min-width: 600px)';
const ifXs = '@media (max-width: 600px)';

export const contactAdderStyle = (theme: Theme) => createStyles({
    button: {
        display: 'inline-flex',
        padding: 0,
        '&:hover': {
            'background-color': 'inherit'
        },
        'text-transform': 'none'
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
})