import { Contact } from "../../models";
import React from 'react';
import MediaQuery from "react-responsive";
import style from "./style";
import { DeleteAction, GoBackAction } from "../actions";
import { WithStyles, withStyles, Button, Avatar } from "@material-ui/core";
import { compose }from "lodash/fp";
import withWidth, { WithWidth } from "@material-ui/core/withWidth";
import ContactEditor from "./ContactEditor";


type Props = {contact: Contact} & WithStyles<typeof style> & WithWidth;

const ContactEditPage = ({contact, classes, width}: Props) => 
{
    const backAction = <GoBackAction rootClass={classes.backAction} />;

    const deleteAction = <DeleteAction
        contactId={contact.id}
        withText={width !== 'xs'}
        rootClass={classes.deleteAction} />;

    const avatar = <Avatar src={contact.avatar} className={classes.avatar}/>;

    const buttons = (
        <div className={classes.actions}>
            <Button variant="contained" color="secondary" onClick={() => {}} className={classes.button}>
                Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={() => {}} className={classes.button} autoFocus>
                Save
            </Button>              
        </div>
    )

    return <div>
        <MediaQuery maxWidth={959}>
            <div className={classes.shallowRoot}>
                <div className={classes.root}>
                    <div className={classes.toolbar}>
                        {backAction}{deleteAction}
                    </div>
                    <div className={classes.body}>                    
                        <div className={classes.heading}>
                            {avatar}
                        </div>
                        <div className={classes.formAndButtons}>
                            <ContactEditor contact={contact} />
                            {buttons}
                        </div>
                    </div>
                </div>
            </div>
        </MediaQuery>
        <MediaQuery minWidth={960}>   
            <div className={classes.root}>
                <div className={classes.smLeft}>
                    {avatar}
                </div>
                <div className={classes.smRight}>
                    <div className={classes.heading}>
                        {backAction}{deleteAction}
                    </div>
                    <div className={classes.formAndButtons}>
                        <ContactEditor contact={contact} />
                        {buttons}                
                    </div>  
                </div>          
            </div>
        </MediaQuery>
    </div>;
}

export default compose(withStyles(style), withWidth())(ContactEditPage);