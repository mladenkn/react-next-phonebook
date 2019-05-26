import { Contact } from "../../models";
import React from 'react';
import MediaQuery from "react-responsive";
import style from "./style";
import { DeleteAction, GoBackAction } from "../actions";
import { WithStyles, withStyles, IconButton, Icon, Typography, Avatar } from "@material-ui/core";
import { compose }from "lodash/fp";
import withWidth, { WithWidth } from "@material-ui/core/withWidth";
import ContactEditor from "./ContactEditor";


type Props = {contact: Contact} & WithStyles<typeof style> & WithWidth;

const ContactEditPage = ({contact, classes, width}: Props) => 
{
    const backAction = <GoBackAction styles={{root: classes.backAction}} />;

    const deleteAction = <DeleteAction contactId={contact.id} withText={width !== 'xs'} styles={{root: classes.deleteAction}} />;

    const avatar = <Avatar src={contact.avatar} className={classes.avatar}/>;

    return <div>
        <MediaQuery maxWidth={960}>
            <div className={classes.shallowRoot}>
                <div className={classes.root}>
                    <div className={classes.toolbar}>
                        {backAction}{deleteAction}
                    </div>
                    <div className={classes.body}>                    
                        <div className={classes.heading}>
                            {avatar}
                        </div>
                        <div className={classes.editorContainer}>
                            <ContactEditor contact={contact} />
                        </div>
                    </div>
                </div>
            </div>
        </MediaQuery>
        <MediaQuery minWidth={961}>   
            <div className={classes.root}>
                <div className={classes.smLeft}>
                    {avatar}
                </div>
                <div className={classes.smRight}>
                    <div className={classes.heading}>
                        {backAction}{deleteAction}
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