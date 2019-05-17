import { Icon, WithStyles, withStyles } from "@material-ui/core";
import { contactFieldLabelStyle } from "../ui-design/contact-list/contactFieldLabel";
import React from 'react';

type Props = {icon: string, text: string, className?: string} & WithStyles<typeof contactFieldLabelStyle>;

const ContactFieldLabel = ({icon, text, classes, className}: Props) => 
    <div className={`${classes.fieldLabel} ${className}`}>
        <Icon className={classes.fieldLabelIcon}>{icon}</Icon>
        <span className={classes.fieldLabelText}>{text}</span>
    </div>
 
export default withStyles(contactFieldLabelStyle)(ContactFieldLabel);