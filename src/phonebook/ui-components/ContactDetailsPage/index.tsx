import { Contact } from "../../models";
import React from 'react';
import ContactDetailsSm from "./ContactDetailsXs";
import ContactDetailsFields from "./ContactDetailsFields";
import MediaQuery from "react-responsive";
import ContactPageBaseSm from "../ContactPageBase/ContactPageBaseSm";
import style from "./root-style";
import { WithStyles, withStyles, IconButton, Icon, Typography } from "@material-ui/core";
import { Emptiness } from "../reusables";

const ContactDetailsPage = ({contact, classes}: {contact: Contact} & WithStyles<typeof style>) => 
    <div>
        <MediaQuery maxWidth={599}>
            <ContactDetailsSm contact={contact} />
        </MediaQuery>
        <MediaQuery minWidth={600}>
            <ContactPageBaseSm 
                heading={
                    <div className={classes.content}>
                        <IconButton className={classes.iconButton} disableRipple>
                            <Icon color="secondary">arrow_back</Icon>
                        </IconButton>
                        <Typography className={classes.headingName}>{contact.fullName}</Typography>
                        <IconButton className={classes.iconButton} disableRipple>                        
                            <Icon color="secondary">{contact.isFavorite ? 'favorite' : 'favorite_outlined'}</Icon>
                        </IconButton>
                        <Emptiness className={classes.iconSpace} />
                        <IconButton className={classes.iconButton} disableRipple>
                            <Icon color="secondary">edit</Icon>
                        </IconButton>  
                    </div>                  
                }
                avatar={contact.avatar}>
                <ContactDetailsFields contact={contact} />
            </ContactPageBaseSm>
        </MediaQuery>
    </div>

export default withStyles(style)(ContactDetailsPage);