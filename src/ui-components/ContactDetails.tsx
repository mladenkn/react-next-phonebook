import { Contact } from "../models";
import { WithStyles, withStyles } from "../utils";
import { contactDetailsStyle } from "../ui-design/contactDetails";
import { Grid, Avatar, Typography, Divider, Icon } from "@material-ui/core";
import React from 'react';
import { ContactDetailsProps } from "./ContactDetailsProps";

export const ContactDetails_ = ({contact, classes}: {contact: Contact} & WithStyles<typeof contactDetailsStyle>) => 
    <div>
        <Grid className={classes.heading} container>
            <Grid item sm={3}>
                <Avatar className={classes.avatar} src={contact.avatar} />            
            </Grid>
            <Grid item sm={7} className={classes.headingRightContainer}>
                <div className={classes.headingRight}>
                    <div className={classes.headingRightContent}>
                        <Icon className={classes.headingRightContentBackIcon}>arrow_back</Icon>
                        <Typography className={classes.headingRightContentName}>
                            {contact.firstName + ' ' + contact.lastName}
                        </Typography>
                        <Icon className={classes.headingRightContentFavoriteIcon}>{contact.isFavorite ? 'favorite': 'favorite_outlined'}</Icon>
                        <Icon className={classes.headingRightContentEditIcon}>edit</Icon>
                    </div>
                    <Divider className={classes.divider} />
                </div>
            </Grid>
        </Grid>
        <Grid container className={classes.content}>
            <Grid item sm={3}>
            </Grid>
            <Grid item sm={7}>
                <ContactDetailsProps contact={contact} />
            </Grid>
        </Grid>
    </div>

export const ContactDetails = withStyles(contactDetailsStyle)(ContactDetails_)