import { WithStyles, withStyles, Input } from "@material-ui/core";
import { Contact } from "../models";
import { contactEditorStyle } from "../ui-design/contactEditor";
import { ContactFieldLabel, Divider } from "./reusables";
import React from 'react'

type Props = {contact: Contact} & WithStyles<typeof contactEditorStyle>;

const ContactEditor = ({contact, classes}: Props) => 
    <div>
        <div className={classes.field}>
            <ContactFieldLabel icon="person_outlined" text="full name" />
            <Input defaultValue={contact.fullName} className={`${classes.input} ${classes.fullWidth}`} />
        </div>
        <Divider className={classes.divider}/>
        <div className={classes.field}>
            <ContactFieldLabel icon="email" text="email" />
            <Input defaultValue={contact.email} className={`${classes.input} ${classes.fullWidth}`} />
        </div>
        <Divider className={classes.divider}/>
    </div>

export default withStyles(contactEditorStyle)(ContactEditor);