import { createStyles, Theme } from "@material-ui/core"

export const contactDetailsStyle = ({palette}: Theme) => createStyles({
    avatar: {
        height: 160,
        width: 160,
    },
    content: {
        'margin-top': 50
    },
    contentHeading: {
        position: 'relative',
        'margin-bottom': 25,
    },
    contentHeadingContent: {
        'margin-bottom': 15
    },
    contentHeadingBackIcon : {
    },
    contentHeadingName : {
        display: 'inline-block',
        width: 200,
        'margin-left': 40,
        fontSize: 20,
        color: palette.secondary.main
    },
    contentHeadingFavoriteIcon : {
        'margin-left': 144,        
    },
    contentHeadingEditIcon : {
        'margin-left': 10
    },
    divider: {
        height: 1.2,
        'background-color': palette.primary.main
    },
    contentPropsContainer: {

    },
})