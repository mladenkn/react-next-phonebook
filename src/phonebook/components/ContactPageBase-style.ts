import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const contactPageBaseXs = ({palette, breakpoints}: Theme) => createStyles({
    root: {
    },
    toolbar: {
        padding: '10px 8px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: `1px solid ${palette.secondary.main}`,    
    },
    heading: {
        display: 'flex',
        borderBottom: `1px solid ${palette.primary.main}`,
        padding: '10px 0px',
        alignItems: 'center',
    },
    body: {
        padding: '8px 25px 0px 15px',
    },
});

export const useContactPageBaseStylesXs = makeStyles(contactPageBaseXs);

const contactPageBaseSm = ({palette, breakpoints}: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    heading: {
        display: 'flex',
        borderBottom: `1px solid ${palette.primary.main}`,  
        paddingBottom: 10, 
    },
    smLeft: {
        display: 'inline-flex',
        flexDirection: 'column',
    },
    smRight: {
        marginTop: 50,
        display: 'inline-block',
        marginLeft: 20,
    },
});

export const useContactPageBaseStylesSm = makeStyles(contactPageBaseSm);