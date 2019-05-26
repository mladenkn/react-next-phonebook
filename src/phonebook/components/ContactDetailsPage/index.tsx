import { Contact } from "../../models";
import React from 'react';
import ContactDetailsFields from "./ContactDetailsFields";
import MediaQuery from "react-responsive";
import style from "./style";
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions";
import { WithStyles, withStyles, IconButton, Icon, Typography, Avatar } from "@material-ui/core";
import { Divider } from "../reusables";
import { compose }from "lodash/fp";
import withWidth, { WithWidth } from "@material-ui/core/withWidth";


type Props = {contact: Contact} & WithStyles<typeof style> & WithWidth;

const ContactDetailsPage = ({contact, classes}: Props) => 
{
    const backAction = <GoBackAction />

    const name = <Typography className={classes.personName}>{contact.fullName}</Typography>;

    const favAction = <FavoriteAction
        contact={contact}
        styles={{
            root: classes.action + ' ' + classes.favAction,
            icon: classes.icon,
        }} />;

    const editAction = <GoToEditAction
        contactId={contact.id}
        styles={{
            root: classes.action + ' ' + classes.editAction,
            icon: classes.icon,
        }} />;

    const avatar = <Avatar src={contact.avatar} className={classes.avatar}/>

    return <div>
        <MediaQuery maxWidth={599}>
            <div className={classes.root}>
                <div className={classes.toolbar}>
                    {backAction}{favAction}{editAction}
                </div>
                <div className={classes.body}>                    
                    <div className={classes.heading}>
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
 
export default compose(withStyles(style), withWidth())(ContactDetailsPage);