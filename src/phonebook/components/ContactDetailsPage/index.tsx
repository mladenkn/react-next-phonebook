import { Contact } from "../../models";
import React from 'react';
import ContactDetailsFields from "./ContactDetailsFields";
import MediaQuery from "react-responsive";
import style from "./style";
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions";
import { WithStyles, withStyles, IconButton, Icon, Typography, Avatar, } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useContactPageBaseStylesXs } from "../ContactPageBase-style"; 
 
type Props = {contact: Contact} & WithStyles<typeof style>;

const ContactDetailsPage = ({contact, classes}: Props) => 
{
    const backAction = <GoBackAction />

    const name = <Typography className={classes.personName}>{contact.fullName}</Typography>;

    const favAction = <FavoriteAction 
        contact={contact}
        rootClass={classes.action + ' ' + classes.favAction} 
        iconClass={classes.icon} />;

    const editAction = <GoToEditAction
        contactId={contact.id}
        rootClass={classes.action + ' ' + classes.editAction}
        iconClass={classes.icon} />;

    const avatar = <Avatar src={contact.avatar} className={classes.avatar}/>

    const baseClasses = useContactPageBaseStylesXs();
  
    return <div>
        <MediaQuery maxWidth={599}>
            <div className={baseClasses.root}>
                <div className={baseClasses.toolbar}>
                    {backAction}{favAction}{editAction}
                </div>
                <div className={baseClasses.body}>                    
                    <div className={baseClasses.heading}>
                        {avatar}{name}
                    </div>
                    <div className={classes.detailsContainer}>                    
                        <ContactDetailsFields contact={contact} />
                    </div>
                </div>
            </div>
        </MediaQuery>
        <MediaQuery minWidth={600}>   
            <div className={classes.root}>
                <div className={classes.smLeft}>
                    {avatar}
                </div>
                <div className={classes.smRight}>
                    <div className={classes.heading}>
                        {backAction}{name}{favAction}{editAction}
                    </div>
                    <div className={classes.detailsContainer}>                    
                        <ContactDetailsFields contact={contact} />
                    </div>  
                </div>          
            </div>
        </MediaQuery>
    </div>;
}
 
export default withStyles(style)(ContactDetailsPage);