import { createStyles, Theme } from "@material-ui/core"

export const contactDetailsFieldsStyle = ({palette}: Theme) => createStyles({
    prop: {

    },
    propLabel: {
        width: 100,
        color: palette.primary.main
    },
    propLabelEmail: {
        'margin-right': 15
    },
    propValue: {
        color: palette.secondary.main
    },
    propListValue: {

    },
    numberType: {
        color: palette.secondary.main
    },
    numberValue: {
        color: palette.secondary.main        
    },
    icon: {
        
    }
})