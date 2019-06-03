import { createStyles, Theme } from "@material-ui/core";

export default ({breakpoints}: Theme) => createStyles({
    label: {
        width: 100,
        textTransform: 'uppercase'
    },
    numberValue: {   
        textDecoration: 'underline'
    },
    [breakpoints.down('xs')]: {
        root: {
            marginLeft: '10%'
        },
        field: {   
            display: 'block',
            padding: '20px 0px',
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
    },
    [breakpoints.up('sm')]: {
        labelContainer: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        },
    }
})