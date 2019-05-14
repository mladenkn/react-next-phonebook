import { ContactListOwnProps } from "../ui-components/ContactList";

export const contactListStyle = {
    root: ({type}: ContactListOwnProps) => type === 'snake' && ({
        display: 'flex',
        'flex-direction': 'row',
        'flex-wrap': 'wrap'
    }), 
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
        display: ({type}: ContactListOwnProps) => type === 'vertical'  && 'inline-block'
    },
    itemName: {
        'text-align': 'center',
        display: ({type}: ContactListOwnProps) => type === 'vertical'  && 'inline-block'
    },
    itemIcon: {
        'font-size': 18
    },
    itemIcons: ({type}: ContactListOwnProps) => type === 'snake' && ({
        position: 'relative',
        height: 28,
    }),
    itemIconsLeft: ({type}: ContactListOwnProps) => type === 'snake' && ({
        position: 'absolute'
    }),
    itemIconsRight: ({type}: ContactListOwnProps) => type === 'snake' && ({
        position: 'absolute',
        right: 0
    }),
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