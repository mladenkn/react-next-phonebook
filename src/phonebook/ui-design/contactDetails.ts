import { createStyles, Theme } from "@material-ui/core"

export const contactDetailsStyle = ({palette}: Theme) => createStyles({
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
    contentHeadingName : {
        width: 380,
        fontSize: 20,
        // marginLeft: 40,
        // color: palette.secondary.main,
    },
    contentHeadingEditIcon : {
        // marginLeft: 71,
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    contentHeadingFavoriteIcon : {
        // marginLeft: 10,        
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    divider: {
        height: 1.2,
        backgroundColor: palette.primary.main
    },
    contentPropsContainer: {

    },
})