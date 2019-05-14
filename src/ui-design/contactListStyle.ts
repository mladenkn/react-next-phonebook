export const contactListStyle = {
    root: {
        display: ({type}: any) => type === 'snake' ? 'block' : 'flex',
        'flex-direction': 'row',
        'flex-wrap': 'wrap'
    },
    itemRoot: {
        width: 270,
    },
    itemCard: {
        padding: 0,
        width: 240,
    },
    itemCardContent: {
        padding: 8,
        'padding-bottom': '15px!important',
    },
    itemAvatar: {
        margin: 'auto',
        'margin-bottom': 10,
    },
    itemName: {
        'text-align': 'center'
    },
    itemIcon: {
        'font-size': 18
    },
    itemIcons: {
        position: 'relative',
        height: 28,
    },
    itemIconsLeft: {
        position: 'absolute'
    },
    itemIconsRight: {
        position: 'absolute',
        right: 0
    },
}

// export const contactListStyle = {
//     root: {
//         display: ({type}: any) => type === 'snake' ? 'flex' : 'block',
//         'flex-direction': ({type}: any) =>  type === 'snake' ? 'row' : 'inherit',
//         'flex-wrap': ({type}: any) =>  type === 'snake' ? 'wrap' : 'inherit'
//     },
//     itemRoot: {
//         width: 270,
//     },
//     itemCard: {
//         padding: 0,
//         width: 240,
//     },
//     itemCardContent: {
//         padding: 8,
//         'padding-bottom': '15px!important',
//     },
//     itemAvatar: {
//         display: ({type}: any) => type === 'vertical' ? 'inline-block' : 'block',
//         margin: 'auto',
//         'margin-bottom': 10,
//     },
//     itemName: {
//         display: ({type}: any) => type === 'vertical' ? 'inline-block' : 'block',
//         'text-align': 'center'
//     },
//     itemIcon: {
//         display: ({type}: any) => type === 'vertical' ? 'inline-block' : 'block',
//         'font-size': 18
//     },
//     itemIcons: {
//         position: ({type}: any) => type === 'snake' ? 'relative' : 'inherit',
//         height: 28,
//     },
//     itemIconsLeft: {
//         position: ({type}: any) => type === 'snake' ? 'absolute' : 'inherit',
//     },
//     itemIconsRight: {
//         position: ({type}: any) => type === 'snake' ? 'absolute' : 'inherit',
//         right: ({type}: any) => type === 'snake' ? 0 : 'inherit'
//     },
// }