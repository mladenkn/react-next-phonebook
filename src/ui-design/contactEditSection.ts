import { createStyles, Theme } from "@material-ui/core"

export const contactEditSectionStyle = ({palette}: Theme) => createStyles({
    root: {
        margin: '0px 5px 20px 5px'
    },
    avatarContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    avatar: {
        width: 170,
        height: 170,
    },
    header: {
        display: 'flex',
        borderBottom: `1px solid ${palette.secondary.light}`,
        justifyContent: 'space-between',
        marginBottom: 15
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        width: 160,
        textTransform: 'none',
        color: 'white',
        borderRadius: 20
    },
    cancelButton: {
        backgroundColor: palette.secondary.main
    },
    saveButton: {
        backgroundColor: palette.primary.main
    },
}) 