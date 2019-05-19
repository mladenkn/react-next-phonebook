import { contactListStyle } from "../../ui-design/contact-list/contactList";
import { Contact } from "../../models";
import React, { useState } from 'react';
import { List, ListItem, withStyles, WithStyles } from "@material-ui/core";
import ContactListItem from "./ContactListItem";
import ContactAdder from "./ContactAdder";

interface OwnProps {
    contacts: Contact[],
    className?: string
    includeAdder?: boolean,
}

const ContactList = ({contacts, classes, includeAdder, className}: OwnProps & WithStyles<typeof contactListStyle>) => {

    const includeAdder_ = includeAdder || false

    const [selectedItemId, setSelectedItemId] = useState(0)
 
    const items = contacts.map(c => 
        <ListItem key={c.id} className={classes.itemRoot}>
            <ContactListItem isSelected={selectedItemId === c.id}
                onClick={() => {setSelectedItemId(c.id)}} contact={c} /> 
        </ListItem>
    );

    if(includeAdder_){
        const adder = 
            <ListItem key={0} className={classes.itemRoot}>
                <ContactAdder />
            </ListItem>
        items.unshift(adder);
    }

    return <List className={`${className} ${classes.root}`}>{items}</List>;
}

export default withStyles(contactListStyle)(ContactList)