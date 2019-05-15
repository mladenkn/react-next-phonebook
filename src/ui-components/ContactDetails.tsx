import { Contact } from "../models";
import { WithStyles, withStyles } from "../utils";
import { contactDetailsStyle } from "../ui-design/contactDetails";
import { Grid, Avatar, Typography, Divider } from "@material-ui/core";
import React from 'react';

export const ContactDetails_ = ({contact, classes}: {contact: Contact} & WithStyles<typeof contactDetailsStyle>) => 
    <div>
        <Grid className={classes.heading} container>
            <Grid item sm={3}>
                <Avatar className={classes.avatar} src={contact.avatar} />            
            </Grid>
            <Grid item sm={7} className={classes.headingRightContainer}>
                <div className={classes.headingRight}>
                    <Typography>{contact.firstName + ' ' + contact.lastName}</Typography>
                    <Divider className={classes.divider} />
                </div>
            </Grid>
        </Grid>
        <Grid className={classes.content}>
            <Grid item sm={4}>
            </Grid>
            <Grid item sm={7}>

            </Grid>
        </Grid>
    </div>

export const ContactDetails = withStyles(contactDetailsStyle)(ContactDetails_)