import { createStyles, Theme } from "@material-ui/core"

export default ({palette}: Theme) => createStyles({
    toolbar: {
        display: 'flex',
        borderBottom: `1px solid ${palette.secondary.light}`,
        justifyContent: 'space-between',
        marginBottom: 15
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20
    },
    name: {
        marginLeft: '7%'
    },
    main: {
        margin: '0px 15px'
    },
});