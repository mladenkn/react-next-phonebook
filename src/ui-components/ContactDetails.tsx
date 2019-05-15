import { Contact } from "../models";
import { WithStyles, withStyles } from "../utils";
import { contactDetailsStyle } from "../ui-design/contactDetails";
import { Grid, Avatar, Typography, Divider, Icon } from "@material-ui/core";
import React from 'react';
import { ContactDetailsProps } from "./ContactDetailsProps";

export const ContactDetails_ = ({contact, classes}: {contact: Contact} & WithStyles<typeof contactDetailsStyle>) => 
    <Grid container>
        <Grid item sm={3}>
            <Avatar className={classes.avatar} src={contact.avatar} />            
        </Grid>
        <Grid item sm={8} className={classes.content}>
            <div className={classes.contentHeading}>
                <div className={classes.contentHeadingContent}>
                    <Icon className={classes.contentHeadingBackIcon}>arrow_back</Icon>
                    <Typography className={classes.contentHeadingName}>
                        {contact.firstName + ' ' + contact.lastName}
                    </Typography>
                    <Icon className={classes.contentHeadingFavoriteIcon}>{contact.isFavorite ? 'favorite': 'favorite_outlined'}</Icon>
                    <Icon className={classes.contentHeadingEditIcon}>edit</Icon>
                </div>
                <Divider className={classes.divider} />
            </div>
            <Grid className={classes.contentPropsContainer} container>
                <Grid item sm={1}>
                </Grid>
                <Grid item sm={10}>
                    <ContactDetailsProps contact={contact} />
                </Grid>
            </Grid>
        </Grid>
    </Grid>

export const ContactDetails = withStyles(contactDetailsStyle)(ContactDetails_)