import { createStyles, Theme } from "@material-ui/core";

export default ({palette}: Theme) => createStyles({
    root: {
        marginLeft: '10%'
    },
    field: {   
        display: 'block',
        padding: '20px 0px',
    },
    fieldLabelEmail: {
    },
    fieldValue: {
        marginTop: 10,
        marginLeft: '10%',
    },
    fieldListValue: {
    },
    label: {
        width: 100,
        textTransform: 'uppercase'
    },
    numberValue: {   
        textDecoration: 'underline'
    },
})