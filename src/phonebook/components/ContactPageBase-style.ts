import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const contactPageBaseXs = ({palette}: Theme) => createStyles({
    root: {
    },
    toolbar: {
        marginTop: 15,
        padding: '0px 8px 10px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: `1px solid ${palette.secondary.main}`,    
    },
    heading: {
        display: 'flex',
        borderBottom: `1px solid ${palette.primary.main}`,
        padding: '10px 0px 20px',
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
        width: 500,
        marginTop: 50,
        display: 'inline-block',
        marginLeft: 20,
    },
});

export const useContactPageBaseStylesMd = makeStyles(contactPageBaseMd, {name: 'ContactPageBaseMd'});