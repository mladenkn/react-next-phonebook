import { createStyles, Theme } from "@material-ui/core";

export const contactEditorStyle = ({palette}: Theme) => createStyles({
    input: {
        padding: 10,
    },
    fullWidth: {
        width: '100%'
    },
    phoneNumber: {
        paddingLeft: 0,
        paddingRight: 0,
        display: 'block'
    },
    phoneNumberLabel: {
        
    },
    labelRemoverContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelRemover: {
        padding: 0
    },
    labelRemoverIcon: {
        color: palette.secondary.light
    },
    field: {

    },
    divider: {
        // margin: '10px 0px'
    },
}); 