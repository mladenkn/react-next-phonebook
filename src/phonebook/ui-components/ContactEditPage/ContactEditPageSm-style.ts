import { createStyles, Theme } from "@material-ui/core";

export default ({palette}: Theme) => createStyles({
    root: {
        width: 650,
    },
    avatar: {
        height: 160,
        width: 160,
    },
    content: {
        // marginTop: 50
    },
    contentHeading: {
        position: 'relative',
        // marginBottom: 25,
    },
    contentHeadingContent: {
        // marginBottom: 15,
        display: 'flex',
        alignItems: 'center'
    },
    contentHeadingBackIcon : {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    contentHeadingFavoriteIcon : {
        marginLeft: '80%',
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    contentHeadingEditIcon : {
        marginLeft: '4%',
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    divider: {
        height: 1.2,
        backgroundColor: palette.primary.main
    },
    editorContainer: {
        marginTop: 20
    },
});
