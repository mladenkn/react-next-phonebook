import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({
    iconButton: {
        width: 24,
        height: 24,
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    iconSpace: {
        marginLeft: 10,
    },
    headingName: {
        marginLeft: '8%',
        width: 350,
        fontSize: 20,
    },
    mainContent: {
        marginTop: 5,
    },
    content: {
        marginBottom: 10,
        display: 'flex',
    },
});
