import { Contact } from "../models";
import { contactDetailsStyle } from "../ui-design/contactDetailsStyle";
import { Grid, Avatar, Typography, Divider, Icon, withStyles, WithStyles } from "@material-ui/core";
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
                    <Icon color="secondary" className={classes.contentHeadingBackIcon}>arrow_back</Icon>
                    <Typography className={classes.contentHeadingName}>
                        {contact.firstName + ' ' + contact.lastName}
                    </Typography>
                    <Icon color="secondary" className={classes.contentHeadingFavoriteIcon}>{contact.isFavorite ? 'favorite': 'favorite_outlined'}</Icon>
                    <Icon color="secondary" className={classes.contentHeadingEditIcon}>edit</Icon>
                </div>
                <Divider className={classes.divider} />
            </div>
            <Grid className={classes.contentPropsContainer} container>
                <Grid item sm={1}>
                </Grid>
                <Grid item sm={10}>
                    <ContactDetailsFields contact={contact} />
                </Grid>
            </Grid>
        </Grid>
    </Grid>

export const ContactDetails = withStyles(contactDetailsStyle)(ContactDetails_)