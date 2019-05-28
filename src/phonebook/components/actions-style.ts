import { createStyles } from "@material-ui/core";

export const goToEditActionStyle = createStyles({
    root: {
        '&:hover': {
            textDecoration: 'none',
        },
    },
});

export const favoriteActionStyle = createStyles({
    root: {
        padding: 0,
        '&:hover': {
            'background-color': 'inherit'
        },
    },
});

export const deleteActionStyle = createStyles({
    button: {
        padding: 0,
        '&:hover': {
            'background-color': 'inherit'
        },
    },
    text: {
        marginRight: 10,
    },
});

export const goBackStyle = createStyles({
    root: {
        padding: 0,
        '&:hover': {
            'background-color': 'inherit'
        },
    },
});