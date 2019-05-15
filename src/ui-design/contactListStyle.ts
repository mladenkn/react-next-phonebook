const ifSm = '@media (min-width: 600px)'
const ifXs = '@media (max-width: 600px)';

export const contactListSnakeStyle = {
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
    itemCard: {
        [ifSm]: {
            padding: 0,
            width: 240,
        },
        [ifXs]: {
            width: 310
        },
    },
    itemCardContent: {
        [ifSm]: {
            padding: '5px 5px !important'
        },
        [ifXs]: {
            padding: '11px 12px !important'
        },
    },
    itemsContainer: {
        [ifXs]: {
            display: 'flex',
            'flex-direction': 'row',
            'align-items': 'center',
            'justify-content': 'space-between'
        },
    },
    itemAvatar: {
        [ifSm]: {
            margin: 'auto',
            'margin-bottom': 10,
        },
        [ifXs]: {
            display: 'inline-block',
        },
    },
    itemName: {
        [ifSm]: {
            'text-align': 'center'
        },
        [ifXs]: {
            display: 'inline-block',
        },
    },
    itemIcons: {
        [ifSm]: {
            position: 'relative',
            height: 28,
            'margin-bottom': 5
        },
        [ifXs]: {
            display: 'inline-block',
        },
    },
    itemIconsLeft: {
        [ifSm]: {
            position: 'absolute'
        },
    },
    itemIconsRight: {
        [ifSm]: {
            position: 'absolute',
            right: 0
        },
    },
    itemIconButton: {
        [ifSm]: {
            padding: 5,
        },
        [ifXs]: {
            display: 'inline-block',
        },
    },
    itemIcon: {
        [ifSm]: {
            'font-size': 18
        },
        [ifXs]: {
            'font-size': 21
        },
    }
}