import { Contact } from "../../models";
import React, { useState, useContext } from 'react';
import style from "./style";
import { DeleteAction, GoBackAction } from "../actions";
import { WithStyles, withStyles, Button, Avatar } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ContactForm from "./ContactForm";
import { useContactPageBaseStylesXs, useContactPageBaseStylesSm } from "../ContactPageBase-style";
import { DispatchContext } from "../../stateMgmt/DispatchContext";
import { saveContact, goBack } from "../../actions";


type Props = {contact: Contact, onConfirm: () => void} & WithStyles<typeof style>;

const ContactEditPage = ({contact, classes, onConfirm}: Props) => 
{ 
    const onlyXs = useMediaQuery('(max-width:599px)');
    const downSm = useMediaQuery('(max-width:959px)');

    const backAction = <GoBackAction onClick={() => {}} rootClass={classes.backAction} />;

    const deleteAction = <DeleteAction
        onConfirm={onConfirm}
        withText={!onlyXs}
        rootClass={classes.deleteAction} />;

    const avatar = <Avatar src={contact.avatar} className={classes.avatar}/>;

    const dispatch = useContext(DispatchContext);
    const [formInput, setFormInput] = useState(contact);

    const buttons = (
        <div className={classes.actions}>
            <Button 
                variant="contained"
                color="secondary"
                onClick={() => dispatch(goBack())}
                className={classes.button}>
                Cancel
            </Button>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => dispatch(saveContact(formInput))} 
                className={classes.button} 
                autoFocus>
                Save
            </Button>              
        </div>
    )

    const xsBaseClasses = useContactPageBaseStylesXs();
    const smBaseClasses = useContactPageBaseStylesSm();

    if(downSm){
        return (
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
                            <ContactForm initialInput={formInput} onChange={setFormInput} />
                            {buttons}
                        </div>
                    </div>
                </div>
            </div>);
    }
    return (  
        <div className={smBaseClasses.root}>
            <div className={smBaseClasses.smLeft}>
                {avatar}
            </div>
            <div className={smBaseClasses.smRight}>
                <div className={smBaseClasses.heading}>
                    {backAction}{deleteAction}
                </div>
                <div className={classes.formAndButtons}>
                    <ContactForm initialInput={formInput} onChange={setFormInput} />
                    {buttons}                
                </div>  
            </div>          
        </div>);
}

export default withStyles(style)(ContactEditPage);