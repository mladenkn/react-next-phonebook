import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const contactFieldLabelStyle = ({palette}: Theme) => createStyles({
    fieldLabel: {
        width: 100,
        color: palette.primary.main,
        display: 'flex',
        alignItems: 'flex-end',
    },
    fieldLabelIcon: {
        width: 30,
    },
    fieldLabelText: {
    },
});

export const toolbarStyle = ({palette}: Theme) => createStyles({
    toolbar: {
        backgroundImage: `linear-gradient(to right, ${palette.primary.dark}, ${palette.primary.light})`,
        minHeight: 40,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
    },
    toolbarBorder: {
        backgroundImage: `linear-gradient(to right, #70BBC3, #A0D8DC)`,
        height: 7  
    },
    headingLink: {
        margin: '10px 0px 10px 0px',
        color: 'white',
    },
    headingLinkText: {
        textTransform: 'uppercase',
        fontSize: '1.2rem',
    },
    saveWorkAction: {
        color: 'white',
        position: 'absolute',
        right: '5%'
    },
});

export const useToolbarStyle = makeStyles(toolbarStyle, {name: 'ToolbarStyle'});