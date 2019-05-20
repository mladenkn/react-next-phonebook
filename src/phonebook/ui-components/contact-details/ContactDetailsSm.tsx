import { Contact } from "../../models";
import style from "./ContactDetailsSm-style";
import { List, ListItem, Grid, Avatar, Icon, withStyles, WithStyles, IconButton, Typography }
    from "@material-ui/core";
import React from 'react';
import { Divider, Emptiness } from "../reusables";
import ContactDetailsFields from "./ContactDetailsFields"

export default withStyles(style)(
    ({contact, classes}: {contact: Contact} & WithStyles<typeof style>) => 
        <div>
            <div className={classes.header}>
                <Avatar src={contact.avatar} />
                <Typography variant="h5" className={classes.name}>{contact.fullName}</Typography>
            </div>
            <Divider />
            <ContactDetailsFields contact={contact} />
        </div>
    );