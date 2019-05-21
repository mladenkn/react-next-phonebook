import { createStyles, Theme } from "@material-ui/core";

export default ({palette}: Theme) => createStyles({
    root: {
        width: 650,
    },
    avatar: {
        height: 160,
        width: 160,
    },
    heading: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 60,
        borderBottom: `1px solid ${palette.primary.main}`,
    },
    headingContent: {
        marginBottom: 10,
        display: 'flex',
    },
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
});
