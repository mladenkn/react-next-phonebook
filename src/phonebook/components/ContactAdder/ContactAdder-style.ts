import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({
    root: {
        padding: 0,
        width: '100%',
        height: '100%',
        borderColor: palette.primary.light,
        borderStyle: 'dashed',
        borderWidth: 1,
        boxShadow: 'inherit',
    }, 
    icon: {
        color: palette.primary.light,
        fontSize: 27,
    },
    text: {    
        color: palette.primary.light,
        fontSize: '0.95rem'
    },
    [breakpoints.down('sm')]: {
        content_: { // doesn't compile with name 'content'
            display: 'flex',
            alignItems: 'center',
            marginLeft: -200,
            width: 110,
            justifyContent: 'space-around',
        },
    },
});
