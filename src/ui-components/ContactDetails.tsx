import { Contact } from "../models";
import { contactDetailsStyle } from "../ui-design/contactDetails";
import { contactDetailsFieldsStyle } from "../ui-design/contactDetailsFields";
import { List, ListItem, Grid, Avatar, Divider, Icon, withStyles, WithStyles, IconButton }
    from "@material-ui/core";
import React from 'react';

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
                <Grid item sm={1} />
                <Grid item sm={11}>
                    <ContactDetailsFields contact={contact} />
                </Grid>
            </Grid>
        </Grid>
    </Grid>

export default withStyles(contactDetailsStyle)(ContactDetails_);

const ContactDetailsFields_ = ({contact, classes}: {contact: Contact} & WithStyles<typeof contactDetailsFieldsStyle>) => 
    <List>
        <ListItem className={classes.field}>
            <div className={`${classes.fieldLabel} ${classes.fieldLabelEmail}`}>
                <Icon className={classes.fieldLabelIcon}>email</Icon>
                <span className={classes.fieldLabelText}>email</span>
            </div>
            <div className={classes.fieldValue}>
                {contact.email}                 
            </div>
        </ListItem>
        <ListItem className={classes.field}>
            <div className={classes.fieldLabel}>
                <Icon className={classes.fieldLabelIcon}>phone</Icon>
                <span className={classes.fieldLabelText}>numbers</span>
            </div>
            <List className={classes.fieldListValue}>
                {contact.numbers.map(({label: type, value}) => 
                    <ListItem key={value}>
                        <div className={classes.numberType}>{type}</div>
                        <div className={classes.numberValue}>{value}</div>
                    </ListItem>
                )}
            </List>
        </ListItem>
    </List>

const ContactDetailsFields = withStyles(contactDetailsFieldsStyle)(ContactDetailsFields_);