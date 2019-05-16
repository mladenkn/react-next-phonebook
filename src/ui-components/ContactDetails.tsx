import { Contact } from "../models";
import { contactDetailsStyle } from "../ui-design/contactDetailsStyle";
import { Grid, Avatar, Divider, Icon, withStyles, WithStyles, IconButton } from "@material-ui/core";
import React from 'react';
import { ContactDetailsFields } from "./ContactDetailsFields";

export const ContactDetails_ = ({contact, classes}: {contact: Contact} & WithStyles<typeof contactDetailsStyle>) => 
    <Grid container>
        <Grid item sm={3}>
            <Avatar className={classes.avatar} src={contact.avatar} />            
        </Grid>
        <Grid item sm={8} className={classes.content}>
            <div className={classes.contentHeading}>
                <div className={classes.contentHeadingContent}>
                    <IconButton className={classes.contentHeadingBackIcon} disableRipple>
                        <Icon color="secondary">arrow_back</Icon>
                    </IconButton>
                    <span className={classes.contentHeadingName}>
                        {contact.firstName + ' ' + contact.lastName}
                    </span>
                    <IconButton className={classes.contentHeadingEditIcon} disableRipple>
                        <Icon color="secondary" className={classes.contentHeadingEditIcon}>edit</Icon>
                    </IconButton>
                    <IconButton className={classes.contentHeadingFavoriteIcon} disableRipple>
                        <Icon color="secondary">{contact.isFavorite ? 'favorite': 'favorite_outlined'}</Icon>
                    </IconButton>
                </div>
                <Divider className={classes.divider} />
            </div>
            <Grid className={classes.contentPropsContainer} container>
                <Grid item sm={1}>
                </Grid>
                <Grid item sm={11}>
                    <ContactDetailsFields contact={contact} />
                </Grid>
            </Grid>
        </Grid>
    </Grid>

export const ContactDetails = withStyles(contactDetailsStyle)(ContactDetails_)