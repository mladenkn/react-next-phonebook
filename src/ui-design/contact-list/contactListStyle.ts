import { createStyles } from "@material-ui/core"

const ifSm = '@media (min-width: 600px)';

export const contactListStyle = createStyles({
    root: {
        [ifSm]: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
        },
    },
    itemRoot: {
        [ifSm]: {
            width: 270,
            height: 150,
        },
    },
})