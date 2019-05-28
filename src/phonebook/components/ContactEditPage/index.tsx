import { Contact } from "../../models";
import React from 'react';
import MediaQuery from "react-responsive";
import style from "./style";
import { DeleteAction, GoBackAction } from "../actions";
import { WithStyles, withStyles, Button, Avatar } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { compose }from "lodash/fp";
import withWidth, { WithWidth } from "@material-ui/core/withWidth";
import ContactEditor from "./ContactEditor";
import { useContactPageBaseStylesXs, useContactPageBaseStylesSm } from "../ContactPageBase-style";

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

    const xsBaseClasses = useContactPageBaseStylesXs();
    const smBaseClasses = useContactPageBaseStylesSm();

    return <div>
        <MediaQuery maxWidth={959}>
            <div className={classes.shallowRoot}>
                <div className={xsBaseClasses.root + ' '+ classes.root}>
                    <div className={xsBaseClasses.toolbar}>
                        {backAction}{deleteAction}
                    </div>
                    <div className={xsBaseClasses.body}>                    
                        <div className={xsBaseClasses.heading + ' ' + classes.heading}>
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
            <div className={smBaseClasses.root}>
                <div className={smBaseClasses.smLeft}>
                    {avatar}
                </div>
                <div className={smBaseClasses.smRight}>
                    <div className={smBaseClasses.heading}>
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