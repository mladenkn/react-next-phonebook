import { createStyles, Theme } from "@material-ui/core";

export const contactFieldLabelStyle = ({palette}: Theme) => createStyles({
    fieldLabel: {
        width: 100,
        color: palette.primary.main,
        display: 'flex',
    },
    fieldLabelIcon: {
        width: 30,
    },
    fieldLabelText: {
    },
});

export const dividerStyle = ({palette}: Theme) => createStyles({
    root: {
        height: 1.2,
        backgroundColor: palette.primary.main,
        width: '100%'
    }
}); 

export const textInputStyle = ({palette}: Theme) => createStyles({
    root: {
        border: `1px solid ${palette.secondary.light}`,
        borderRadius: 4,
        padding: `5px 7px`,
        '&:focus': {
            border: `1px solid ${palette.secondary.light}`
        },
        outline: 'none'
    },
})