import { Contact } from "../models";
import { contactDetailsStyle } from "../ui-design/contactDetailsStyle";
import { Grid, Avatar, Typography, Divider, Icon, withStyles, WithStyles, IconButton } from "@material-ui/core";
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
                    <IconButton className={classes.contentHeadingBackIcon}>
                        <Icon color="secondary">arrow_back</Icon>
                    </IconButton>
                    <Typography className={classes.contentHeadingName}>
                        {contact.firstName + ' ' + contact.lastName}
                    </Typography>
                    <IconButton className={classes.contentHeadingEditIcon}>
                        <Icon color="secondary" className={classes.contentHeadingEditIcon}>edit</Icon>
                    </IconButton>
                    <IconButton className={classes.contentHeadingFavoriteIcon}>
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