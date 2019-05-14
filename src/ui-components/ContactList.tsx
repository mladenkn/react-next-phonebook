import { WithSheet } from "react-jss";
import { contactListStyle } from "../ui-design/contactListStyle";
import { ContactListItem } from "../models";
import React from 'react';
import { withStyles } from "../utils";
import { List, ListItem, Card, Avatar, CardContent, Typography } from "@material-ui/core";
import * as icons from '@material-ui/icons'

console.log(icons)

interface OwnProps {
    contacts: ContactListItem[]
}

type Props = WithSheet<typeof contactListStyle> & OwnProps

const ContactList_ = ({contacts, classes}: Props) => (
    <List className={classes.root}>
        {contacts.map(c =>
             <ListItem key={c.id} className={classes.listItemRoot}>
                <Card className={classes.listItemCard}>
                    <CardContent>
                        <Avatar alt="avatar" src={c.avatar} className={classes.listItemAvatar}/>
                        <Typography className={classes.listItemName}>{c.firstName + ' ' + c.lastName}</Typography>
                    </CardContent>
                </Card>
             </ListItem>
        )}        
    </List>
)

export const ContactList = withStyles(contactListStyle)(ContactList_)