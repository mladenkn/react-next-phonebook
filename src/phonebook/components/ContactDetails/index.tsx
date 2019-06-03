import { Contact } from "../../models";
import React from 'react';
import ContactDetailsFields from "./ContactDetailsFields";
import style from "./style";
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions";
import { WithStyles, withStyles, IconButton, Icon, Typography, Avatar, } from "@material-ui/core";
import { useContactPageBaseStylesXs, useContactPageBaseStylesMd } from "../ContactPageBase-style";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const defaultAvatarUrl = require('../../assets/default-avatar.jpg'); // doesn't work with ES6 import

type Props = {contact: Contact, onFavorite: () => void} & WithStyles<typeof style>;

const ContactDetailsPage = ({contact, classes, onFavorite}: Props) => 
{
    const backAction = <GoBackAction />

    const name = <Typography className={classes.personName}>{contact.fullName}</Typography>;

    const favAction = <FavoriteAction
        onClick={onFavorite}
        isFavorite={contact.isFavorite}
        rootClass={classes.action + ' ' + classes.favAction} 
        iconClass={classes.icon} />;
 
    const editAction = <GoToEditAction
        contactId={contact.id}
        rootClass={classes.action + ' ' + classes.editAction}
        iconClass={classes.icon} />;

    const avatarUrl = contact.avatar || defaultAvatarUrl;

    const avatar = <Avatar src={avatarUrl} className={classes.avatar}/>

    const xsBaseClasses = useContactPageBaseStylesXs();
    const mdBaseClasses = useContactPageBaseStylesMd();

    const onlyXs = useMediaQuery('(max-width:599px)');
    
    if(onlyXs){
        return (
            <div className={xsBaseClasses.root + ' ' + classes.root}>
                <div className={xsBaseClasses.toolbar}>
                    {backAction}{favAction}{editAction}
                </div>
                <div className={xsBaseClasses.body}>                    
                    <div className={xsBaseClasses.heading}>
                        {avatar}{name}
                    </div>
                    <div className={classes.detailsContainer}>                    
                        <ContactDetailsFields contact={contact} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (   
            <div className={mdBaseClasses.root + ' ' + classes.root}>
                <div className={mdBaseClasses.left}>
                    {avatar}
                </div>
                <div className={mdBaseClasses.right}>
                    <div className={mdBaseClasses.heading}>
                        {backAction}{name}{favAction}{editAction}
                    </div>
                    <div className={classes.detailsContainer}>                    
                        <ContactDetailsFields contact={contact} />
                    </div>  
                </div>          
            </div>         
        );
    }
}
 
export default withStyles(style)(ContactDetailsPage);