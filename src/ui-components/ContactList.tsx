import { contactListVerticalStyle, contactListSnakeStyle } from "../ui-design/contactListStyle";
import { ContactListItem } from "../models";
import React from 'react';
import { createStyled } from '../utils';
import { List, ListItem, Card, Avatar, CardContent, Typography, Icon, IconButton } from "@material-ui/core";

export interface ContactListOwnProps {
    contacts: ContactListItem[]
    type: 'vertical' | 'snake'
}

export const ContactList = ({contacts, type}: ContactListOwnProps) => {

    const Styled = type === 'vertical' ? 
      createStyled(contactListVerticalStyle) : 
      createStyled(contactListSnakeStyle)

    return (
      <Styled>
        {classes =>
            <List className={classes.root}>
              {contacts.map(c => {

                const icons = 
                  <div className={classes.itemIcons}>
                      <span className={classes.itemIconsLeft}>
                        <IconButton className={classes.itemIconButton}>
                          <Icon className={classes.itemIcon}>
                            {c.isFavorite ? 'favorite' : 'favorite_outlined'}
                          </Icon>
                        </IconButton>
                      </span>
                      <span className={classes.itemIconsRight}>
                        <IconButton className={classes.itemIconButton}>
                          <Icon className={classes.itemIcon}>edit</Icon>
                        </IconButton>
                        <IconButton className={classes.itemIconButton}>
                          <Icon className={classes.itemIcon}>delete</Icon>
                        </IconButton>                     
                      </span>
                  </div>

                const avatar = <Avatar alt="avatar" src={c.avatar} className={classes.itemAvatar} />

                const name = <Typography className={classes.itemName}>{c.firstName + ' ' + c.lastName}</Typography>

                return (
                  <ListItem key={c.id} className={classes.itemRoot}>
                    <Card className={classes.itemCard}>
                      <CardContent className={classes.itemCardContent}>
                        {type === 'snake' && <div className={classes.itemsContainer}>{icons} {avatar} {name}</div>}
                        {type === 'vertical' && <div className={classes.itemsContainer}>{avatar} {name} {icons}</div>}
                      </CardContent>
                    </Card>
                  </ListItem>
                );
              })}
            </List>
          }
      </Styled>
    )
}