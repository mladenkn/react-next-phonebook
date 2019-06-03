import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const contactPageBaseXs = ({palette}: Theme) => createStyles({
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
        padding: '8px 15px 0px 15px',
    },
});

export const useContactPageBaseStylesXs = makeStyles(contactPageBaseXs, {name: 'ContactPageBaseXs'});

const contactPageBaseMd = ({palette,}: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    heading: {
        display: 'flex',
        borderBottom: `1px solid ${palette.primary.main}`,  
        paddingBottom: 7, 
    },
    left: {
        display: 'inline-flex',
        flexDirection: 'column',
    },
    right: {
        marginTop: 50,
        display: 'inline-block',
        marginLeft: 20,
    },
});

export const useContactPageBaseStylesMd = makeStyles(contactPageBaseMd, {name: 'ContactPageBaseMd'});