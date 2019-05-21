import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({
    backButton: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    deleteButton: {
        marginLeft: '80%',
        textTransform: 'initial'
    },
    mainContent: {
        marginTop: 5,
    },
    content: {
        marginBottom: 10,
        display: 'flex',
    },
});
