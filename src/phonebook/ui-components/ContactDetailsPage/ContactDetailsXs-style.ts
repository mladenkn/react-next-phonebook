import { createStyles, Theme } from "@material-ui/core"

export default ({palette}: Theme) => createStyles({
    toolbar: {
        display: 'flex',
        borderBottom: `1px solid ${palette.secondary.light}`,
        justifyContent: 'space-between',
        marginBottom: 15
    },
    main: {
        margin: '0px 15px'
    },
    name: {

    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20
    },
}); 