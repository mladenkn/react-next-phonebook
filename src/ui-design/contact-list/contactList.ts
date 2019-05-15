const ifSm = '@media (min-width: 600px)';

export const contactListStyle = {
    root: {
        [ifSm]: {
            display: 'flex',
            'flex-wrap': 'wrap',
            'flex-direction': 'row',
        },
    },
    itemRoot: {
        [ifSm]: {
            width: 270,
        },
    },
};