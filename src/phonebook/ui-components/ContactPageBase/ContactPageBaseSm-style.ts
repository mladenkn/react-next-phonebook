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
        width: '100%',
    },
    headingContent: {
        width: '100%',
    },
    mainContent: {
        marginTop: 5,
    },
});
