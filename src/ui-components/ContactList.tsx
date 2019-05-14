import { contactListStyle } from "../ui-design/contactListStyle";
import { ContactListItem } from "../models";
import React from 'react';
import { withStyles } from '../utils';
import { WithSheet } from 'react-jss';
import { List, ListItem, Card, Avatar, CardContent, Typography, Icon } from "@material-ui/core";

interface OwnProps {
    contacts: ContactListItem[]
    type: 'vertical' | 'snake'
}
 
type Props = WithSheet<typeof contactListStyle> & OwnProps

const ContactList_ = ({contacts, type, classes}: Props) => {

    return (
        <List className={classes.root}>
            {contacts.map(c => {

                const icons = 
                    <div className={classes.itemIcons}>
                        <span className={classes.itemIconsLeft}>
                            <Icon className={classes.itemIcon}>
                                {c.isFavorite ? 'favorite' : 'favorite_outlined'}
                            </Icon>
                        </span>
                        <span className={classes.itemIconsRight}>
                            <Icon className={classes.itemIcon}>edit</Icon>
                            <Icon className={classes.itemIcon}>delete</Icon>
                        </span>
                    </div>

                const avatar = <Avatar alt="avatar" src={c.avatar} className={classes.itemAvatar} />

                const name = <Typography className={classes.itemName}>{c.firstName + ' ' + c.lastName}</Typography>

                return <ListItem key={c.id} className={classes.itemRoot}>
                    <Card className={classes.itemCard}>
                        <CardContent className={classes.itemCardContent}>
                            {type === 'snake' && <div>{icons} {avatar} {name}</div>}
                            {type === 'vertical' && <div>{avatar} {name} {icons}</div>}
                        </CardContent>
                    </Card>
                </ListItem>;
            }
        )}
        </List>
    );
}

export const ContactList = withStyles(contactListStyle)(ContactList_)