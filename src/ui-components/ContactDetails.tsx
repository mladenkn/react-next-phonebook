import { Contact } from "../models";
import { contactDetailsStyle } from "../ui-design/contactDetails";
import { contactDetailsFieldsStyle } from "../ui-design/contactDetailsFields";
import { List, ListItem, Grid, Avatar, Icon, withStyles, WithStyles, IconButton }
    from "@material-ui/core";
import React from 'react';
import { ContactFieldLabel, Divider, Emptiness } from "./reusables";

export const ContactDetails = ({contact, classes}: {contact: Contact} & WithStyles<typeof contactDetailsStyle>) => 
    <Grid container>
        <Grid item sm={3}>
            <Avatar className={classes.avatar} src={contact.avatar} />            
        </Grid>
        <Grid item sm={8} className={classes.content}>
            <Emptiness height={50} />
            <div className={classes.contentHeading}>
                <div className={classes.contentHeadingContent}>
                    <IconButton className={classes.contentHeadingBackIcon} disableRipple>
                        <Icon color="secondary">arrow_back</Icon>
                    </IconButton>
                    <Emptiness width="20%" />
                    <span className={classes.contentHeadingName}>{contact.fullName}</span>
                    <Emptiness width="40%" />
                    <IconButton className={classes.contentHeadingEditIcon} disableRipple>
                        <Icon color="secondary" className={classes.contentHeadingEditIcon}>edit</Icon>
                    </IconButton>
                    <Emptiness width="5%" />
                    <IconButton className={classes.contentHeadingFavoriteIcon} disableRipple>
                        <Icon color="secondary">{contact.isFavorite ? 'favorite': 'favorite_outlined'}</Icon>
                    </IconButton>
                </div>
                <Emptiness height={10} />
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

export default withStyles(contactDetailsStyle)(ContactDetails);

const ContactDetailsFields_ = ({contact, classes}: {contact: Contact} & WithStyles<typeof contactDetailsFieldsStyle>) => 
    <List>
        <ListItem className={classes.field}>
            <ContactFieldLabel icon="email" text="email" className={classes.fieldLabelEmail} />
            <Emptiness width="3.5%" />
            <div className={classes.fieldValue}>
                {contact.email}                 
            </div>
        </ListItem>
        <ListItem className={classes.field}>
            <ContactFieldLabel icon="phone" text="number" />
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