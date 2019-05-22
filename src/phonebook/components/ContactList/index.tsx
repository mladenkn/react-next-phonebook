import style from "./ContactList-style";
import { Contact } from "../../models";
import React, { useState } from 'react';
import { List, ListItem, withStyles, WithStyles } from "@material-ui/core";
import ContactListItem, { ContactListItemAction } from "./ContactListItem";
import ContactAdder from "./ContactAdder";
import withWidth, { WithWidth } from "@material-ui/core/withWidth";

type Props = {
    contacts: Contact[]
    className?: string
    includeAdder?: boolean
} & WithStyles<typeof style> & WithWidth

const ContactList = withWidth()(({contacts, classes, includeAdder, className, width}: Props) => {

    const includeAdder_ = includeAdder || false;
    const smOrXs = width === 'sm' || width === 'xs';

    const [selectedItemId, setSelectedItemId] = useState(0)

    const handleItemAction = (a: ContactListItemAction, itemId: number) => {
        if(a === 'click'){
            if (smOrXs)
                console.log('show details');
            else {
                if(selectedItemId === itemId)
                    console.log('show details');
                else
                    setSelectedItemId(itemId);
            }
        }
    }
 
    const items = contacts.map(c => 
        <ListItem key={c.id} className={classes.itemRoot}>
            <ContactListItem isSelected={selectedItemId === c.id} smOrXs={smOrXs}
                onAction={a => {handleItemAction(a, c.id)}} contact={c} /> 
        </ListItem>
    );

    if(includeAdder_){
        const adder = 
            <ListItem key={0} className={classes.itemRoot}>
                <ContactAdder />
            </ListItem>
        items.unshift(adder);
    }

    return <List className={className + ' ' + classes.root}>{items}</List>;
})

export default withStyles(style)(ContactList)