import { Contact } from "../../models";
import React from 'react';
import ContactDetailsFields from "./ContactDetailsFields";
import MediaQuery from "react-responsive";
import style from "./style";
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions";
import { WithStyles, withStyles, IconButton, Icon, Typography, Avatar, } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { useContactPageBaseStylesXs, useContactPageBaseStylesSm } from "../ContactPageBase-style";
 
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

    const avatar = <Avatar src={contact.avatar} className={classes.avatar}/>

    const xsBaseClasses = useContactPageBaseStylesXs();
    const smBaseClasses = useContactPageBaseStylesSm();
  
    return <div>
        <MediaQuery maxWidth={599}>
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
        </MediaQuery>
        <MediaQuery minWidth={600}>   
            <div className={smBaseClasses.root + ' ' + classes.root}>
                <div className={smBaseClasses.smLeft}>
                    {avatar}
                </div>
                <div className={smBaseClasses.smRight}>
                    <div className={smBaseClasses.heading}>
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