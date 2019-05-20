import { Contact } from "../../models";
import style from "./ContactDetailsFields-style";
import { List, ListItem, Grid, Avatar, Icon, withStyles, WithStyles, IconButton, Typography }
    from "@material-ui/core";
import React from 'react';
import { ContactFieldLabel, Divider, Emptiness } from "../reusables";

export default  withStyles(style)(
    ({contact, classes}: {contact: Contact} & WithStyles<typeof style>) => 
        <List className={classes.root}>
            <ListItem className={classes.field}>
                <ContactFieldLabel icon="email" text="email" />
                <Emptiness width="3.5%" />
                <Typography className={classes.fieldValue}>
                    {contact.email}                 
                </Typography>
            </ListItem> 
            <ListItem className={classes.field}>
                <ContactFieldLabel icon="phone" text="number" />
                <List disablePadding className={classes.fieldValue + ' ' + classes.fieldListValue}>
                    {contact.numbers.map(({label, value}) => 
                        <ListItem key={value}>
                            <Typography className={classes.label}>{label}</Typography>
                            <Typography className={classes.numberValue}>{value}</Typography>
                        </ListItem>
                    )}
                </List>
            </ListItem>
        </List>
    );