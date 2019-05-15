import { createStyles, Theme } from "@material-ui/core"

const ifSm = '@media (min-width: 600px)';
const ifXs = '@media (max-width: 600px)';

export const contactAdderStyle = ({palette}: Theme) => createStyles({
    root: {
        display: 'inline-flex',
        padding: 0,
        '&:hover': {
            'background-color': 'inherit'
        },
        'text-transform': 'none',
        width: '100%',
        height: '100%',
        borderColor: palette.primary.light,
        borderStyle: 'dashed',
        borderWidth: 1,
        boxShadow: 'inherit',
    }, 
    card: {
        [ifSm]: {
            padding: 0,
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
            'text-align': 'center',
            color: palette.primary.light,
        },
        [ifXs]: {
            padding: '11px 12px !important'
        },
    },
    icon: {
        [ifSm]: {
            'font-size': 27,
        },
    },
    text: {        
        color: palette.primary.light
    }
})