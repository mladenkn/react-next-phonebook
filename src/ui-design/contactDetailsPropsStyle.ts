import { createStyles, Theme } from "@material-ui/core"

export const contactDetailsFieldsStyle = ({palette}: Theme) => createStyles({
    prop: {

    },
    propLabel: {
        width: 100,
        color: palette.primary.main
    },
    propLabelEmail: {
        marginRight: 15
    },
    propValue: {
        color: palette.secondary.main
    },
    propListValue: {

    },
    numberType: {
        color: palette.secondary.main,
        width: 100,
        textTransform: 'uppercase'
    },
    numberValue: {
        color: palette.secondary.main,       
    },
    icon: {
        width: 30
    }
})