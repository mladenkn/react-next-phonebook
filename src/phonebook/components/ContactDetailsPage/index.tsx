import { Contact } from "../../models";
import React from 'react';
import ContactDetailsFields from "./ContactDetailsFields";
import MediaQuery from "react-responsive";
import ContactPageBaseSm from "../ContactPageBase/ContactPageBaseSm";
import ContactPageBaseXs from "../ContactPageBase/ContactPageBaseXs";
import style from "./style";
import { WithStyles, withStyles, IconButton, Icon, Typography } from "@material-ui/core";

const ContactDetailsPage = ({contact, classes}: {contact: Contact} & WithStyles<typeof style>) => 
{
    const backIcon = 
        <IconButton className={classes.button + ' ' + classes.backButton} disableRipple>
            <Icon color="secondary">arrow_back</Icon>
        </IconButton>;

    const name = <Typography className={classes.headingName}>{contact.fullName}</Typography>;

    const favButton = 
        <IconButton className={classes.button + ' ' + classes.favButton} disableRipple>
            <Icon color="secondary">{contact.isFavorite ? 'favorite' : 'favorite_outlined'}</Icon>
        </IconButton>;

    const editButton = 
        <IconButton className={classes.button + ' ' + classes.editButton} disableRipple>
            <Icon color="secondary">edit</Icon>
        </IconButton>;

    return <div>
        <MediaQuery maxWidth={599}>
            <div className={classes.rootXs}>
                <ContactPageBaseXs 
                    heading={<div className={classes.heading}>{backIcon} {favButton} {editButton}</div>}
                    name={contact.fullName}
                    avatar={contact.avatar}
                    content={<ContactDetailsFields contact={contact} />} />
            </div>
        </MediaQuery>
        <MediaQuery minWidth={600}>   
            <div className={classes.rootSm}>
                <ContactPageBaseSm 
                    heading={<div className={classes.heading}>{backIcon} {name} {favButton} {editButton}</div>}
                    content={<ContactDetailsFields contact={contact} />}
                    avatar={contact.avatar}/>
            </div>
        </MediaQuery>
    </div>;
}
 
export default withStyles(style)(ContactDetailsPage);