import { Icon, WithStyles, withStyles } from "@material-ui/core";
import { contactFieldLabelStyle } from "./reusables-style";
import React from 'react';

type ContactFieldLabelProps = {icon: string, text: string, className?: string} 
    & WithStyles<typeof contactFieldLabelStyle>;

const ContactFieldLabel_ = (p: ContactFieldLabelProps) => 
    <div className={`${p.classes.fieldLabel} ${p.className}`}>
        <Icon className={p.classes.fieldLabelIcon}>{p.icon}</Icon>
        <span className={p.classes.fieldLabelText}>{p.text}</span>
    </div>
 
export const ContactFieldLabel = withStyles(contactFieldLabelStyle)(ContactFieldLabel_);