import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const contactPageBaseXs = ({palette, breakpoints}: Theme) => createStyles({
    root: {
    },
    toolbar: {
        padding: '10px 8px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: `1px solid #E3E3E3`,        
    },
    body: {
        padding: '8px 25px 0px 15px',
    },
    heading: {
        display: 'flex',
        borderBottom: `1px solid #2DA1AD`,
        padding: '10px 0px',
        alignItems: 'center',
    },
});

export const useContactPageBaseStylesXs = makeStyles(contactPageBaseXs);