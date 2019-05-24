import style from "./style";
import { Contact } from "../../models";
import React, { useState } from 'react';
import { List, ListItem, withStyles, WithStyles } from "@material-ui/core";
import ContactListItem from "./ContactListItem";
import ContactAdder from "./ContactAdder";
import withWidth, { WithWidth } from "@material-ui/core/withWidth";

type Props = {
    contacts: Contact[]
    className?: string
    includeAdder?: boolean
} & WithStyles<typeof style> & WithWidth

const ContactList = withWidth()(({contacts, classes, includeAdder, className, width}: Props) => {

    const includeAdder_ = includeAdder || false;
    const smOrDown = width === 'sm' || width === 'xs';

    const [selectedItemId, setSelectedItemId] = useState(0);
 
    const items = contacts.map(c => 
        <ListItem key={c.id} className={classes.itemRoot}>
            <ContactListItem isSelected={selectedItemId === c.id} smOrDown={smOrDown}
                onSelect={() => {setSelectedItemId(c.id)}} contact={c} /> 
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