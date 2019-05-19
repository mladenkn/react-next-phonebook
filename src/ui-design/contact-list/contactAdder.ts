import { createStyles, Theme } from "@material-ui/core"

const ifSm = '@media (min-width: 600px)';
const ifXs = '@media (max-width: 600px)';

export const contactAdderStyle = ({palette}: Theme) => createStyles({
    root: {
        padding: 0,
        width: '100%',
        height: '100%',
        borderColor: palette.primary.light,
        borderStyle: 'dashed',
        borderWidth: 1,
        boxShadow: 'inherit',
    }, 
    content: {
        [ifXs]: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: -200,
            width: 110,
            justifyContent: 'space-around',
            padding: '11px 0px !important',
        },
    },
    icon: {
        color: palette.primary.light,
        fontSize: 27,
    },
    text: {    
        color: palette.primary.light,
        fontSize: '0.95rem'
    }
})