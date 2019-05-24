import React from 'react';
import { Contact } from "../models"; 
import MediaQuery from "react-responsive";
import ContactEditor from './ContactEditor';
import ContactPageBaseSm from './ContactPageBase/ContactPageBaseSm';
import ContactPageBaseXs from './ContactPageBase/ContactPageBaseXs';
import { WithStyles, withStyles, IconButton, Icon, Button, Typography } from "@material-ui/core";
import style from "./ContactEditPage-style";
import { DeleteAction, GoBackAction } from "./actions";

type Props = {contact: Contact} & WithStyles<typeof style>;

const ContactEditPage = ({contact, classes}: Props) => 
{
    const heading = (variant: 'xs' | 'sm') =>
        <div className={classes.heading}>
            <GoBackAction />
            <DeleteAction withText={variant === 'sm'} styles={{ root: classes.deleteButton, }} />
        </div>;
 
    const footer = 
        <div className={classes.footer}>
            <Button variant="contained" className={classes.futterButton} color="secondary">Cancel</Button>
            <Button variant="contained" className={classes.futterButton} color="primary">Save</Button>
        </div>
 
    return (
        <div>
            <MediaQuery maxWidth={599}>
                <div className={classes.rootXs}>
                    <ContactPageBaseXs
                        heading={heading('xs')}                    
                        avatar={contact.avatar}
                        footer={footer}
                        content={<ContactEditor contact={contact} />}
                    />                    
                </div>
            </MediaQuery>
            <MediaQuery minWidth={600}>
                <div className={classes.rootSm}>
                    <ContactPageBaseSm 
                        heading={heading('sm')}
                        avatar={contact.avatar}
                        footer={footer}
                        content={
                            <div className={classes.editorRoot}>
                                <ContactEditor contact={contact} />
                            </div>
                        }
                    />
                </div>   
            </MediaQuery>
        </div>
    );
}
 
export default withStyles(style)(ContactEditPage);