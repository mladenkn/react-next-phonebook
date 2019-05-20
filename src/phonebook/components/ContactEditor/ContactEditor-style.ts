import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({
    input: {
        paddingLeft: 20,
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
        padding: 6
    },
    // labelRemoverIcon2: {
    //     color: palette.secondary.light
    // },
    labelRemoverIcon: {
        height: 28,
        width: 28,
        borderRadius: 50,
        border: `2px solid ${palette.secondary.light}`,
        color: palette.secondary.light,
        display: 'inline-block',
        textAlign: 'center',
        paddingRight: 1,
        fontSize: 18
    },
    numberAdder: {
        color: palette.primary.main,
        textTransform: 'none'
    },
    field: {

    },
    divider: {
        // margin: '10px 0px'
    },
});
