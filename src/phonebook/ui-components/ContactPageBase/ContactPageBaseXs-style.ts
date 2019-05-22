import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({
    toolbar: {
        width: '100%',
        borderBottom: `1px solid ${palette.secondary.light}`,
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    heading: {
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
    },
    headingText: {
        marginLeft: '5%',
    },
    avatar: {
        width: 150,
        height: 150,
    },
    avatarSmall: {
        width: 70,
        height: 70,
    },
    content: {
        padding: '0px 20px',
    },
});
