import { Contact } from "../../models";
import style from "./ContactDetailsXs-style";
import { List, ListItem, Grid, Avatar, Icon, withStyles, WithStyles, IconButton, Typography }
    from "@material-ui/core";
import React from 'react';
import { Divider, Emptiness } from "../reusables";
import ContactDetailsFields from "./ContactDetailsFields"

export default withStyles(style)(
    ({contact, classes}: {contact: Contact} & WithStyles<typeof style>) => 
        <div>
            <div className={classes.toolbar}>
                <div>
                    <IconButton>
                        <Icon color="secondary">arrow_back</Icon>
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <Icon color="secondary">{contact.isFavorite ? 'favorite' : 'favorite_outlined'}</Icon>
                    </IconButton>
                    <IconButton>
                        <Icon color="secondary">delete</Icon>
                    </IconButton>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.header}>
                    <Avatar src={contact.avatar} />
                    <Typography variant="h5" className={classes.name}>{contact.fullName}</Typography>
                </div>
                <Divider />
                <ContactDetailsFields contact={contact} />
            </div>
        </div>
    );