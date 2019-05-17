import { createStyles, Theme } from "@material-ui/core";

const inputBorder = (color: string) => `solid 1px ${color}`

export const contactEditorStyle = ({palette}: Theme) => createStyles({
    input: {
        '&:after': {
            border: inputBorder(palette.secondary.light),
        },
        '&:before': {
            border: inputBorder(palette.secondary.light),
        },
        border: inputBorder(palette.secondary.light),
        borderBottom: inputBorder(palette.secondary.light),
        borderRadius: 4,
        padding: `5px 10px`,
    },
    fullWidth: {
        width: '92%'
    },
    field: {

    },
    divider: {
        margin: '10px 0px'
    },
}); 