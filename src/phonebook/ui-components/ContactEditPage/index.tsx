import React from 'react';
import { Contact } from "../../models"; 
import MediaQuery from "react-responsive";
import ContactEditor from '../ContactEditor';
import ContactPageBaseSm from '../ContactPageBase/ContactPageBaseSm';
import { WithStyles, withStyles, IconButton, Icon, Button, Typography } from "@material-ui/core";
import style from "./root-style";

const ContactEditPage = ({contact, classes}: {contact: Contact} & WithStyles<typeof style>) => 
    <div>
        <MediaQuery maxWidth={599}>
        </MediaQuery>
        <MediaQuery minWidth={600}>
            <ContactPageBaseSm 
                heading={
                    <div className={classes.content}>
                        <IconButton className={classes.backButton} disableRipple>
                            <Icon color="secondary">arrow_back</Icon>
                        </IconButton>
                        <Button className={classes.deleteButton}>
                            <Typography>Delete</Typography>
                            <Icon color="secondary">delete</Icon>
                        </Button>
                    </div>                  
                }
                avatar={contact.avatar}
            >
                <ContactEditor contact={contact} />
            </ContactPageBaseSm>
        </MediaQuery>
    </div>

export default withStyles(style)(ContactEditPage);