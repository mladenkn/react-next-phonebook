import { Contact } from "../../models";
import React from 'react';
import MediaQuery from "react-responsive";
import style from "./style";
import { FavoriteAction, GoToEditAction, GoBackAction } from "../actions";
import { WithStyles, withStyles, IconButton, Icon, Typography, Avatar } from "@material-ui/core";
import { Divider } from "../reusables";
import { compose }from "lodash/fp";
import withWidth, { WithWidth } from "@material-ui/core/withWidth";
import ContactEditor from "./ContactEditor";


type Props = {contact: Contact} & WithStyles<typeof style> & WithWidth;

const ContactEditPage = ({contact, classes}: Props) => 
{
    const backAction = <GoBackAction />

    const avatar = <Avatar src={contact.avatar} className={classes.avatar}/>

    return <div>
        <MediaQuery maxWidth={599}>
            <div className={classes.root}>
                <div className={classes.toolbar}>
                    {backAction}
                </div>
                <div className={classes.body}>                    
                    <div className={classes.heading}>
                        
                    </div>
                    <div className={classes.editorContainer}>
                        <ContactEditor contact={contact} />
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
                        {backAction}
                    </div>
                    <div className={classes.editorContainer}>
                        <ContactEditor contact={contact} />                    
                    </div>  
                </div>          
            </div>
        </MediaQuery>
    </div>;
}
 
export default compose(withStyles(style), withWidth())(ContactEditPage);