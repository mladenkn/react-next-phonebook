import React from 'react';
import { Contact } from "../../models"; 
import MediaQuery from "react-responsive";
import ContactEditor from '../ContactEditor';
import ContactPageBaseSm from '../ContactPageBase/ContactPageBaseSm';
import ContactPageBaseXs from '../ContactPageBase/ContactPageBaseXs';
import { WithStyles, withStyles, IconButton, Icon, Button, Typography } from "@material-ui/core";
import style from "./root-style";

const ContactEditPage = ({contact, classes}: {contact: Contact} & WithStyles<typeof style>) => 
{
    const heading = (variant: 'xs' | 'sm') =>
        <div className={classes.heading}>
            <IconButton className={classes.backButton} disableRipple>
                <Icon color="secondary">arrow_back</Icon>
            </IconButton>
            <Button className={classes.deleteButton}>
                {variant === 'sm' && <Typography>Delete</Typography>}
                <Icon color="secondary">delete</Icon>
            </Button>
        </div>;
 
    return (
        <div>
            <MediaQuery maxWidth={599}>
                <div className={classes.rootMobile}>
                    <ContactPageBaseXs
                        heading={heading('xs')}                    
                        avatar={contact.avatar}
                        content={<ContactEditor contact={contact} />}
                    />
                </div>
            </MediaQuery>
            <MediaQuery minWidth={600}>
                <ContactPageBaseSm 
                    heading={heading('sm')}
                    avatar={contact.avatar}
                    content={
                        <div className={classes.smMain}>
                            <ContactEditor contact={contact} />
                        </div>
                    }
                />
            </MediaQuery>
        </div>
    );
}

export default withStyles(style)(ContactEditPage);