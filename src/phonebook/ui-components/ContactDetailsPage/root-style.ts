import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({
    headingContent: {
        marginBottom: 10,
        display: 'flex',
    },
    headingBackIcon: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    headingName: {
        marginLeft: '5%',
        width: 340,
        fontSize: 20,
    },
    headingFavoriteIcon: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    headingEditIcon: {
        marginLeft: 10,
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
});
