import { createStyles, Theme } from "@material-ui/core"

export default ({palette}: Theme) => createStyles({
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20
    },
    name: {
        marginLeft: '7%'
    },
});